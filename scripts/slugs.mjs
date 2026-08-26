#!/usr/bin/env node
// Read a targets file, print "<url>\t<slug>" for each entry.
//
// The slug is the folder name under sites/. It matches ditto's own naming
// (registrable domain label: https://www.ebbscandinavia.com/ -> ebbscandinavia)
// so single-page-per-domain lists stay tidy. When a list holds several URLs on
// the same domain — 15 dataforseo.com pages, 4 github.com repos — the path is
// folded in to keep every target in its own folder.
import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const MULTIPART_TLDS = new Set([
  "co.uk", "org.uk", "ac.uk", "gov.uk", "co.jp", "co.kr", "co.nz", "co.za",
  "com.au", "com.br", "com.mx", "com.tr", "com.cn",
]);

function domainLabel(url) {
  let host = "";
  try { host = new URL(url).hostname; } catch { return ""; }
  const labels = host.replace(/^www\./i, "").split(".").filter(Boolean);
  if (labels.length <= 1) return clean(labels[0] ?? "");
  const tldParts = MULTIPART_TLDS.has(labels.slice(-2).join(".")) ? 2 : 1;
  return clean(labels[labels.length - 1 - tldParts] ?? labels[0]);
}

function pathSlug(url) {
  let u;
  try { u = new URL(url); } catch { return ""; }
  const sub = u.hostname.replace(/^www\./i, "").split(".").slice(0, -2).join("-");
  const parts = u.pathname.split("/").filter(Boolean);
  // Drop generic path prefixes that carry no meaning in a folder name.
  const skip = new Set(["blog", "posts", "post", "docs", "guides", "guide", "resources",
                        "resource-center", "articles", "article", "insights", "v3", "en"]);
  const meaningful = parts.filter((p) => !skip.has(p.toLowerCase()));
  return clean([sub, ...(meaningful.length ? meaningful : parts)].filter(Boolean).join("-"));
}

function clean(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function truncate(s, max = 60) {
  return s.length <= max ? s : s.slice(0, max).replace(/-+$/, "");
}

function hostname(url) {
  try { return new URL(url).hostname.replace(/^www\./i, ""); } catch { return ""; }
}

export function slugsFor(urls) {
  // Group by domain label first: a label owned by a single URL keeps the short,
  // ditto-native folder name.
  const byLabel = new Map();
  for (const url of urls) {
    const label = domainLabel(url) || "site";
    if (!byLabel.has(label)) byLabel.set(label, []);
    byLabel.get(label).push(url);
  }

  const out = new Map();
  const taken = new Set();
  for (const [label, list] of byLabel) {
    // andrewng.org vs andrewng.design, dataforseo.com vs docs.dataforseo.com:
    // same label, different sites — fall back to the full host.
    const hosts = new Set(list.map(hostname));
    const prefixOf = (url) => (list.length === 1 ? label
      : hosts.size > 1 ? clean(hostname(url)) : label);

    const prefixCount = new Map();
    for (const url of list) {
      const p = prefixOf(url);
      prefixCount.set(p, (prefixCount.get(p) ?? 0) + 1);
    }

    for (const url of list) {
      const prefix = prefixOf(url);
      // Several pages on one host: fold the path in so each gets its own folder.
      const path = prefixCount.get(prefix) > 1 ? pathSlug(url) : "";
      const slug = truncate(path ? `${prefix}-${path}` : prefix);
      let candidate = slug, n = 2;
      while (taken.has(candidate)) candidate = `${slug}-${n++}`;
      taken.add(candidate);
      out.set(url, candidate);
    }
  }
  return out;
}

export function readTargets(file) {
  return readFileSync(file, "utf8")
    .split("\n")
    .map((line) => line.replace(/#.*$/, "").trim())
    .filter((line) => line.length > 0);
}

// `node scripts/slugs.mjs <file> | head` closes the pipe early; that's not an error.
process.stdout.on("error", (err) => { if (err.code === "EPIPE") process.exit(0); });

// Only when run as a command. The module is also imported (fetch-source.mjs
// wants slugsFor), and an import would otherwise take that caller's first
// argument for a targets file and try to read a URL off disk.
const runAsCli = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (runAsCli) {
  const file = process.argv[2];
  if (!file) {
    console.error("usage: slugs.mjs <targets-file>");
    process.exit(2);
  }
  const urls = readTargets(file);
  const slugs = slugsFor(urls);
  for (const url of urls) process.stdout.write(`${url}\t${slugs.get(url)}\n`);
}
