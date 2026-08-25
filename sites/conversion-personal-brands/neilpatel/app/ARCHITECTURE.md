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

- routes: 15
- extracted components: 94
- section modules: 0
- SVG modules: 0
- content module: no
- component extraction requested: yes

## Routes

- / - Neil Patel: Helping You Succeed Through Digital Marketing!
- /blog - Neil Patel's Digital Marketing Blog
- /br - Neil Patel: Helping You Succeed Through Digital Marketing!
- /de - Neil Patel: Helping You Succeed Through Digital Marketing!
- /es - Neil Patel: Helping You Succeed Through Digital Marketing!
- /fr - Neil Patel: Helping You Succeed Through Digital Marketing!
- /it - Neil Patel: Helping You Succeed Through Digital Marketing!
- /marketing-stats - Marketing Statistics & Digital Marketing Trends
- /nl - Neil Patel: Helping You Succeed Through Digital Marketing!
- /training - Free Digital Marketing Training (Worksheets & Templates Included)
- /ab-testing-calculator - A/B Testing Statistically Significant Calculator
- /ai-seo-meta-tags - AI SEO Meta Tags - Generate SEO-Friendly Meta Tags | Neil Patel's Meta Tag Creator
- /ai-social - AIW Social -- Create Engaging Social Media Posts & Caption In Seconds | Social Media Post Writer by Neil Patel
- /ai-writer - AI Writer - Ubersuggest’s Free AI Content Generator by Neil Patel
- /backlinks - Free Backlink Checker With Historical and New/Lost Link Data

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.
