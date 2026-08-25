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
- extracted components: 93
- section modules: 0
- SVG modules: 0
- content module: no
- component extraction requested: yes

## Routes

- / - Gary Vaynerchuk | Entrepreneur, Author & Creator
- /1-view-can-change-everything - Why 1 View Can Change Everything - Gary Vaynerchuk
- /10-mental-shifts-for-success-in-business - 10 Mental Shifts for Success in Business - Gary Vaynerchuk
- /10-ways-to-get-more-followers-on-instagram-how-to-guide - 10 Ways To Get More Followers on Instagram: How To Guide
- /10-ways-to-protect-yourself-from-scams - 10 Ways to Protect Yourself from Scams - Gary Vaynerchuk
- /11-new-garyvee-instagram-ar-filters - 11 New GaryVee Instagram AR Filters - Gary Vaynerchuk
- /11-things-young-people-need-to-know - 11 things young people need to know - Gary Vaynerchuk
- /13-thoughts-on-being-an-entrepreneur - 13 Thoughts on being an Entrepreneur - Gary Vaynerchuk
- /14-awesome-vayniacs-who-put-family-first - 14 Awesome Vayniacs Who Put Family First - Gary Vaynerchuk
- /19-people-you-should-be-following-on-twitter-but-arent-pt-1-of-2 - 19 People You Should Be Following On Twitter But Aren’t (Pt. 1 of 2)
- /19-people-you-should-be-following-on-twitter-but-arent-pt-2-of-2 - 19 People You Should Be Following On Twitter But Aren’t (Pt. 2 of 2)
- /2015-has-been-huge-so-far - 2015 Has Been Huge So Far - Gary Vaynerchuk
- /2017-key-small-business-social-media-marketing - 2017 Key to Small Business Social Media Marketing
- /2018-wine-library-super-tasting - Announcing 2018 Annual Wine Library Super Tasting
- /2020-fundraising-strategies-for-nonprofits - 2020 Fundraising Strategies For Nonprofits - Gary Vaynerchuk

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.
