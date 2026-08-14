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

- routes: 19
- extracted components: 163
- section modules: 0
- SVG modules: 0
- content module: no
- component extraction requested: yes

## Routes

- / - Niklas Volland – KI-Transformationsexperte | Keynote Speaker & Berater
- /academy-infopaket.html - Dein Academy-Infopaket – KI•POWERBOOST ACADEMY | Niklas Volland
- /academy.html - Academy – Niklas Volland | KI•POWERBOOST ACADEMY für Tools, Tutorials & Community
- /agb.html - Erfüllungs- und Leistungsrichtlinie – KI•POWERBOOST ACADEMY
- /blog-atlas.html - Das ATLAS-Framework – Niklas Volland | KI-Agenten strukturiert ins Unternehmen integrieren
- /blog-caio.html - Chief AI Officer (CAIO) – Niklas Volland | Warum Unternehmen KI-Führung auf C-Level brauchen
- /blog-ki-keynote-buchen.html - KI-Keynote buchen – Niklas Volland | Die wichtigsten Fragen, die sich Unternehmen vor einer KI-Keynote stellen
- /blog-modell-agnostik.html - KI-Technologie auswählen – Niklas Volland | Warum Modell-Agnostik die wichtigste KI-Strategie wird
- /blog-sobos.html - Das SOBOS-Modell – Niklas Volland | KI-Transformation strukturiert einführen
- /blog.html - Blog – Niklas Volland | KI-Strategie, Frameworks & Einordnungen
- /datenschutz.html - Datenschutzerklärung – Niklas Volland
- /impressum.html - Impressum – Niklas Volland
- /index.html - Niklas Volland – KI-Transformationsexperte | Keynote Speaker & Berater
- /keynote.html - Keynote – Niklas Volland | KI-Keynotes für C-Level & Konferenzen
- /kollaborationen.html - Kollaborationen – Niklas Volland | Ausgewählte Werbepartnerschaften mit AI-Brands
- /kontakt.html - Kontakt – Niklas Volland | Anfrage für Keynote & Academy
- /ueber-niklas.html - Über Niklas – KI-Transformationsexperte, Keynote Speaker & Practitioner
- /workshop.html - Workshop – Niklas Volland | Hands-on KI-Trainings, Strategie-Workshops & AI Updates
- /en/kollaborationen.html - Collaborations - Niklas Volland | Selected Advertising Partnerships with AI Brands

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.
