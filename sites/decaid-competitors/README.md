# decaid.academy and its competitive set

Sixteen AI and digital training providers, one folder per site, each holding a
runnable app in `<slug>/app`. See the repo `README.md` for how to preview one.

The set splits by what the sites are, and so does how they were captured:

- **Personal brands** (`targets-competitors.txt`, leagues B and C) —
  `--mode=multi --max-routes=60 --depth=2`
- **The two that outgrew that cap** (`targets-competitors-more.txt`) —
  the same, at 200 routes
- **Corporate portals** (`targets-competitors-portals.txt`, league A) —
  `--mode=multi --max-routes=80 --depth=1`

The portals are captured shallower on purpose. Two of them are entered at a
section rather than a home page (`haufe-akademie.de/hierarchy/ki`,
`ihk.de/koeln`), and the crawler stays on the host, so without a depth bound
it would leave that section and work through the whole portal. These clones
are a sample of the area that was asked for, not a copy of the site.

## What is here

| Folder | Site | League | Routes | Note |
| --- | --- | --- | ---: | --- |
| `decaid` | decaid.academy | — | 10 | |
| `felixbeilharz` | felixbeilharz.de | B | 57 | |
| `afaik` | afaik.de | B | 52 | |
| `hubertusporschen` | hubertusporschen.com | B | 44 | |
| `niklasvolland` | niklasvolland.de | B | 19 | |
| `ai-first` | ai-first.ai | B | 15 | |
| `christian-tembrink` | christian-tembrink.com | B | 8 | |
| `profski` | profski.com | B | 8 | |
| `jens` | jens.marketing | B | 60 | re-run at a 200 cap returned the same 60 — complete at depth 2 |
| `digitaleprofis` | digitaleprofis.de | C | 160 | was 60 under the old cap |
| `ihk` | ihk.de/koeln | A | 12 | routes live under `koeln/`, not at the root |
| `bigdata-ai-fraunhofer-de` | bigdata-ai.fraunhofer.de | A | 9 | |
| `haufe-akademie` | haufe-akademie.de/hierarchy/ki | A | 7 | |
| `iwu-fraunhofer-de` | iwu.fraunhofer.de | A | 40 | was 25 under the old cap |
| `cegos-integrata` | cegos-integrata.de | A | 80 | **cut short** — still on the cap, now 80 |

A route count below the cap means the crawl ran out of pages on its own, so
that capture is complete for the depth it was given. A count sitting exactly
on the cap means it was cut short and the site has more.

## Missing

| Site | Why |
| --- | --- |
| `it-schulungen` | ditto fails with `TypeError: url.toLowerCase is not a function` — a fault in the compiler, not the site. Reproduced on a second run. |

Run `node scripts/qa-clones.mjs` from the repo root for the current state of
every target, this folder included.
