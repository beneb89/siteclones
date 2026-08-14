# ARCHITECTURE.md

## Overview

This app is a generated ditto.site clone. The generator captured the source pages, normalized the rendered DOM into an IR, inferred assets/tokens/sections/recipes, and emitted a static Next.js App Router project.

## Structure

- `src/app/layout.tsx`: root App Router layout, language, metadata, viewport, JSON-LD, and shared shell.
- `src/app/page.tsx` and nested route `page.tsx` files: generated route bodies.
- `src/app/globals.css`: reset, font faces, design tokens, and global page base.
- `src/app/ditto.css`: route or page fidelity CSS.
- `src/app/content.ts`: editable data layer when repeated regions were promoted.
- `src/app/components/`, `src/app/sections/`, `src/app/svgs/`: generated JSX modules.
- `src/app/ditto/`: runtime helpers for interaction and motion recipes.
- `public/assets/cloned/`: materialized source assets.

## Styling

The generator uses Tailwind classes for declarations that can be represented as stable utilities. Some styles remain in `ditto.css` because they are route-scoped, pseudo-element based, keyframe based, interaction-state based, or too specific to translate safely without changing the rendered result.

## Anchors

`data-ditto-id` exists in delivered apps where runtime utilities or generated CSS still need a stable DOM anchor. Validation-only capture ids are stripped from production output and should not be reintroduced.

## Recipes And Runtime

Recipes identify higher-level patterns such as repeated cards, logo clouds, navigation, disclosures, accordions, tabs, carousels, and motion. Sections and components provide editable structure, SVG modules preserve source artwork, and `src/app/ditto` applies the small runtime behaviors that were captured safely. Runtime utilities emitted for this clone: DittoWire.

## Clone Metadata

- routes: 60
- extracted components: 541
- section modules: 0
- SVG modules: 0
- content module: no
- component extraction requested: yes

## Routes

- / - KI verstehen. Sicher anwenden. | Digitale Profis
- /5-prompt-techniken-fuer-ki-chatbots - 5 Prompt-Techniken für KI-Chatbots: Praxisguide 2026 – Digitale Profis
- /9-tipps-fuer-bessere-prompts-in-chatgpt-und-co - 9 Tipps für bessere Prompts in ChatGPT und Co. – Digitale Profis
- /ai-slop-was-ki-massenware-ausmacht - KI Slop: Was KI-Spam ist und was besser funktioniert – Digitale Profis
- /artikel - Artikel – Digitale Profis
- /bessere-ki-antworten-mit-spracheingabe - Bessere KI-Antworten mit Spracheingabe – Digitale Profis
- /bewerbung-mit-chatgpt-so-machst-du-es-richtig - Bewerbung mit ChatGPT: sinnvoll und sicher einsetzen – Digitale Profis
- /chatbot-arena-welches-ki-modell-ist-das-beste - Chatbot Arena: KI-Modelle sinnvoll vergleichen – Digitale Profis
- /chatbots-ki-workflows-ki-agenten-einfach-erklaert - Chatbots, KI-Workflows und KI-Agenten einfach erklärt – Digitale Profis
- /chatgpt-der-ultimative-leitfaden - Was ist ChatGPT? Ein Guide für Einsteiger – Digitale Profis
- /chatgpt-fuer-lehrkraefte - ChatGPT für Lehrkräfte: sicher und sinnvoll einsetzen – Digitale Profis
- /chatgpt-images-2-0-neue-bild-ki-von-openai - ChatGPT Images 2.0: Neue Bild-KI von OpenAI – Digitale Profis
- /chatgpt-tutorial-in-3-minuten - ChatGPT in 3 Minuten: Schnellstart für Einsteiger – Digitale Profis
- /chatgpt-und-microsoft-excel-inkl-beispiele-und-prompts - ChatGPT und Excel: Beispiele, Prompts und Grenzen – Digitale Profis
- /claude-chatbot-besser-als-chatgpt - Claude: Was der Anthropic-Chatbot 2026 kann – Digitale Profis
- /context-engineering-so-promptest-du-in-2026 - Mit Context Engineering bessere KI-Ergebnisse – Digitale Profis
- /das-eu-ki-gesetz-erklaert - EU AI Act: Was das KI-Gesetz 2026 bedeutet – Digitale Profis
- /datenschutz - Datenschutz – Digitale Profis
- /deutsche-ki-podcasts-mit-notebooklm-erstellen - Deutsche KI-Podcasts mit NotebookLM erstellen – Digitale Profis
- /die-besten-ki-tools-aus-china - KI-Tools aus China: Modelle und Anbieter im Überblick – Digitale Profis
- /die-besten-prompts-fuer-bilder-in-chatgpt - Die besten Prompts für Bilder in ChatGPT – Digitale Profis
- /die-besten-prompts-fuer-das-lernen-mit-ki - Die besten Prompts für das Lernen mit KI – Digitale Profis
- /die-ki-news-der-woche-vom-01-04-2026 - Die KI-News der Woche vom 01.04.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-01-07-2025 - Die KI-News der Woche vom 01.07.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-01-07-2026 - Die KI-News der Woche vom 01.07.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-02-05-2024 - Die KI-News der Woche vom 02.05.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-03-04-2025 - Die KI-News der Woche vom 03.04.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-03-04-2025-2 - Die KI-News der Woche vom 10.04.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-03-06-2025 - Die KI-News der Woche vom 03.06.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-04-03-2026 - Die KI-News der Woche vom 04.03.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-04-04-2024 - Die KI-News der Woche vom 04.04.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-04-09-2025 - Die KI-News der Woche vom 04.09.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-04-11-2024 - Die KI-News der Woche vom 04.11.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-05-02-2026 - Die KI-News der Woche vom 05.02.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-05-07-2024 - Die KI-News der Woche vom 05.07.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-05-09-2024 - Die KI-News der Woche vom 05.09.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-06-02-2025 - Die KI-News der Woche vom 06.02.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-06-03-2025 - Die KI-News der Woche vom 06.03.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-06-06-2024 - Die KI-News der Woche vom 06.06.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-06-08-2026 - Die KI-News der Woche vom 06.08.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-06-11-2025 - Die KI-News der Woche vom 06.11.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-07-01-2025 - Die KI-News der Woche vom 07.01.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-07-05-2026 - Die KI-News der Woche vom 07.05.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-07-08-2025 - Die KI-News der Woche vom 07.08.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-08-05-2025 - Die KI-News der Woche vom 08.05.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-08-07-2026 - Die KI-News der Woche vom 08.07.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-09-04-2026 - Die KI-News der Woche vom 09.04.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-09-08-2024 - Die KI-News der Woche vom 09.08.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-09-10-2025 - Die KI-News der Woche vom 09.10.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-09-12-2024 - Die KI-News der Woche vom 09.12.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-10-06-2025 - Die KI-News der Woche vom 10.06.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-10-07-2025 - Die KI-News der Woche vom 10.07.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-11-04-2024 - Die KI-News der Woche vom 11.04.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-11-06-2026 - Die KI-News der Woche vom 11.06.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-11-07-2024 - Die KI-News der Woche vom 11.07.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-11-09-2025 - Die KI-News der Woche vom 11.09.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-11-09-2025-2 - Die KI-News der Woche vom 25.09.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-11-11-2024 - Die KI-News der Woche vom 11.11.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-11-12-2025 - Die KI-News der Woche vom 11.12.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-12-02-2026 - Die KI-News der Woche vom 12.02.2026 – Digitale Profis

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.
