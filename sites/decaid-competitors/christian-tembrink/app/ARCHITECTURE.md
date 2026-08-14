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

- routes: 8
- extracted components: 29
- section modules: 0
- SVG modules: 0
- content module: no
- component extraction requested: yes

## Routes

- / - KI Speaker & KI Vorträge für Unternehmen | Christian Tembrink
- /impressum - Impressum
- /ki-workshop - KI Workshop für Unternehmen
- /kontakt - Kontakt Christian Tembrink
- /referenzen - Christian Tembrink Referenzen
- /ki-workshop/ki-fur-den-arbeitsalltag - KI im Arbeitsalltag nutzen
- /ki-workshop/ki-prompt-workshop-fuer-unternehmen - KI Prompt-Workshop für Unternehmen
- /r-/res/2eff7021-b41e-4941-b3a0-098a98704384/images/files/2eff7021-b41e-4941-b3a0-098a98704384/163bd2fc-3d99-438d-9424-828648eb858e/908-304/9f371eca5c64484a76a58b9373b0535b299216be - 9f371eca5c64484a76a58b9373b0535b299216be (908×304)

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.
