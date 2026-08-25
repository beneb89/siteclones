# siteclones

Workspace for turning public URLs into runnable TypeScript apps with
[ditto.site](https://github.com/ion-design/ditto.site) — a deterministic
capture-to-code compiler (not an LLM page author): it renders a page in
Chromium and emits a Next.js App Router project (or Vite React) from what the
browser actually painted.

The toolchain lives in `vendor/ditto` (gitignored, MIT-licensed, installed by
script). Generated apps land in `sites/` and are committed.

## Setup

```bash
./scripts/setup.sh          # clone + npm ci + chromium check (idempotent)
./scripts/setup.sh --update # pull the latest ditto.site and reinstall
```

Runs automatically on session start via `.claude/settings.json`. Requires
Node >= 20; Chromium comes from `PLAYWRIGHT_BROWSERS_PATH` when it's already
present, otherwise Playwright fetches it once.

## Cloning a site

```bash
./scripts/clone-site.sh https://example.com/
./scripts/clone-site.sh https://example.com/ --mode=multi      # follow routes
./scripts/clone-site.sh https://example.com/ --styling=css     # plain CSS, not tailwind
./scripts/clone-site.sh https://example.com/ --framework=vite  # Vite React output
./scripts/clone-site.sh https://example.com/ --serve           # install deps + dev server
```

Output layout (ditto names the folder after the site's domain):

```
sites/<site>/app/      the generated project — committed
sites/<site>/.clone/   capture, IR, validation artifacts — gitignored
```

Batch runs group their output one level deeper — see "Cloning many sites at
once" below.

Preview a generated app:

```bash
cd sites/<site>/app && npm install && npm run dev
```

Inside each generated app, `AGENTS.md` explains what's safe to edit — page copy
lives in `src/app/content.ts`, components in `src/app/components/`.

| Flag | Values | Default |
| --- | --- | --- |
| `--mode` | `single`, `multi` | `single` |
| `--styling` | `tailwind`, `css` | `tailwind` |
| `--framework` | `next`, `vite` | `next` |
| `--max-routes` | number | compiler default |
| `--serve` / `--open` | — | off |

## Cloning many sites at once

Target lists live at the repo root, one URL per line (`#` starts a comment).
Each list has a folder under `sites/` that its output is grouped into:

| List | Lands in | What |
| --- | --- | --- |
| `targets.txt` | `sites/top20-personal-brands/` | the 12 personal brands and studios from the roundup |
| `targets-galleries.txt` | `sites/top20-personal-brands/galleries/` | the 7 galleries that roundup cites |
| `targets-full.txt` | `sites/top20-personal-brands/` | additions beyond the roundup |
| `targets-deep.txt` | `sites/top20-personal-brands/` | the sites deep enough to need a higher `--max-routes` |
| `targets-competitors.txt` | `sites/decaid-competitors/` | decaid.academy and the personal-brand competitors, multi-page |
| `targets-competitors-more.txt` | `sites/decaid-competitors/` | the two that hit that list's route cap, at a higher one |
| `targets-competitors-portals.txt` | `sites/decaid-competitors/` | the corporate-portal competitors, captured shallower |
| `targets-conversion.txt` | `sites/conversion-personal-brands/` | personal brands picked for their funnel craft, captured shallow |
| `targets-seo.txt` | `sites/seo-reference/` | 57 reference pages from the SEO/GEO/paid-media note |

Everything in `sites/top20-personal-brands/` itself is captured in full
(`--mode=multi --max-routes=60`): ditto follows each site's navigation and
clones the subpages it reaches. The galleries in `galleries/` stay
landing-page only — they sit on large third-party portals, so a crawl there
follows someone else's site rather than a personal brand's menu. The
SEO reference pages are single pages by nature.

Two lists can share a `--dest`: `targets-full.txt` lands beside the roundup
brands but tracks additions the roundup never named, so it stays its own list.

```bash
./scripts/clone-batch.sh --dest=top20-personal-brands
./scripts/clone-batch.sh --file=targets-seo.txt --dest=seo-reference
./scripts/clone-batch.sh --force                # re-clone what already exists
```

Omit `--dest` and a list clones straight into `sites/`.

Each URL gets its own folder: `sites/<dest>/<slug>/app`. The slug is the site's short
domain name when it's the only page from that site (`sites/ebbscandinavia/`),
and path-qualified when a list holds several pages from one host
(`sites/dataforseo-com-apis-content-analysis-api/`) — see `scripts/slugs.mjs`.
Preview the folder names for a list without cloning:

```bash
node scripts/slugs.mjs targets.txt
```

A failing target doesn't stop the run: the script prints a pass/fail summary
and keeps each target's full log in `logs/<dest>/<slug>.log`.

`sites/top20-personal-brands/README.md` indexes that bundle site by site.

## Checking how complete the clones are

```bash
node scripts/qa-clones.mjs          # table + summary
node scripts/qa-clones.mjs --json   # same data, machine-readable
```

Every target is reported as `ok`, `capped` (the crawl hit `--max-routes`, so
the site has more pages than were kept), `depth` (nothing beyond the entry
page came through under `--depth`), `thin` (cloned but bare — worth a look) or
`MISSING` (the capture failed; `logs/<dest>/<slug>.log` says why). It also
lists clones that no target list claims any more, so a parked or moved target
cannot drop out of the audit unnoticed.

The pairing of list, folder and flags is read out of the workflow, so the
report cannot drift from what the runs actually do.

## Reading the funnel out of a capture

```bash
node scripts/funnel-map.mjs                     # conversion-personal-brands
node scripts/funnel-map.mjs decaid-competitors  # any other folder
```

A clone reproduces what the browser painted; it does not say where a visitor
is moved from free to paid. This reads the captured pages back and writes a
`FUNNEL.md` per site — routes, calls to action and where each points, where
email is actually collected, and any price shown on a captured page — plus an
index for the folder.

Two things it deliberately does not do. It does not call a page "the tripwire"
or "the upsell": it reports the link, the label and the target, and the naming
is yours. And it never fills in a price it did not see — for brands like these
the number usually sits behind a webinar, an application or a checkout, and
the crawl stops at the door, which the report states outright.

## Network access

Capture needs outbound HTTPS to the target host. In a locked-down environment
(including this repo's default Claude Code remote sandbox) the egress proxy
denies arbitrary hosts, and clones fail with `ERR_TUNNEL_CONNECTION_FAILED` —
check `curl -sS "$HTTPS_PROXY/__agentproxy/status"` for the denial. Everything
up to capture still works there; only the network hop is refused.

Three ways to actually get the clones:

1. **GitHub Actions** (no local setup) — `.github/workflows/clone.yml` runs the
   batch on GitHub's runners, which have open egress, and commits the results
   back to the branch it ran on. Start it from the Actions tab → *clone* →
   *Run workflow* (pick a list, optionally `--force` or extra ditto flags). It
   also fires automatically whenever a target list changes. Per-target logs are
   kept as the run's `clone-logs` artifact.
2. **Locally** — `./scripts/setup.sh && ./scripts/clone-batch.sh`, on a machine
   with normal internet.
3. **Widen the sandbox policy** to the hosts you want, then run it in-session.

Loopback targets always work (`SSRF_ALLOW_LOOPBACK=true`, set by the wrapper).

## Hosted API (optional)

The local CLI needs no key. To use the hosted REST/MCP service instead, get a
key at <https://www.ditto.site/api-key>, copy `.env.example` to `.env`, and set
`DITTO_API_KEY`. Then:

```bash
curl -sS -X POST "$DITTO_API_URL/v1/clones" \
  -H "authorization: Bearer $DITTO_API_KEY" -H "content-type: application/json" \
  -d '{"url":"https://example.com/","options":{"mode":"single"}}' \
  | (cd vendor/ditto && npm run --silent unpack -- - ../../sites/example)
```

MCP endpoint: `https://api.ditto.site/mcp` (Bearer `$DITTO_API_KEY`). Tools:
`clone_website`, `get_clone_status`, `get_clone_result`, `list_clone_files`,
`read_clone_files`, `get_clone_bundle`.

A local API with no database: `cd vendor/ditto && SSRF_ALLOW_LOOPBACK=true npm run dev:api`
(REST on `http://localhost:8787/v1/clones`, MCP on `/mcp`).

## Use

Clone sites you own or are authorized to analyze — see ditto's
[RESPONSIBLE_USE.md](https://github.com/ion-design/ditto.site/blob/main/docs/RESPONSIBLE_USE.md)
for the project's own terms. Generated output is a reconstruction of what a
browser rendered; the original content's copyright and trademarks stay with its
publisher.
