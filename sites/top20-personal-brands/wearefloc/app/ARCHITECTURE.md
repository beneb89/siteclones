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

- routes: 31
- extracted components: 58
- section modules: 0
- SVG modules: 0
- content module: no
- component extraction requested: yes

## Routes

- / - FLOC* | Web3 Strategic Design Studio
- /work - Work FLOC* | Always ON
- /OoktdUHDb - Page Not Found | Framer
- /about - About FLOC* | Free Leaders Open Collective
- /alchemain - Page Not Found | Framer
- /aniwa - Page Not Found | Framer
- /ath21 - Page Not Found | Framer
- /build - Page Not Found | Framer
- /byn - Page Not Found | Framer
- /charms - Page Not Found | Framer
- /cocobay - Page Not Found | Framer
- /collections - FLOC* 🔴🟢🔵 Collections
- /d4data - Page Not Found | Framer
- /degen - Page Not Found | Framer
- /eigen-layer - Page Not Found | Framer
- /grandvalira-resorts - Page Not Found | Framer
- /meta4 - Page Not Found | Framer
- /metacartel-ventures - Page Not Found | Framer
- /metamask - Page Not Found | Framer
- /nektar-network - Page Not Found | Framer
- /packs - FLOC*Packs | Collection of Go-live design packs
- /paid - Page Not Found | Framer
- /privacy-policy - FLOC* | Web3 Strategic Design Studio
- /services - FLOC*Services | Moments of activation
- /triptick - Page Not Found | Framer
- /troops - Page Not Found | Framer
- /tutellus - Page Not Found | Framer
- /vipe - Page Not Found | Framer
- /vocdoni - Page Not Found | Framer
- /wonderland - Page Not Found | Framer
- /work/alchemain - Alchemain × FLOC* - Just Fix it

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.
