#!/usr/bin/env node
// Derive a funnel map from captured clones.
//
//   node scripts/funnel-map.mjs                        # conversion-personal-brands
//   node scripts/funnel-map.mjs <dest-folder>
//
// A clone reproduces what the browser painted; it does not say where a
// visitor is moved from free to paid. This reads the captured pages back and
// writes that down: the routes, the calls to action and where they point,
// where email is collected, and any price actually shown on a captured page.
//
// Everything here is read off the capture. Where a site puts its prices
// behind a checkout, a webinar or a login, the crawl never saw them and the
// report says so rather than guessing.
import { readFileSync, existsSync, readdirSync, writeFileSync } from "node:fs";
import { join, dirname, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DEST = process.argv[2] ?? "conversion-personal-brands";
const ROOT = join(REPO, "sites", DEST);

const strip = (jsx) =>
  jsx
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^{}]*\}/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/** Every page.tsx under src/app, as a route path. */
function routesOf(appDir) {
  const base = join(appDir, "src", "app");
  const out = [];
  const walk = (dir) => {
    if (!existsSync(dir)) return;
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name === "page.tsx") {
        const rel = relative(base, dir).split("\\").join("/");
        out.push({ route: "/" + (rel === "" ? "" : rel), file: p });
      }
    }
  };
  walk(base);
  return out.sort((a, b) => a.route.localeCompare(b.route));
}

/** ditto writes the site's own summary and route titles into llms.txt. */
function llmsMeta(appDir) {
  const f = join(appDir, "src", "app", "llms.txt", "route.ts");
  if (!existsSync(f)) return { title: null, blurb: null, titles: new Map() };
  // The file embeds one big JS string literal; unescape the parts we need.
  const raw = readFileSync(f, "utf8").replace(/\\n/g, "\n").replace(/\\"/g, '"');
  const title = raw.match(/# (.+)/)?.[1]?.trim() ?? null;
  // The first prose line after the "# Title" heading inside the embedded
  // string — skipping the JS that wraps it, and ditto's own boilerplate.
  const body = raw.split(/# .+\n/)[1] ?? "";
  const blurb = body.split("\n").map((l) => l.trim()).find((l) =>
    l.length > 30 && !l.startsWith("#") && !l.startsWith("-") &&
    !/^(export|return|\}|new Response)/.test(l) &&
    !/generated ditto\.site clone/i.test(l)) ?? null;
  const titles = new Map();
  for (const m of raw.matchAll(/^- \[([^\]]+)\]\((https?:\/\/[^)]+)\)(?: - (.+))?$/gm)) {
    const path = new URL(m[2]).pathname.replace(/\/$/, "") || "/";
    titles.set(path, { title: m[1].trim(), desc: m[3]?.trim() ?? null });
  }
  return { title, blurb, titles };
}

const CTA_WORDS = /\b(join|start|get|download|free|kostenlos|subscribe|sign ?up|register|anmelden|book|buchen|buy|kaufen|enroll|apply|try|demo|watch|listen|shop|order|learn more|mehr erfahren|jetzt)\b/i;
const OFFER_WORDS = /\b(course|kurs|program|membership|coaching|masterclass|workshop|training|ebook|guide|challenge|bootcamp|academy|pricing|preise|plan|bundle|book)\b/i;
const MONEY = /(?:[€$£]\s?\d[\d.,]*|\d[\d.,]*\s?(?:€|EUR|USD|\$|per month|\/mo|\/month|pro Monat))/g;

function analysePage(file) {
  const src = readFileSync(file, "utf8");
  const links = [];
  for (const m of src.matchAll(/<a\b([^>]*?)href="([^"]+)"([^>]*?)>([\s\S]{0,600}?)<\/a>/g)) {
    const attrs = m[1] + m[3];
    const text = strip(m[4]);
    if (!text) continue;
    links.push({
      text,
      href: m[2],
      button: /data-component="button"/.test(attrs),
    });
  }
  const text = strip(src);
  return {
    links,
    // A <form> alone is meaningless here — site search and footer forms are
    // on every page. An email input, or link text offering a subscription, is
    // what marks the opt-in.
    emailCapture: /type="email"/.test(src)
      ? "email field"
      : /\b(newsletter|subscribe|abonnieren|opt-?in|join the list|free .{0,20}(course|guide|training))\b/i.test(text)
        ? "offer wording"
        : null,
    prices: [...new Set(
      (text.match(MONEY) ?? []).map((p) => p.trim().replace(/[.,]$/, "")),
    )].slice(0, 12),
    offerHits: [...new Set((text.match(new RegExp(OFFER_WORDS, "gi")) ?? [])
      .map((w) => w.toLowerCase()))].slice(0, 12),
  };
}

const scope = (href) =>
  href.startsWith("#") ? "anchor" : /^https?:/i.test(href) ? "external" : "internal";

const sites = existsSync(ROOT)
  ? readdirSync(ROOT, { withFileTypes: true })
      .filter((e) => e.isDirectory() && existsSync(join(ROOT, e.name, "app")))
      .map((e) => e.name)
  : [];

