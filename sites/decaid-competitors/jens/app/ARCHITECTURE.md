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

Recipes identify higher-level patterns such as repeated cards, logo clouds, navigation, disclosures, accordions, tabs, carousels, and motion. Sections and components provide editable structure, SVG modules preserve source artwork, and `src/app/ditto` applies the small runtime behaviors that were captured safely. Runtime utilities emitted for this clone: none emitted for this capture.

## Clone Metadata

- routes: 60
- extracted components: 363
- section modules: 0
- SVG modules: 0
- content module: no
- component extraction requested: yes

## Routes

- / - Jens Polomski — KI-Marketing, Speaker & Newsletter
- /ki-newsletter - KI-Newsletter — kostenlos, wöchentlich von Jens Polomski · jens.marketing
- /workshops - KI-Workshops für Marketing-Teams — Inhouse & Remote · jens.marketing
- /100-millionen-token-kontextfenster-revolution-in-der-ki-entwicklung - 100-Millionen-Token-Kontextfenster: Revolution in der KI-Entwicklun… · jens.marketing
- /12-tage-openai-updates-die-ultimative-uebersicht - 12 Tage OpenAI Updates – die ultimative Übersicht · jens.marketing
- /5-profi-funktionen-fuer-midjourney - 5 Profi-Funktionen für Midjourney · jens.marketing
- /9-regeln-fuer-den-ki-einsatz-im-unternehmen - 9 Regeln für den KI-Einsatz im Unternehmen · jens.marketing
- /acht-prompting-techniken-im-uberblick - 8 Prompting Techniken im Überblick · jens.marketing
- /adobe-firefly-structure-reference - Neue „Structure Reference“ Funktion in Adobe Firefly: Kreativ… · jens.marketing
- /adobe-premiere-pro-ki-revolutioniert-videobearbeitung-mit-firefly-sora-und-runway - Adobe Premiere Pro: KI revolutioniert Videobearbeitung mit Firefly,… · jens.marketing
- /ai-act-schulungspflicht - KI-Kompetenz ist Pflicht ab 2025: Neue gesetzliche Anforderungen de… · jens.marketing
- /animationen-tool-jitter - Jitter macht Animationen verdammt einfach · jens.marketing
- /anthropic-gewinnt-copyright-klage-um-ki-training-teilweise - Anthropic gewinnt Copyright-Klage um KI-Training – teilweise · jens.marketing
- /autogen-microsoft - AutoGen: Ein LLM-Framework von Microsoft · jens.marketing
- /b2-ai-business-to-ai - B2AI (Business to AI): Die neue Geschäftslogik im KI-Zeitalter · jens.marketing
- /beste-experten-ki-marketing - Beste Experten für KI im Marketing 2026 — Top 10 (DACH) · jens.marketing
- /beste-ki-tools - Die besten KI-Tools 2024 – getestet & bewertet · jens.marketing
- /bing-integriert-ki-song-tool-suno-ai - Bing integriert KI-Song-Tool Suno AI · jens.marketing
- /blog - Blog — KI im Marketing, Tools & Strategie · jens.marketing
- /buehne - Bühne — Jens Polomski als Speaker für KI im Marketing · jens.marketing
- /chainforge-llms-testen - ChainForge – LLMs zu bewerten und vergleichen · jens.marketing
- /charakterkonsistenz-ueber-bilder-hinweg-so-gehts-in-midjourney - Charakterkonsistenz über Bilder hinweg: So gehts in Midjourney · jens.marketing
- /chatgpt-advanced-data-analysis - ChatGPT Advanced Data Analysis – Alles was du wissen musst! · jens.marketing
- /chatgpt-bilder-jetzt-auch-bearbeitbar-mit-inpainting - ChatGPT: Bilder jetzt auch Bearbeitbar mit Inpainting · jens.marketing
- /chatgpt-bilderkennung - ChatGPT Vision – 16 Beispiele für die Bilderkennung · jens.marketing
- /chatgpt-canvas-die-neue-art-kreativ-zu-schreiben-und-zu-programmieren - ChatGPT Canvas: Die neue Art, kreativ zu schreiben und zu programmi… · jens.marketing
- /chatgpt-chatbot - ChatGPT – der wohl mächtigste KI-Chatbot · jens.marketing
- /chatgpt-chats-durchsuchen-diese-tools-helfen-dabei - ChatGPT Chats durchsuchen – diese Tools helfen dabei · jens.marketing
- /chatgpt-datenanalyse-update - ChatGPTs Datenanalyse wird interaktiver! Plus direkte Integration i… · jens.marketing
- /chatgpt-einladungen - ChatGPT Plus kostenlos: Das neue Einladungssystem · jens.marketing
- /chatgpt-formater - Formater · jens.marketing
- /chatgpt-gpt-store - ChatGPT GPT Store – Die wichtigsten Funktionen erklärt · jens.marketing
- /chatgpt-kosten-pro-tag - Welche Kosten erzeugt ChatGPT? · jens.marketing
- /chatgpt-links-teilen - ChatGPT Links teilen: So funktioniert es · jens.marketing
- /chatgpt-memory-funktion - ChatGPT Memory 2026: So nutzt du das KI-Gedächtnis richtig · jens.marketing
- /chatgpt-mindmaps-kostenlos - ChatGPT MindMaps kostenlos erstellen – das praktischste Plugin für… · jens.marketing
- /chatgpt-ohne-login - Die Login-Pflicht bei ChatGPT fällt weg: OpenAI macht den Zugang zu… · jens.marketing
- /chatgpt-opt-out-anleitung - ChatGPT Opt-Out Anleitung · jens.marketing
- /chatgpt-parameter - ChatGPT Parameter endlich richtig nutzen (Anleitung) · jens.marketing
- /chatgpt-team-version - ChatGPT Business (vormals Team) 2026: Preise & Vergleich · jens.marketing
- /chatgpt-tools - Die besten ChatGPT Tools & Anwendungen · jens.marketing
- /chatgpt-unable-to-load-history-fehler-beheben - ChatGPT: Unable To Load History – Fehler beheben · jens.marketing
- /chatgpt-user-agent-blockieren - ChatGPT User Agent blockieren (Anleitung) · jens.marketing
- /chatgpt-werbung - OpenAI Ads Manager: ChatGPT Werbung im echten Walkthrough · jens.marketing
- /claude-code-guide-marketing-2026 - Claude Code für Marketing-Teams: Der 2026-Guide · jens.marketing
- /clubhouse-guide - Clubhouse Guide · jens.marketing
- /clubhouse-tools - Die besten Clubhouse Tools · jens.marketing
- /companygpt-chatgpt-eigene-firma - CompanyGPT – ChatGPT mit eigenen Daten nutzen (Guide) · jens.marketing
- /context-engineering-erklaert-die-wichtigste-faehigkeit-im-ki-zeitalter - Context Engineering erklärt: Die wichtigste Fähigkeit im KI-Zeitalt… · jens.marketing
- /crewdle - Crewdle – die umweltfreundliche Zoom-Alternative · jens.marketing
- /cursor-ai-ki-coding-editor - Coding mit KI – Cursor AI Code-Editor · jens.marketing
- /datenschutz - Datenschutzerklärung — jens.marketing · jens.marketing
- /die-besten-chatgpt-gpts-fuer-dein-marketing - Die besten ChatGPT GPTs für dein Marketing · jens.marketing
- /die-besten-ki-bild-generatoren - Die 22 besten KI-Bild-Generatoren 2026: kostenlos & im Vergleich · jens.marketing
- /die-besten-ki-coding-tools - Beste KI zum Programmieren 2026: 17 Tools im Vergleich (auch gratis) · jens.marketing
- /die-besten-midjourney-prompts - Midjourney Prompts: So generierst du perfekte KI-Bilder · jens.marketing
- /die-besten-video-ki-tools - Die 10 besten KI-Avatar Tools (auch kostenlos) · jens.marketing
- /diese-regeln-befolgt-dall-e-3 - Diese Regeln befolgt DALL-E 3 · jens.marketing
- /discord-bots - Die 16 besten Discord Bots · jens.marketing
- /duerfen-ki-bilder-aus-rechtlicher-sicht-verwendet-werden - Dürfen KI-Bilder aus rechtlicher Sicht verwendet werden? · jens.marketing

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.
