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
- extracted components: 82
- section modules: 0
- SVG modules: 0
- content module: no
- component extraction requested: yes

## Routes

- / - Home - Double Your Freelancing
- /about - About - Double Your Freelancing
- /charge-what-youre-worth - Charge What You’re Worth - Double Your Freelancing
- /courses - Courses - Double Your Freelancing
- /feedback - Feedback - Double Your Freelancing
- /opt-out - Opt Out - Double Your Freelancing
- /rate - Double Your Freelancing Rate - Double Your Freelancing
- /1-bp-course-timeline - 1 - BP Course Timeline - Double Your Freelancing
- /1-wip-new-dashboard - 1 - wip new dashboard - Double Your Freelancing
- /1-zach-test-be-own-consultant - 1 - zach test be own consultant - Double Your Freelancing
- /100kprojects - The Business of Freelancing, Episode 20: Scott Yewell On His First $100k+ Project - Double Your Freelancing
- /2-big-marketing-mistakes-freelancers-make-expecting-free-clients-and-not-knowing-your-numbers - Episode 141: 2 Big Marketing Mistakes Freelancers Make - Expecting Free Clients & Not Knowing Your Numbers - Double Your Freelancing
- /20-traits-of-successful-freelancers-part1 - 20 Traits of Successful Freelancers - Double Your Freelancing
- /200k-freelancer-enrollment-closed - $200k Freelancer Enrollment Closed - Double Your Freelancing
- /200kf - 200KF - More Detail - Double Your Freelancing

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.
