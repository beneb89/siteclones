# provimedia.de/tools/llm-kosten-rechner — the page's own code

The clone in `../app` reproduces what the browser painted. It does not carry
the page's JavaScript: ditto's capture stores images, svg, video, fonts and
css as assets and drops everything else, so a page whose point is its script —
here, a calculator — comes through as a working-looking widget that cannot
compute. This folder holds the code that is missing from it.

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

`scripts/fetch-source.mjs` follows those preload tags for exactly this reason;
run it (or the `fetch-source` workflow, since the sandbox proxy blocks the
host) to put the missing chunks beside this folder.

## What the arithmetic is

It does not need reverse engineering — the page states it, in the FAQ that the
clone captured:

```
Kosten = Anfragen × (Input-Tokens ÷ 1 Mio. × Input-Preis
                   + Output-Tokens ÷ 1 Mio. × Output-Preis)
```

The prices are per 1M tokens, input and output billed separately. Four are
named outright in the same FAQ text: GPT-5 at 1.25 / 10 USD, GPT-5 mini at
0.25 / 2, Claude Haiku 4.5 at 1 / 5, and the Claude Opus class at 5 / 25. The
rest of the table — Sonnet, Gemini 2.5 Pro, Mistral Large — appears only as
monthly totals for the default workload (10,000 requests, 800 input and 300
output tokens each), which fixes one equation per model and cannot be split
back into an input and an output price. Those come from the chunk above.

## Provenance

The saved page is a snapshot of a third party's site, kept for analysis. The
code in it stays that publisher's; see the repo README's "Use" section.
