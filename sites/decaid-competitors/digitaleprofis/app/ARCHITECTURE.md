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

- routes: 160
- extracted components: 1421
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
- /die-ki-news-der-woche-vom-12-03-2026 - Die KI-News der Woche vom 12.03.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-12-05-2026 - Die KI-News der Woche vom 12.05.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-12-09-2024 - Die KI-News der Woche vom 12.09.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-13-02-2025 - Die KI-News der Woche vom 13.02.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-13-03-2025 - Die KI-News der Woche vom 13.03.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-13-06-2024 - Die KI-News der Woche vom 13.06.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-14-01-2025 - Die KI-News der Woche vom 14.01.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-14-03-2024 - Die KI-News der Woche vom 15.03.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-14-08-2025 - Die KI-News der Woche vom 14.08.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-15-05-2025 - Die KI-News der Woche vom 15.05.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-16-04-2026 - Die KI-News der Woche vom 16.04.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-16-05-2024 - Die KI-News der Woche vom 16.05.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-16-10-2025 - Die KI-News der Woche vom 16.10.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-17-04-2025 - Die KI-News der Woche vom 17.04.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-17-07-2025 - Die KI-News der Woche vom 17.07.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-17-12-2024 - Die KI-News der Woche vom 17.12.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-18-04-2024 - Die KI-News der Woche vom 18.04.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-18-07-2024 - Die KI-News der Woche vom 18.07.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-18-11-2024 - Die KI-News der Woche vom 18.11.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-18-12-2025 - Die KI-News der Woche vom 18.12.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-19-02-2026 - Die KI-News der Woche vom 19.02.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-19-03-2026 - Die KI-News der Woche vom 19.03.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-19-09-2024 - Die KI-News der Woche vom 19.09.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-20-02-2025 - Die KI-News der Woche vom 20.02.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-20-06-2024 - Die KI-News der Woche vom 20.06.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-20-11-2025 - Die KI-News der Woche vom 20.11.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-21-01-2025 - Die KI-News der Woche vom 21.01.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-21-03-2024 - Die KI-News der Woche vom 21.03.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-21-08-2025 - Die KI-News der Woche vom 21.08.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-21-10-2024 - Die KI-News der Woche vom 21.10.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-22-01-2026 - Die KI-News der Woche vom 22.01.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-22-05-2025 - Die KI-News der Woche vom 22.05.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-22-08-2024 - Die KI-News der Woche vom 22.08.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-23-05-2024 - Die KI-News der Woche vom 23.05.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-23-07-2026 - Die KI-News der Woche vom 23.07.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-23-10-2025 - Die KI-News der Woche vom 23.10.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-24-07-2025 - Die KI-News der Woche vom 24.07.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-25-04-2024 - Die KI-News der Woche vom 25.04.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-25-07-2024 - Die KI-News der Woche vom 25.07.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-26-02-2026 - Die KI-News der Woche vom 26.02.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-26-03-2026 - Die KI-News der Woche vom 26.03.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-26-09-2024 - Die KI-News der Woche vom 26.09.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-26-11-2024 - Die KI-News der Woche vom 26.11.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-27-02-2025 - Die KI-News der Woche vom 27.02.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-27-03-2025 - Die KI-News der Woche vom 27.03.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-27-05-2026 - Die KI-News der Woche vom 27.05.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-27-06-2024 - Die KI-News der Woche vom 27.06.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-27-11-2025 - Die KI-News der Woche vom 27.11.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-28-04-2026 - Die KI-News der Woche vom 28.04.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-28-10-2024 - Die KI-News der Woche vom 28.10.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-29-01-2025 - Die KI-News der Woche vom 29.01.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-29-01-2026 - Die KI-News der Woche vom 29.01.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-29-04-2025 - Die KI-News der Woche vom 29.04.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-29-08-2024 - Die KI-News der Woche vom 29.08.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-30-07-2024 - Die KI-News der Woche vom 30.07.2024 – Digitale Profis
- /die-ki-news-der-woche-vom-30-07-2026 - Die KI-News der Woche vom 30.07.2026 – Digitale Profis
- /die-ki-news-der-woche-vom-30-10-2025 - Die KI-News der Woche vom 30.10.2025 – Digitale Profis
- /die-ki-news-der-woche-vom-31-07-2025 - Die KI-News der Woche vom 31.07.2025 – Digitale Profis
- /die-ki-news-vom-16-07-2026 - Die KI-News vom 16.07.2026 – Digitale Profis
- /google-i-o-neue-ki-tools-vorgestellt - Google I/O und KI: Was aus den Ankündigungen wurde – Digitale Profis
- /grundkurs-prompt-engineering-teil-1-iterative-verbesserung - Prompt Engineering Teil 1: Iterative Verbesserung – Digitale Profis
- /grundkurs-prompt-engineering-teil-2-kontextuelles-gedaechtnis - Prompt Engineering Teil 2: Kontextuelles Gedächtnis – Digitale Profis
- /grundkurs-prompt-engineering-teil-3-mehrstufige-dialoge - Prompt Engineering Teil 3: Mehrstufige Dialoge – Digitale Profis
- /impressum - Impressum – Digitale Profis
- /ki-als-chance-wie-unternehmen-den-technologischen-wandel-aktiv-gestalten-koennen - KI als Chance: Wie Unternehmen den Wandel aktiv gestalten – Digitale Profis
- /ki-erfolgreich-im-studium-einsetzen - KI erfolgreich im Studium einsetzen – Digitale Profis
- /ki-generierte-inhalte-erkennen-und-einordnen - KI-generierte Inhalte erkennen und einordnen – Digitale Profis
- /ki-hub - KI-Hub für die Verwaltung – Digitale Profis
- /ki-in-der-verwaltung-einsatzmoeglichkeiten - KI in der Verwaltung: Einsatzmöglichkeiten und Grenzen – Digitale Profis
- /ki-inhalte-kennzeichnen - KI-Inhalte kennzeichnen: Was seit dem 2. August 2026 gilt – Digitale Profis
- /ki-muss-dich-erst-kennenlernen - Warum KI guten Kontext braucht – Digitale Profis
- /ki-news - KI-News – Digitale Profis
- /kinderbuecher-mit-chatgpt-erstellen-eine-schritt-fuer-schritt-anleitung - Kinderbücher mit ChatGPT: Ideen, Bilder und PDF – Digitale Profis
- /kontextbewusstes-prompting-fuer-die-verwaltung - Kontextbewusstes Prompting für die Verwaltung – Digitale Profis
- /kostenlose-unzensierte-ki-chatbots-offline-nutzen - Lokale KI-Chatbots: Tools, Datenschutz und Grenzen – Digitale Profis
- /kostenloser-chatgpt-account-oder-plus-abo - ChatGPT kostenlos oder Plus: Was lohnt sich 2026? – Digitale Profis
- /lm-studio-bionic-im-test - LM Studio Bionic im Test: KI-Agent mit lokalen Modellen – Digitale Profis
- /mega-prompt-2-strukturierte-problemloesung-mit-ki - Mega-Prompt 2: Probleme mit KI strukturiert lösen – Digitale Profis
- /mega-prompt-2026-bessere-prompts-fuer-chatgpt-claude-gemini - Mega-Prompt 2026: Bessere Prompts für ChatGPT, Claude und Gemini – Digitale Profis
- /mit-ki-anfangen-erste-aufgabe-chatbot - KI für Anfänger: Hier startest du mit einem Chatbot – Digitale Profis
- /newsletter - Newsletter – Digitale Profis
- /notebooklm-das-beste-ki-tool-von-google - NotebookLM: Googles KI-Notizbuch für Quellenarbeit – Digitale Profis
- /openai-finanzierung-2026-einordnung - OpenAI-Finanzierung 2026: Was die Milliarden bedeuten – Digitale Profis
- /perplexity-mehr-als-eine-ki-suchmaschine - Perplexity: KI-Suche und Research-Tool erklärt – Digitale Profis
- /prompt-engineering-fuer-textbasierte-chatbots - Prompt Engineering für textbasierte Chatbots – Digitale Profis
- /prompt-engineering-grundlagen - Prompt Engineering Grundlagen – Digitale Profis
- /prompt-verzeichnis-anlegen - Prompt-Verzeichnis anlegen: So baust du eine nützliche Prompt-Bibliothek – Digitale Profis
- /seo-im-ki-zeitalter - SEO im KI-Zeitalter: Bei Google, ChatGPT & Co. gefunden werden – Digitale Profis
- /so-schreibst-du-die-besten-prompts-fuer-chatgpt - Die Prompt-Formel für bessere ChatGPT-Ergebnisse – Digitale Profis
- /so-schreibt-chatgpt-wie-du - So schreibt ChatGPT wie du – Digitale Profis
- /tipps-fuer-praesentationen-mit-ki - Tipps für Präsentationen mit KI – Digitale Profis
- /ueber-uns - Über uns – Digitale Profis
- /unterschaetzte-gefahren-generativer-ki - Generative KI: Risiken erkennen und steuern – Digitale Profis
- /vier-prompt-hacks-fuer-chatgpt - Vier Prompt-Techniken für ChatGPT, Claude und Gemini – Digitale Profis
- /was-ist-upcoming-gpt-mini-neues-modell-von-openai - OpenAIs kleine KI-Modelle im Überblick – Digitale Profis
- /welches-chatgpt-modell-sollte-man-verwenden - Welches ChatGPT-Modell sollte man 2026 verwenden? – Digitale Profis
- /autor/johannes-hartenbauer - Johannes Hartenbauer – Autor bei Digitale Profis
- /autor/timothy-meixner - Timothy Meixner – Autor bei Digitale Profis
- /artikel/page/2 - Artikel – Digitale Profis
- /artikel/page/5 - Artikel – Digitale Profis

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.
