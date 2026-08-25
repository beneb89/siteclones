# Working in this repo

This repo is a workspace for cloning websites into runnable apps with
[ditto.site](https://github.com/ion-design/ditto.site). Read `README.md` first.

## Layout

- `scripts/setup.sh` — installs/updates the toolchain into `vendor/ditto` (gitignored)
- `scripts/clone-site.sh <url> [flags]` — clones one URL into `sites/<site>/app`
- `scripts/clone-batch.sh [--file=<list>] [--dest=<subdir>]` — clones every URL
  in a target list, grouped under `sites/<subdir>/`
- `scripts/slugs.mjs <list>` — prints the `<slug>` folder each URL maps to
- `scripts/qa-clones.mjs` — reports per target whether the capture is complete,
  capped, thin or missing; reads list/dest/flags out of the workflow
- `scripts/funnel-map.mjs [dest]` — writes a `FUNNEL.md` per site from its
  capture: routes, CTAs and their targets, email capture, visible prices
- `targets.txt`, `targets-full.txt` and `targets-deep.txt`
  (→ `top20-personal-brands`, multi-page; `deep` carries a higher route cap),
  `targets-galleries.txt` (→ `top20-personal-brands/galleries`, single page),
  `targets-seo.txt` (→ `seo-reference`, single page)
- `.github/workflows/clone.yml` — runs the batch on a GitHub runner (open
  egress) and commits the results back to the branch
- `logs/<dest>/<slug>.log` — full compiler output per batch target
- `sites/<dest>/<site>/app/` — generated project, committed
- `sites/<dest>/<site>/.clone/` — capture + IR artifacts, gitignored (large,
  machine-specific)
- `vendor/ditto/` — upstream toolchain, never edit or commit; re-run setup to refresh

## Rules

- Never commit `vendor/`, `node_modules/`, `.clone/`, or `.env`.
- Don't hand-edit files under `vendor/ditto`; upstream changes belong upstream.
- Prefer `scripts/clone-site.sh` over calling `npm run clone` directly — it
  fixes the output path and makes sure deps are installed.
- Re-cloning a site reuses its existing folder; commit the diff so changes to
  the generated output stay reviewable.
- A list and its `--dest` belong together — cloning a list into a different
  folder re-clones everything, because the skip check looks at the destination.
  The pairings live in `.github/workflows/clone.yml` and the README table.
- Two lists may share a `--dest`. Flags that belong to a list live in the
  workflow's matrix entry, not in the run.
- Switching a list to multi-page capture does not rewrite the clones that are
  already there — the skip check only looks for the folder. Dispatch that list
  once with `force: true` to actually recapture it.
- `--depth=<n>` bounds how many link hops a crawl follows, `--max-routes` how
  many pages it keeps. Use `--depth` when a target URL is a section of a large
  portal: the crawler stays on the host, so without it the crawl leaves the
  section and works through the whole site.
- A route count that lands exactly on `--max-routes` means the crawl was cut
  short, not that the site ended there. Move such a site to a list with a
  higher cap rather than raising the cap for everything.
- One run per list at a time (the workflow sets `concurrency` per list). Two
  runs cloning the same list into the same folder raced: the second finished
  minutes after the first, could not rebase onto it, and lost four hours of
  capture. Pushing a list twice in quick succession is what started it.
- The workflow stops the batch at 240 minutes on purpose. A job GitHub cancels
  at its own timeout skips every remaining step, so the commit never runs and
  finished captures are lost — a run over sixteen sites was cancelled that way
  with nothing to show. Keep a list small enough to finish inside that window,
  or split it.
- Multi-page capture of a big site can exhaust Node's heap
  (`Reached heap limit Allocation failed`). The workflow raises it via
  `NODE_OPTIONS`; if a site still dies, lower its `--max-routes` rather than
  pushing the heap past what the runner has.
- Slugs are derived per list: dropping an entry can shorten another entry's
  slug (removing andrewng.design turned `andrewng-org` back into `andrewng`).
  Run `scripts/slugs.mjs` after editing a list and rename folders to match.
- When editing a generated app, follow the `AGENTS.md` inside that app: copy
  goes in `src/app/content.ts`, components in `src/app/components/`.
- API keys (`DITTO_API_KEY`) live in `.env` only — never inline in commands,
  code, or commit messages.

## Gotchas

- Capture fails with `ERR_TUNNEL_CONNECTION_FAILED` when the egress proxy
  denies the target host. Check `curl -sS "$HTTPS_PROXY/__agentproxy/status"`.
  Don't route around the denial — run the batch on a runner that's allowed to
  reach the target instead: `.github/workflows/clone.yml` does exactly that and
  commits the output back to the branch. A wider network policy or a local run
  are the other two options; none of them is a code change.
- A run that dies within seconds — `plan` failed, the clone job skipped, no
  logs at all — is a startup failure, not a broken workflow file. Do not
  bisect the YAML for it. The reason is in the check-run annotation:
  `/repos/{owner}/{repo}/commits/{sha}/check-runs`, then the failed run's
  `annotations_url`. It said "the job was not started because recent account
  payments have failed or your spending limit needs to be increased" — an
  Actions billing stop, which no change in this repo can fix.
- Chromium is preinstalled at `PLAYWRIGHT_BROWSERS_PATH` in the remote
  sandbox — don't run `playwright install` unless setup says it's missing.
- ditto respects robots.txt by default.
