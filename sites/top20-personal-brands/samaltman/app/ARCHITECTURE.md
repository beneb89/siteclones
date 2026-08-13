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

- routes: 27
- extracted components: 26
- section modules: 0
- SVG modules: 0
- content module: no
- component extraction requested: yes

## Routes

- / - Sam Altman
- /2279512 - - - Sam Altman
- /abundant-intelligence - Abundant Intelligence - Sam Altman
- /archive - Sam Altman
- /dall-star-e-2 - DALL•E 2 - Sam Altman
- /funding-for-covid-19-projects - Funding for COVID-19 Projects - Sam Altman
- /gpt-4o - GPT-4o - Sam Altman
- /hard-startups - Hard Startups - Sam Altman
- /helion - Helion - Sam Altman
- /helion-needs-you - Helion Needs You - Sam Altman
- /how-to-be-successful - How To Be Successful - Sam Altman
- /how-to-invest-in-startups - How To Invest In Startups - Sam Altman
- /idea-generation - Idea Generation - Sam Altman
- /jakub-and-szymon - Jakub and Szymon - Sam Altman
- /pg-and-jessica - PG and Jessica - Sam Altman
- /please-fund-more-science - Please Fund More Science - Sam Altman
- /project-covalence - Project Covalence - Sam Altman
- /reflections - Reflections - Sam Altman
- /reinforcement-learning-progress - Reinforcement Learning Progress - Sam Altman
- /researchers-and-founders - Researchers and Founders - Sam Altman
- /sora-2 - Sora 2 - Sam Altman
- /sora-update-number-1 - Sora update #1 - Sam Altman
- /the-gentle-singularity - The Gentle Singularity - Sam Altman
- /the-strength-of-being-misunderstood - The Strength of Being Misunderstood - Sam Altman
- /the-virus - The Virus - Sam Altman
- /three-observations - Three Observations - Sam Altman
- /what-i-wish-someone-had-told-me - What I Wish Someone Had Told Me - Sam Altman

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.
