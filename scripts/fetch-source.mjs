#!/usr/bin/env node
// Save a page's own JavaScript next to its clone.
//
// A ditto clone reproduces what the browser painted. It stores images, svg,
// video, fonts and css as assets — `classifyAsset` in the compiler's capture
// step returns null for anything else — so a page's script bundles are never
// part of the output. For a page whose point IS its script (a calculator, a
// configurator), the clone therefore shows the widget but cannot run it.
//
// This fetches the page and the scripts it references, and writes them beside
// the clone under `sites/<dest>/<slug>/source/`. It is a download, not a
// reconstruction: minified bundles arrive minified, and a bundle that pulls
// further chunks at runtime only yields those chunks if the page requested
// them on load.
//
// Usage:
//   node scripts/fetch-source.mjs <url> [--dest=<subdir>] [--slug=<name>]
//                                       [--all] [--out=<dir>]
//
//   --no-chunks  skip the second pass over the downloaded bundles (below).
//   --all   also download scripts from other domains (analytics, consent,
//           widgets). Off by default — but note that plenty of sites serve
//           their own bundles from a CDN domain (github.com loads every one of
//           its scripts from github.githubassets.com), so if the run reports
//           skipped hosts, read them before deciding. Skipped scripts are
//           listed in MANIFEST.tsv either way; nothing disappears quietly.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { slugsFor } from "./slugs.mjs";

const args = process.argv.slice(2);
const url = args.find((a) => !a.startsWith("--"));
if (!url) {
  console.error("usage: node scripts/fetch-source.mjs <url> [--dest=<subdir>] [--slug=<name>] [--all]");
  process.exit(2);
}
const opt = (name, fallback) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : fallback;
};
const all = args.includes("--all");
const chunks = !args.includes("--no-chunks");
const slug = opt("slug", slugsFor([url]).get(url));
const dest = opt("dest", "tools");
const outDir = opt("out", join("sites", dest, slug, "source"));

const UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

async function get(target) {
  const res = await fetch(target, { headers: { "user-agent": UA, accept: "*/*" }, redirect: "follow" });
  const body = Buffer.from(await res.arrayBuffer());
  return { status: res.status, body };
}

// Where a script's bytes go: its URL path under source/, so the folder mirrors
// the site and two chunks with the same basename cannot overwrite each other.
function fileFor(target) {
  const u = new URL(target);
  const host = u.hostname.replace(/^www\./i, "");
  let path = u.pathname.replace(/^\/+/, "") || "index";
  if (path.endsWith("/")) path += "index";
  if (!/\.[a-z0-9]+$/i.test(path)) path += ".js";
  // A query string can be the only thing telling two builds apart.
  const q = u.search ? "-" + Buffer.from(u.search).toString("hex").slice(0, 12) : "";
  return join(host, path.replace(/(\.[a-z0-9]+)$/i, `${q}$1`));
}

function write(rel, bytes) {
  const target = join(outDir, rel);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, bytes);
  return target;
}

const page = await get(url);
if (page.status >= 400) {
  console.error(`page returned HTTP ${page.status}`);
  process.exit(1);
}
const html = page.body.toString("utf8");
write("index.html", page.body);

const manifest = [["status", "bytes", "file", "url"]];
manifest.push([String(page.status), String(page.body.length), "index.html", url]);

// Inline <script> blocks: on a hand-built tool page the whole calculator is
// often right here, and it is the one part no separate request would return.
let inline = 0;
for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
  const attrs = m[1] || "";
  if (/\bsrc=/i.test(attrs)) continue;
  const body = m[2] ?? "";
  if (!body.trim()) continue;
  const type = (attrs.match(/type=["']([^"']+)["']/i) || [])[1] || "";
  const ext = /json/i.test(type) ? "json" : "js";
  const rel = join("inline", `${String(++inline).padStart(2, "0")}.${ext}`);
  write(rel, Buffer.from(body, "utf8"));
  manifest.push(["inline", String(Buffer.byteLength(body)), rel, type || "text/javascript"]);
}

