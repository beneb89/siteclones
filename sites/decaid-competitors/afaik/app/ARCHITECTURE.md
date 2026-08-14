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

- routes: 52
- extracted components: 212
- section modules: 0
- SVG modules: 0
- content module: no
- component extraction requested: yes

## Routes

- / - AFAIK ≙ As Far As I Know – Kai Spriestersbach über KI und Suche
- /agenten-sind-keine-kolleg-innen - Agenten sind keine Kolleg:innen. Und genau deshalb brauchen sie eine Plattform
- /ai-content-detectoren - AI Content Detektoren: Kann man KI-Texte erkennen?
- /arc-agi-3-gpt-5-6-sol-opus-5-messproblem - ARC-AGI-3: „GPT-5.6 Sol schlägt Opus 5“ – nur ist das kein Vergleich, sondern ein Messproblem
- /arc-agi-3-haben-gpt-5-5-und-opus-4-7-wirklich-so-schlecht-abgeschnitten - ARC-AGI-3: Haben GPT-5.5 und Opus 4.7 wirklich so schlecht abgeschnitten – oder wurde ihnen nur nicht genug geholfen?
- /artikel - Artikel
- /automatisierte-textgenerierung - Besser & schneller Schreiben: Die besten KI-Text-Tools
- /buch - Richtig Texten mit KI: ChatGPT, GPT-4, GPT-3 & Co. – Das erste Buch von Kai Spriestersbach
- /buch-updates-und-erweitungen - Richtig Texten mit KI: ChatGPT, GPT-4, GPT-3 & Co. – Das erste Buch von Kai Spriestersbach
- /claude-opus-4-8-warum-ehrlichkeit-das-eigentliche-upgrade-ist - Claude Opus 4.8: Warum Ehrlichkeit das eigentliche Upgrade ist
- /datenschutz - Datenschutz
- /der-ki-graben - Der KI-Graben: Warum GenAI die einen besser macht – und die anderen abhängig
- /der-mythische-ki-monat - Der mythische KI-Monat
- /die-buehne-im-maschinengeist - Die Bühne im Maschinengeist: Was Claude über unser eigenes Denken verraten könnte
- /dsgvo-konformer-chatbot - Gehostet in Deutschland: DSGVO-konforme Chatbot-KI
- /enablement - KI-Enablement Service bzw. AI Enablement - AFAIK
- /faktor-5-googles-atlas-und-anthropics-economic-index - Faktor 5: Googles ATLAS-Studie und Anthropics Economic Index messen dasselbe – und liegen um das Fünffache auseinander
- /full-service-ki-automation - Ihr Full-Service-Partner für KI-Automationen
- /geo-beratung - GEO & AI SEO Beratung: Sichtbarkeit im Zeitalter der Generativen Suche
- /geo-studie-die-weniger-beweist-als-behauptet - Schon wieder eine GEO-Studie, die viel weniger beweist, als ihre Autoren behaupten
- /geo-zitiert-heisst-nicht-empfohlen-self-promotional-content - Zitiert heißt nicht empfohlen: Was drei Experimente über Self-Promotional Content in der KI-Suche zeigen
- /google-io-2026 - Google I/O 2026: Warum Search nicht mehr Search ist – und warum SEO seine Messlatte verliert
- /googles-atlas-studie - Googles ATLAS-Studie: Was die Zahlen wirklich zeigen
- /harness-engineering - Harness Engineering: Wie wir KI-Agenten zuverlässiger machen – aber nicht unfehlbar
- /impressum - Kontakt und Impressum: Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV und § 6 MDStV / TDG: Kai Spriestersbach - AFAIK
- /kai-spriestersbach - Über Kai Spriestersbach: Vita, Kontaktdaten, E-Mail-Adresse
- /ki-agenten-und-workflows-die-wirklich-funktionieren - KI-Agenten und Workflows, die wirklich funktionieren
- /ki-beratung - KI-Beratung durch den Experten Kai Spriestersbach - AFAIK
- /ki-buch-fuer-eltern - KI Buch für Eltern: Kluge Köpfchen mit KI – Das zweite Buch von Kai Spriestersbach
- /ki-buch-updates-und-erweiterungen - Richtig Texten mit KI: ChatGPT, GPT-4, GPT-3 & Co. – Das erste Buch von Kai Spriestersbach
- /ki-ist-wie-der-knopf-im-aufzug - KI ist wie der Knopf im Aufzug
- /ki-produktentwicklung - KI-gestützte Produktentwicklung für die Arbeitswelt der Zukunft
- /LINK-ERSTBEITRAG - Seite nicht gefunden
- /llm-readability-diskurs - LLM Readability: Muss ich meinen Content jetzt für Maschinen umschreiben?
- /llms-txt-agentic-search - Habe ich mich bei der llms.txt geirrt? Drei Signale, die das Bild verschieben.
- /narayanan-icml-2026-was-bleibt-zu-tun - 0,22 gegen 0,06: Warum KI-Agenten viel schneller klug werden als verlässlich
- /newsletter - Newsletter abonnieren
- /podcast - Podcast: Synapsensprung – Wo Technologie, Philosophie und Gesellschaft aufeinandertreffen
- /prompts - Die besten Prompts für ChatGPT, GPT-4, GPT-3 & Co.
- /prototyp - KI-Prototyp Service: Begleitung von der Idee zur praktischen KI-Anwendung in Ihrem Unternehmen
- /schema-org-knowledge-graph-ki-suche - GEO: Mit strukturierten Daten / Schema.org in den Knowledge Graph der KI-Suche?
- /schlechte-prompts-schlechte-texte - Schlechte Prompts, schlechte Texte: Warum mich diese KI-„Studie“ so ärgert
- /seo-fuer-ki-buch - SEO für KI – Das GEO-Buch von Kai Spriestersbach & Stefan Gehle
- /skimmer-scanner-reader-gibt-es-nicht - Skimmer, Scanner, Reader: Diese drei Lesertypen gibt es nicht
- /smarter-leben-mit-ki - Smarter leben mit KI: Effektive Lifehacks mit Künstlicher Intelligenz - Spare Zeit, löse Alltagsprobleme und entdecke kreative Ideen für ein entspannteres Leben | Prompt, ChatGPT Kai Spriestersbach
- /trust-ist-die-neue-sichtbarkeit - Trust in KI Suchen: Warum GEO mehr ist als ein neues SEO-Akronym
- /wavescope-wavelets-fuer-coding-agenten - WaveScope: Wie Wavelets Coding-Agenten das Sehen beibringen
- /wissenschaft-im-geo - Vom Bauchgefühl zur Evidenz: Warum GEO wissenschaftlicher arbeiten muss
- /woran-man-ki-geschichten-erkennt - Woran man KI-Geschichten erkennt – und warum das weniger bedeutet, als es klingt
- /artikel/page/12 - Artikel – Seite 12
- /artikel/page/2 - Artikel – Seite 2
- /artikel/page/3 - Artikel – Seite 3

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.
