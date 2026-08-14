#!/usr/bin/env node
// Check how complete the clones are.
//
//   node scripts/qa-clones.mjs            # table + summary
//   node scripts/qa-clones.mjs --json     # same data, machine-readable
//
// Every target list is paired with an output folder and a set of ditto flags.
// That pairing lives in .github/workflows/clone.yml, and this script reads it
// from there rather than keeping a second copy that would drift.
//
// Per target it reports one of:
//   ok          cloned, and the crawl ended on its own
//   capped      route count equals --max-routes, so the crawl was cut short
//   depth       single route under a depth limit — nothing beyond the entry
//   thin        cloned but suspiciously bare; worth a look
//   MISSING     no folder — the capture failed, see logs/<dest>/<slug>.log
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const WORKFLOW = join(REPO, ".github", "workflows", "clone.yml");

/** Pull the {list, dest, flags} objects the workflow defines. */
function readPlan() {
  const text = readFileSync(WORKFLOW, "utf8");
  const found = [...text.matchAll(/'(\{"list":.*?\})'/g)].map((m) =>
    JSON.parse(m[1]),
  );
  if (!found.length) {
    throw new Error(`no list/dest pairs found in ${WORKFLOW}`);
  }
  // A list may appear once only; later duplicates would shadow earlier ones.
  return [...new Map(found.map((p) => [p.list, p])).values()];
}

const flagValue = (flags, name) => {
  const m = flags.match(new RegExp(`--${name}=(\\d+)`));
  return m ? Number(m[1]) : null;
};

function slugsFor(list) {
  const out = execFileSync("node", [join(REPO, "scripts", "slugs.mjs"), list], {
    cwd: REPO,
    encoding: "utf8",
  });
  return out
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [url, slug] = line.split("\t");
      return { url, slug };
    });
}

const countRoutes = (dir) => {
  if (!existsSync(dir)) return 0;
  let n = 0;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) n += countRoutes(join(dir, e.name));
    else if (e.name === "page.tsx") n += 1;
  }
  return n;
};

const dirBytes = (dir) => {
  let total = 0;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    total += e.isDirectory() ? dirBytes(p) : statSync(p).size;
  }
  return total;
};

const mb = (bytes) => `${(bytes / 1048576).toFixed(1)}M`;

const rows = [];
for (const { list, dest, flags } of readPlan()) {
  if (!existsSync(join(REPO, list))) continue; // list removed but still wired up
  const maxRoutes = flagValue(flags, "max-routes");
  const depth = flagValue(flags, "depth");
  const multi = flags.includes("--mode=multi");

  for (const { url, slug } of slugsFor(list)) {
    const site = join(REPO, "sites", dest, slug);
    const app = join(site, "app");
    if (!existsSync(app)) {
      rows.push({ list, dest, slug, url, status: "MISSING", routes: 0 });
      continue;
    }
    const routes = countRoutes(join(app, "src", "app"));
    const bytes = dirBytes(site);
    // A multi-page capture mirrors the site's paths, so the entry page lands
    // at the target URL's own path rather than at the root: ihk.de/koeln
    // generates src/app/koeln/page.tsx and no root page at all. A single-page
    // capture always writes one page at the root, whatever the URL's path.
    const entryPath = multi ? new URL(url).pathname.replace(/^\/|\/$/g, "") : "";
    const hasEntry = existsSync(join(app, "src", "app", entryPath, "page.tsx"));

    let status = "ok";
    if (!hasEntry) status = "no-entry";
    else if (maxRoutes && routes >= maxRoutes) status = "capped";
    else if (multi && routes === 1 && depth) status = "depth";
    // One route is fine for a genuine one-pager; one route and almost no
    // payload is worth a look — a placeholder or the wrong domain looks
    // exactly like this.
    else if (multi && routes === 1 && bytes < 1_000_000) status = "thin";

    rows.push({ list, dest, slug, url, status, routes, maxRoutes, depth, bytes });
  }
}

// The other direction: folders on disk that no list claims any more. A target
// that gets parked or moved between lists would otherwise drop out of this
// audit silently, still sitting in the repo.
const claimed = new Set(rows.map((r) => `${r.dest}/${r.slug}`));
const orphans = [];
const sitesDir = join(REPO, "sites");
if (existsSync(sitesDir)) {
  for (const dest of readdirSync(sitesDir, { withFileTypes: true })) {
    if (!dest.isDirectory()) continue;
    for (const entry of readdirSync(join(sitesDir, dest.name), {
      withFileTypes: true,
    })) {
      if (!entry.isDirectory()) continue;
      const path = join(sitesDir, dest.name, entry.name);
      // A folder holding an app is a clone; anything else is a nested group
      // (galleries/), so look one level further down.
      if (existsSync(join(path, "app"))) {
        if (!claimed.has(`${dest.name}/${entry.name}`)) {
          orphans.push(`${dest.name}/${entry.name}`);
        }
        continue;
      }
      for (const sub of readdirSync(path, { withFileTypes: true })) {
        if (!sub.isDirectory() || !existsSync(join(path, sub.name, "app"))) continue;
        if (!claimed.has(`${dest.name}/${entry.name}/${sub.name}`)) {
          orphans.push(`${dest.name}/${entry.name}/${sub.name}`);
        }
      }
    }
  }
}

if (process.argv.includes("--json")) {
  console.log(JSON.stringify({ targets: rows, orphans }, null, 2));
} else {
  let lastList = null;
  for (const r of rows) {
    if (r.list !== lastList) {
      const p = readPlan().find((x) => x.list === r.list);
      console.log(`\n${r.list}  ->  sites/${p.dest}/   ${p.flags || "(single page)"}`);
      lastList = r.list;
    }
    const routes = r.status === "MISSING" ? "—" : String(r.routes);
    const cap = r.maxRoutes ? `/${r.maxRoutes}` : "";
    console.log(
      `  ${r.status.padEnd(8)} ${r.slug.padEnd(34)} ${(routes + cap).padStart(8)}` +
        (r.bytes ? `  ${mb(r.bytes).padStart(7)}` : ""),
    );
  }
  const by = (s) => rows.filter((r) => r.status === s).length;
  console.log(
    `\n${rows.length} targets: ${by("ok")} ok, ${by("capped")} capped, ` +
      `${by("depth")} depth-bound, ${by("thin")} thin, ` +
      `${by("no-entry")} without entry, ${by("MISSING")} missing`,
  );
  if (orphans.length) {
    console.log(`\n${orphans.length} clone(s) no list claims any more:`);
    for (const o of orphans) console.log(`  sites/${o}`);
  }
  if (by("capped") || by("MISSING") || by("thin")) {
    console.log(
      "\ncapped  = crawl hit --max-routes; the site has more pages than were kept" +
        "\ndepth   = only the entry page came through under --depth" +
        "\nthin     = one route and almost no payload — placeholder or wrong domain?" +
        "\nno-entry = nothing generated at the target URL's own path" +
        "\nMISSING = capture failed; logs/<dest>/<slug>.log has the reason",
    );
  }
  console.log(
    "\nStatus is judged against each list's flags as they stand now. A clone" +
      "\ncaptured before a flag changed is not re-judged — check the list's own" +
      "\nnotes when a route count looks like an older cap.",
  );
}
