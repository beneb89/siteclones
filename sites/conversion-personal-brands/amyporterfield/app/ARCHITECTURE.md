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

- routes: 15
- extracted components: 87
- section modules: 0
- SVG modules: 0
- content module: no
- component extraction requested: yes

## Routes

- / - Amy Porterfield | Online Marketing Expert & Bestselling Author
- /blog - Blogs Archive - Amy Porterfield | Online Marketing Expert
- /transcript - Podcast Transcripts Archive - Amy Porterfield | Online Marketing Expert
- /2026-master-your-year-terms-conditions - The 2026 Master Your Year Planning Session Terms & Conditions - Amy Porterfield | Online Marketing Expert
- /20nlp-terms - 20 No-Launch Plays™️ to Pull Sales From the Audience Already Buying From You - Terms & Conditions - Amy Porterfield | Online Marketing Expert
- /about - Online Business Expert & Strategist | Amy Porterfield
- /all-reviews - View All DCA Stories - Amy Porterfield
- /all-show-notes - All Show Notes - Amy Porterfield | Online Marketing Expert
- /amy-porterfield-podcast - Marketing Strategy Podcast - Amy Porterfield | Online Marketing Expert
- /business-success-coach - Business Success Coach (Full-Time)| Amy Porterfield
- /business-success-coach-part-time - Business Success Coach (Part-Time) | Amy Porterfield
- /careers - Career Opportunities | Amy Porterfield
- /contact - Get In Touch With Amy | Amy Porterfield
- /course-confident-2024-terms - Course ConfidentTerms & Conditions - Amy Porterfield | Online Marketing Expert
- /course-confident-2025-terms - Course Confident Terms & Conditions - 2025 - Amy Porterfield | Online Marketing Expert

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.
