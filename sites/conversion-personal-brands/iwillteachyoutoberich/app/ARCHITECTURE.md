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

- routes: 12
- extracted components: 68
- section modules: 0
- SVG modules: 0
- content module: no
- component extraction requested: yes

## Routes

- / - I Will Teach You To Be Rich » by Ramit Sethi
- /274-we-have-a-newborn-and-89-of-our-income-is-already-spent-now-what - 274. “We have a newborn and 89% of our income is already spent… now what?”
- /275-we-escaped-debt-so-why-are-we-still-spending-like-this - 275. “We escaped debt so why are we still spending like this?”
- /best-sales-pages - Build A Sales Page That Converts: Step-by-Step Guide
- /blog - Blog
- /books - All Books from NYT Bestselling Author Ramit Sethi
- /calculators - Calculators
- /conscious-spending-basics - Conscious Spending Basics (a guide to achieving your Rich Life)
- /contact-us - Contact Us
- /credit-cards-to-rebuild-credit - How to Rebuild Your Credit Right Now (Without Paying a Dime)
- /debt-payoff-calculator - Debt Payoff Calculator
- /disclosure-terms-and-conditions - Disclosure & Terms and Conditions

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.
