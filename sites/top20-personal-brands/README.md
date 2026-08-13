# Top 20 Best-Designed Personal Brand Websites in AI & Consulting

Clones of the sites named in that roundup, one folder per site. Each folder
holds a runnable app in `<slug>/app` — see the repo `README.md` for how to
preview one.

Every site at this level is captured in full (`--mode=multi
--max-routes=60`): ditto follows the site's navigation and clones the
subpages it reaches, not just the landing page. The galleries in `galleries/`
are the exception — see below.

The roundup's 20 entries split into two kinds, and so does this folder: the
personal brands and boutique studios sit at the top level, the curated
galleries it cites under "Where to Find More" sit in `galleries/`.

## Personal brands & studios

| Folder | Site | Who |
| --- | --- | --- |
| `andrewng` | andrewng.org | Andrew Ng — research-focused personal site |
| `lexfridman` | lexfridman.com | Lex Fridman — podcast / personal brand |
| `samaltman` | blog.samaltman.com | Sam Altman — long-running personal blog |
| `guglieri` | guglieri.com | Claudio Guglieri — consultant, thought leader |
| `strangewolfstudios` | strangewolfstudios.com | Danielle McCray — Strange Wolf |
| `haptic` | haptic.studio | Haptic Studio — UI/UX consultancy |
| `trifecta` | trifecta.xyz | Trifecta — growth studio |
| `ebbscandinavia` | ebbscandinavia.com | Ebb — Scandinavian transformation studio |
| `wearefloc` | wearefloc.com | FLOC* — digital strategy collective |
| `primary` | primary.studio | Primary — brand sprint studio |
| `oakline` | oakline.studio | Oakline Studio — minimal, design-first |
| `apresentforce` | apresentforce.com | A Present Force — female-founded studio |

## Additions beyond the roundup

Sites added later, captured the same way as the brands above.

| Folder | Site | Who |
| --- | --- | --- |
| `aiwithallie` | aiwithallie.com | Allie K. Miller — AI personal brand |
| `tonyrobbins` | tonyrobbins.com | Tony Robbins — coaching brand |

## Galleries (`galleries/`)

Landing page only. These sit on large third-party portals, so following their
navigation would crawl someone else's site rather than a personal brand.

| Folder | Source |
| --- | --- |
| `copyfol` | Copyfolio — hand-picked personal brand websites |
| `framer` | Framer — best consulting website design examples |
| `designrush` | DesignRush — best AI website designs |
| `khod` | Khod — AI website examples |
| `nxcode` | nxcode — AI website examples |
| `sitebuilderreport` | SiteBuilderReport — consulting websites |
| `99designs` | 99designs — consultant web design inspiration |

## Not included

- **andrewng.design** — a different Andrew Ng (a product designer). The
  roundup names only andrewng.org, and the page also failed to capture.

## Re-running

```bash
./scripts/clone-batch.sh --dest=top20-personal-brands \
  --mode=multi --max-routes=60
./scripts/clone-batch.sh --file=targets-full.txt \
  --dest=top20-personal-brands --mode=multi --max-routes=60
./scripts/clone-batch.sh --file=targets-galleries.txt \
  --dest=top20-personal-brands/galleries
```

Add `--force` to re-clone folders that already exist. The URLs live in
`targets.txt`, `targets-galleries.txt` and `targets-full.txt` at the repo root.
