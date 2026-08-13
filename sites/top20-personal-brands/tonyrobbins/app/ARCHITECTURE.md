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

- routes: 60
- extracted components: 533
- section modules: 0
- SVG modules: 0
- content module: no
- component extraction requested: yes

## Routes

- / - Official Website of Tony Robbins: Personal & Business Results Coach | Tony Robbins
- /achieve-lasting-weight-loss - Achieve Lasting Weight Loss | Tony Robbins
- /ask-tony - Expert Life and Business Coaching | Tony Robbins
- /blog - Inspirational Blog from a Professional Life Coach | Tony Robbins
- /building-confidence - How to Build Confidence | Tony Robbins
- /business - Business Cycle | Tony Robbins
- /events - Business Growth Events | Tony Robbins
- /giving-back - Official Website of Tony Robbins: Personal & Business Results Coach | Tony Robbins
- /how-to-focus - How To Focus Better | Tony Robbins
- /importance-time-management - The Best Time Management Tools | Tony Robbins
- /jay-abraham - Jay Abraham | Tony Robbins
- /limiting-beliefs-guide - Eliminate Limiting Beliefs | Empower Your Mindset | Tony Robbins
- /mental-health - Mental health | Tony Robbins
- /personal-growth - Personal Growth | Tony Robbins
- /podcasts - Professional Coaching Podcast | Tony Robbins
- /programs - Business Coaching Programs | Tony Robbins
- /quiz - Quizzes for Personal Growth | Tony Robbins
- /the-gifts-of-life - Embrace these 10 gifts of life | Tony Robbins
- /tony-robbins-quotes - Tony Robbins Quotes | Tony Robbins
- /ultimate-relationship-guide - Relationship Guide | Tony Robbins
- /what-is-leadership - What is Leadership | Tony Robbins
- /12-acts-kindness - 12 acts of kindness | Tony Robbins
- /3-pillars - The three pillars of success | Tony Robbins
- /abm-september-2026 - Official Website of Tony Robbins: Personal & Business Results Coach | Tony Robbins
- /abm-september-2027 - Official Website of Tony Robbins: Personal & Business Results Coach | Tony Robbins
- /accessibility - Accessibility | Tony Robbins
- /advanced-business-mastery-2025 - Official Website of Tony Robbins: Personal & Business Results Coach | Tony Robbins
- /artificial-intelligence - Artificial intelligence: future and present | Tony Robbins
- /august-20-22-2025 - Official Website of Tony Robbins: Personal & Business Results Coach | Tony Robbins
- /become-the-best-version-of-yourself - Be the best version of you | Tony Robbins
- /blm-statement - BLM Statement | Tony Robbins
- /bm-august-2026 - Official Website of Tony Robbins: Personal & Business Results Coach | Tony Robbins
- /bm-august-florida - Business Mastery Event | Tony Robbins
- /bm-august-florida-13 - Business Mastery Event | Tony Robbins
- /bm-january-2027 - Official Website of Tony Robbins: Personal & Business Results Coach | Tony Robbins
- /bm-january-virtual - Business Mastery Event | Tony Robbins
- /bm-january-virtual-2026 - Official Website of Tony Robbins: Personal & Business Results Coach | Tony Robbins
- /bm-july-2027 - Official Website of Tony Robbins: Personal & Business Results Coach | Tony Robbins
- /breakthrough-app - DOWNLOAD BREAKTHROUGH | Tony Robbins
- /business-books - Business Books | Tony Robbins
- /business-coaching - Business Coaching and Mentoring | Tony Robbins
- /business-coaching-vs-business-results-training - Tony Robbins Business Results Coaching vs. Training | Tony Robbins
- /business-events - Business Events | Tony Robbins
- /business-results-training - Business Training | Tony Robbins
- /business-seminars - What to know about business seminars | Tony Robbins
- /business-tips - 9 Business Tips That Work | Tony Robbins
- /careers - Live your mission every single day at Tony Robbins | Tony Robbins
- /careers-index-module - Careers Index Module | Tony Robbins
- /community - The Crew Community | Tony Robbins
- /confidence-books - Books to Know Yourself & Grow More Confident | Tony Robbins
- /contribution - The secret to living is giving | Tony Robbins | Tony Robbins
- /cookie-policy - Cookie Policy | Tony Robbins
- /crew - Crew | Tony Robbins
- /date-with-destiny-2026 - Official Website of Tony Robbins: Personal & Business Results Coach | Tony Robbins
- /dev-test - Test | Tony Robbins
- /disc - Guide to the DISC Assessment | Tony Robbins
- /disc-landing-form - Official Website of Tony Robbins: Personal & Business Results Coach | Tony Robbins
- /documentary - I Am Not Your Guru Documentary Film | Tony Robbins
- /dwd-december-2027 - Official Website of Tony Robbins: Personal & Business Results Coach | Tony Robbins
- /dwd-december-florida - Date With Destiny Event | Tony Robbins

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.