if (!sites.length) {
  console.error(`no clones under sites/${DEST}`);
  process.exit(1);
}

const overview = [];
for (const slug of sites) {
  const appDir = join(ROOT, slug, "app");
  const meta = llmsMeta(appDir);
  const routes = routesOf(appDir);

  const lines = [];
  lines.push(`# ${meta.title ?? slug} — funnel map`);
  lines.push("");
  if (meta.blurb) lines.push(`> ${meta.blurb}`, "");
  lines.push(
    `Derived from the capture in \`app/\` — ${routes.length} route(s). ` +
      `Everything below was read off pages the crawl actually reached; a step ` +
      `behind a checkout, webinar or login is not visible here.`,
  );
  lines.push("");

  const allCtas = new Map();
  let emailRoutes = [];
  const allPrices = new Set();

  lines.push("## Routes", "");
  lines.push("| Route | Title | Email capture | Prices shown |");
  lines.push("| --- | --- | --- | --- |");
  for (const r of routes) {
    const a = analysePage(r.file);
    const t = meta.titles.get(r.route === "/" ? "/" : r.route.replace(/\/$/, ""));
    if (a.emailCapture) emailRoutes.push(`${r.route} (${a.emailCapture})`);
    a.prices.forEach((p) => allPrices.add(p));
    for (const l of a.links) {
      if (!l.button && !CTA_WORDS.test(l.text)) continue;
      const key = `${l.text}→${l.href}`;
      if (!allCtas.has(key)) allCtas.set(key, { ...l, on: r.route });
    }
    lines.push(
      `| \`${r.route}\` | ${(t?.title ?? "—").replace(/\|/g, "\\|")} | ` +
        `${a.emailCapture ?? "—"} | ${a.prices.length ? a.prices.join(", ") : "—"} |`,
    );
  }
  lines.push("");

  lines.push("## Calls to action", "");
  if (allCtas.size) {
    lines.push("| On | Label | Points to | Kind |");
    lines.push("| --- | --- | --- | --- |");
    for (const c of [...allCtas.values()].slice(0, 40)) {
      lines.push(
        `| \`${c.on}\` | ${c.text.slice(0, 60).replace(/\|/g, "\\|")} | ` +
          `\`${c.href.slice(0, 70)}\` | ${c.button ? "button" : "link"} (${scope(c.href)}) |`,
      );
    }
  } else {
    lines.push("None matched — the capture holds no link text that reads as an offer.");
  }
  lines.push("");

  lines.push("## Free to paid", "");
  lines.push(
    emailRoutes.length
      ? `Email is collected on: ${emailRoutes.map((r) => `\`${r}\``).join(", ")}.`
      : "No email capture on any captured route — the opt-in sits deeper than this crawl went, or behind a third-party embed the capture did not reproduce.",
  );
  lines.push("");
  lines.push(
    allPrices.size
      ? `Prices visible on captured pages: ${[...allPrices].join(", ")}.\n\n` +
        `Read literally: every currency amount printed on a captured page is ` +
        `listed, whatever it refers to. A careers page contributes salaries, ` +
        `a terms page the price of the product it governs. Check the route ` +
        `column above before treating a number as an offer.`
      : "No price appears on any captured page. For this kind of site that is the norm rather than a gap: the number usually sits behind a webinar, an application or a checkout the crawler does not enter.",
  );
  lines.push("");

  writeFileSync(join(ROOT, slug, "FUNNEL.md"), lines.join("\n") + "\n");
  overview.push({
    slug,
    title: meta.title ?? slug,
    routes: routes.length,
    ctas: allCtas.size,
    email: emailRoutes.length,
    prices: allPrices.size,
  });
}

const idx = [];
idx.push("# Funnel maps", "");
idx.push(
  "One `FUNNEL.md` per site, derived from its capture: routes, calls to",
  "action and where they point, where email is collected, and any price shown",
  "on a captured page. Regenerate with `node scripts/funnel-map.mjs`.",
  "",
);
idx.push("| Site | Routes | CTAs | Routes with email capture | Prices shown |");
idx.push("| --- | ---: | ---: | ---: | ---: |");
for (const o of overview.sort((a, b) => b.ctas - a.ctas)) {
  idx.push(`| [\`${o.slug}\`](${o.slug}/FUNNEL.md) | ${o.routes} | ${o.ctas} | ${o.email} | ${o.prices || "—"} |`);
}
idx.push("");
idx.push(
  "A zero under prices is the usual case here, not a failed capture: these",
  "brands put the number behind a webinar, an application or a checkout, and",
  "the crawl stops at the door.",
);
writeFileSync(join(ROOT, "FUNNEL.md"), idx.join("\n") + "\n");
console.log(`wrote ${overview.length} funnel map(s) under sites/${DEST}/`);
for (const o of overview) console.log(`  ${o.slug.padEnd(24)} ${String(o.routes).padStart(3)} routes  ${String(o.ctas).padStart(3)} CTAs`);
