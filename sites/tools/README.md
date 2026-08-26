# Standalone tool pages

Interactive one-off pages — calculators, checks, configurators — cloned one
page at a time (`targets-tools.txt`, single-page capture). A tool page is the
whole point of its own URL, so there is no navigation worth following from it.

| Folder | Page | Note |
| --- | --- | --- |
| `provimedia` | provimedia.de/tools/llm-kosten-rechner | LLM API cost calculator; `source/` holds the page's own JavaScript |

## What a clone of a tool page is and is not

ditto reproduces what the browser painted. The layout, the copy, the inputs
and their labels come through — for the LLM calculator, that includes the
model list, the sliders' `min`/`max`, the FAQ and the result table as it stood
for the page's default inputs. What does not come through is the code that
turns an input into a result: the compiler keeps images, svg, video, fonts and
css as assets and drops script bodies. Move a slider in the clone and nothing
happens.

Where that matters, the page's own scripts are fetched separately and kept in
`<slug>/source/` next to the clone — see `scripts/fetch-source.mjs` and the
`fetch-source` workflow, and that folder's README for what is in it. For the
LLM calculator that is the full price table, the hard-coded USD→EUR rate and
the workload presets: everything the rendered page shows a result for without
saying how.
