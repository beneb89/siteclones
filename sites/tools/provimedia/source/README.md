# provimedia.de/tools/llm-kosten-rechner — the page's own code

The clone in `../app` reproduces what the browser painted. It does not carry
the page's JavaScript: ditto's capture stores images, svg, video, fonts and
css as assets and drops everything else, so a page whose point is its script —
here, a calculator — comes through as a working-looking widget that cannot
compute. This folder holds the code that is missing from it; the clone itself
now computes, out of `../app/src/app/llm-pricing.ts`, which was written from
what is in here.

Two folders, from two sources:

- `provimedia.de/` — fetched from the live site by `scripts/fetch-source.mjs`
  on a runner: the entry bundle and all 165 chunks of the build, the
  calculator's among them.
- `saved-page/` — a browser export of the page, supplied by hand. It is the
  server-rendered markup plus what the browser had already loaded.

`MANIFEST.tsv` records every script the fetch found, with its HTTP status —
including any it chose not to download.

## `saved-page/`

A browser "save page as, complete" export of the live page, supplied by hand.
Relative paths were rewritten from the export's `… _files/` folder to
`assets/`, so `saved-page/index.html` still opens locally.

| File | What |
| --- | --- |
| `index.html` | the server-rendered page, calculator markup included |
| `page-props.json` | the Inertia payload out of the page's `data-page` attribute, unescaped and formatted |
| `assets/app-C2UqCN8s.js` | the entry bundle: Vue, Inertia, the router, the shared components |
| `assets/*.css` | the page's stylesheets |

The site is a Laravel/Inertia app with a Vue front end. Each page component is
a separate chunk loaded on demand, and a browser export only writes the files
it can see as page resources — so the entry bundle is here and the chunk that
holds the calculator, `LlmKostenRechner-PULna0r3.js`, is not. The page's own
`<link rel="modulepreload">` tags name it:

```
https://www.provimedia.de/build/assets/LlmKostenRechner-PULna0r3.js
https://www.provimedia.de/build/assets/ToolShell-CBPUm-7K.js
```

Both are here now, in `provimedia.de/build/assets/`. Getting them took a
second pass: a plain fetch of the page preloads only the entry bundle and
gsap — the chunk names live inside the entry bundle's import map, and a
browser that has already navigated the app is what emits the extra
modulepreload tags the hand-saved page shows. `scripts/fetch-source.mjs`
therefore reads the hashed filenames back out of each downloaded bundle and
fetches them from beside it. That is the whole build's chunk set, 165 files
and 3.4 MB, not just this page's chain; the import map does not separate by
page.

## The calculator, in full

`provimedia.de/build/assets/LlmKostenRechner-PULna0r3.js` (13 KB) holds everything the clone
cannot do. The formula is the one the FAQ states:

```
USD = Anfragen × (Input-Tokens ÷ 1e6 × inputPerMTok
                + Output-Tokens ÷ 1e6 × outputPerMTok)
EUR = USD × 0.88
```

The USD→EUR rate is hard-coded at `0.88`, stamped `2026-07-14`, as is the
price table — which is the part that could not be read off the rendered page:

| Model | Vendor | Input / 1M | Output / 1M |
| --- | --- | ---: | ---: |
| Claude Opus 4.8 | Anthropic | 5 USD | 25 USD |
| Claude Sonnet 5 | Anthropic | 3 USD | 15 USD |
| Claude Haiku 4.5 | Anthropic | 1 USD | 5 USD |
| GPT-5 | OpenAI | 1.25 USD | 10 USD |
| GPT-5 mini | OpenAI | 0.25 USD | 2 USD |
| Gemini 2.5 Pro | Google | 1.25 USD | 10 USD |
| Mistral Large | Mistral | 2 USD | 6 USD |

The workload presets behind the token sliders:

| Preset | Input tokens | Output tokens |
| --- | ---: | ---: |
| Chatbot-Antwort | 800 | 300 |
| Dokument-Zusammenfassung | 4,000 | 500 |
| RAG-Suche mit Kontext | 2,500 | 400 |
| Code-Assistent | 3,000 | 1,200 |

Request count is bounded at 1 … 10,000,000, tokens at 0 … 1,000,000 — the
same `min`/`max` the clone's sliders carry.

## Provenance

The saved page is a snapshot of a third party's site, kept for analysis. The
code in it stays that publisher's; see the repo README's "Use" section.