// "The site's own" means the same registrable domain, not merely the same
// origin: assets often sit on a sibling subdomain (cdn., static., assets.).
const registrable = (host) => host.replace(/^www\./i, "").split(".").slice(-2).join(".");
const home = registrable(new URL(url).hostname);
const seen = new Set();
const srcs = [];
const skipped = [];
const consider = (raw) => {
  let abs;
  try { abs = new URL(raw, url).href; } catch { return; }
  if (seen.has(abs)) return;
  seen.add(abs);
  if (!all && registrable(new URL(abs).hostname) !== home) { skipped.push(abs); return; }
  srcs.push(abs);
};
for (const m of html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)) consider(m[1]);
// Module chunks the page imports dynamically are not <script src>; a bundler
// announces them as <link rel="modulepreload"> (or preload as=script) instead,
// and that is where a per-page component lands. On provimedia's calculator the
// entry bundle holds the framework and the arithmetic sits in a preloaded
// chunk, so a src-only sweep gets everything except the part that was wanted.
for (const m of html.matchAll(/<link\b[^>]*>/gi)) {
  const tag = m[0];
  const rel = (tag.match(/\brel=["']([^"']+)["']/i) || [])[1]?.toLowerCase() ?? "";
  const as = (tag.match(/\bas=["']([^"']+)["']/i) || [])[1]?.toLowerCase() ?? "";
  if (rel !== "modulepreload" && !(rel === "preload" && as === "script")) continue;
  const href = (tag.match(/\bhref=["']([^"']+)["']/i) || [])[1];
  if (href) consider(href);
}

let failed = 0;
const downloaded = [];
for (const src of srcs) {
  try {
    const res = await get(src);
    const rel = fileFor(src);
    if (res.status < 400) { write(rel, res.body); downloaded.push({ url: src, bytes: res.body }); }
    else failed++;
    manifest.push([String(res.status), String(res.body.length), rel, src]);
  } catch (err) {
    failed++;
    manifest.push(["error", "0", "—", `${src} (${err.message})`]);
  }
}

// Second pass: the chunks a bundle imports on demand.
//
// A page's own component is usually not referenced by the HTML at all. On this
// site the server-rendered markup preloads the entry bundle and gsap and
// nothing else — the calculator's chunk is named only inside the bundle's
// import map, as "assets/LlmKostenRechner-PULna0r3.js" and as
// "./LlmKostenRechner-PULna0r3.js". (A browser that has navigated the app does
// emit modulepreload tags for it, which is why a hand-saved page and a plain
// fetch disagree about what the page needs.)
//
// So read the hashed filenames back out of every bundle downloaded above and
// fetch them from beside that bundle, which is where a bundler puts them. One
// hop only, and capped: the map lists every route's chunk, not just this
// page's, and following those recursively would mirror the whole build.
const CHUNK_CAP = 250;
let chunkCount = 0;
if (chunks) {
  const found = [];
  for (const { url: from, bytes } of downloaded) {
    if (!from.endsWith(".js")) continue;
    for (const m of bytes.toString("utf8").matchAll(/["'`]([^"'`\s]*?[A-Za-z0-9_$.-]+-[A-Za-z0-9_-]{6,}\.js)["'`]/g)) {
      const name = m[1].split("/").pop();
      if (!name) continue;
      let abs;
      try { abs = new URL(name, from).href; } catch { continue; }
      if (seen.has(abs)) continue;
      seen.add(abs);
      found.push(abs);
    }
  }
  for (const target of found.slice(0, CHUNK_CAP)) {
    try {
      const res = await get(target);
      const rel = fileFor(target);
      if (res.status < 400) { write(rel, res.body); chunkCount++; }
      else failed++;
      manifest.push([String(res.status), String(res.body.length), rel, target]);
    } catch (err) {
      failed++;
      manifest.push(["error", "0", "—", `${target} (${err.message})`]);
    }
  }
  if (found.length > CHUNK_CAP) {
    console.log(`  ${found.length - CHUNK_CAP} further chunk(s) beyond the ${CHUNK_CAP} cap were not fetched`);
  }
}

for (const src of skipped) manifest.push(["skipped", "0", "—", src]);

write("MANIFEST.tsv", Buffer.from(manifest.map((r) => r.join("\t")).join("\n") + "\n", "utf8"));

console.log(`${url} -> ${outDir}`);
console.log(`  page + ${inline} inline block(s) + ${srcs.length} script file(s)` +
            (chunkCount ? ` + ${chunkCount} imported chunk(s)` : "") +
            (failed ? `, ${failed} failed` : ""));
if (skipped.length) {
  const hosts = [...new Set(skipped.map((s) => new URL(s).hostname))];
  console.log(`  ${skipped.length} script(s) left on other domains: ${hosts.join(", ")}`);
  console.log(`  re-run with --all if the logic lives there`);
}
