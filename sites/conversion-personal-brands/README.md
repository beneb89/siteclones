# Personal brands, read for their funnel

Ten sites picked for how they move a visitor from free to paid. Each folder
holds a runnable capture in `<slug>/app` and a `FUNNEL.md` derived from it.

## How these were captured

`--mode=multi --max-routes=15 --depth=1 --no-screenshots --no-motion`

Deliberately shallow. The funnel sits one click from the home page — nav
targets, opt-in and lead magnet pages, pricing, product and course pages — and
a deeper crawl spends its budget below that instead. An earlier depth-2 run
returned 53 routes and 226 MB for neilpatel.com, almost all blog articles.

A route count of 15/15 is therefore the intended budget, not a defect: these
sites all have more pages than were kept, and the ones kept are the ones the
navigation leads with.

## What is here

| Folder | Site | Routes | CTAs found |
| --- | --- | ---: | ---: |
| `sparktoro` | sparktoro.com | 15 | 21 |
| `markmanson` | markmanson.net | 15 | 19 |
| `melrobbins` | melrobbins.com | 15 | 16 |
| `neilpatel` | neilpatel.com | 15 | 14 |
| `amyporterfield` | amyporterfield.com | 15 | 13 |
| `garyvaynerchuk` | garyvaynerchuk.com | 15 | 10 |
| `iwillteachyoutoberich` | iwillteachyoutoberich.com | 12 | 5 |
| `doubleyourfreelancing` | doubleyourfreelancing.com | 15 | 2 |

`iwillteachyoutoberich` at 12 routes ran out of pages at depth 1 rather than
hitting the cap.

Start at [`FUNNEL.md`](FUNNEL.md) for the index, or a site's own `FUNNEL.md`
for its routes, calls to action, opt-in points and visible prices.

## Missing

| Site | Why |
| --- | --- |
| `tim` (tim.blog) | HTTP 403, bot-protection page detected — ditto refuses to clone rather than work around it |
| `seths` (seths.blog) | the same |

Both are reproducible; a further attempt with these settings will not change
the outcome.

## Reading the maps

The capture shows what a page looked like. `FUNNEL.md` says where the links
go — it does not label a page "the tripwire" or "the upsell", because that
reading is yours to make. Prices are listed literally: every currency amount
printed on a captured page, so a careers page contributes salaries. And a
step that lives behind a webinar, an application or a checkout was never
reached by the crawl, which is where most of these brands put their real
price.

Regenerate after any re-capture with `node scripts/funnel-map.mjs`.
