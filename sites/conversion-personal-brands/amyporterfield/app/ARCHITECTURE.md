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

- routes: 60
- extracted components: 324
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
- /dca - Moving Forward
- /digital-marketing-podcast - Digital Marketing Podcast - Amy Porterfield | Online Marketing Expert
- /fast-funnel-terms - The Fast Funnel Template Pack - Terms and Conditions - Amy Porterfield | Online Marketing Expert
- /growth-advisor - Growth Advisor (Contracted)| Amy Porterfield
- /lbs-terms - List Builders Society®️ - Terms & Conditions - Amy Porterfield | Online Marketing Expert
- /marketing-strategy-podcast - Marketing Strategy Podcast - Amy Porterfield | Online Marketing Expert
- /master-your-year-terms-conditions - Master Your Year Planning Session - Terms & Conditions - Amy Porterfield | Online Marketing Expert
- /mastermind-waitlist - Page not found - Amy Porterfield | Online Marketing Expert
- /momentum - File Not Found
- /mts-terms - Made To Scale - Terms and Conditions - Amy Porterfield | Online Marketing Expert
- /mts-terms-2 - Made To Scale - Terms and Conditions - Amy Porterfield | Online Marketing Expert
- /mylogin - Amy Porterfield Login Page | Amy Porterfield
- /newsletter - Newsletter
- /newsletter_archive - Newsletters Archive - Amy Porterfield | Online Marketing Expert
- /newsletter-archive-all - Newsletter Archive All - Amy Porterfield | Online Marketing Expert
- /online-business-courses - Online Marketing Tools and Resources | Amy Porterfield
- /online-business-programs - Online Marketing Tools and Resources | Amy Porterfield
- /online-marketing-tools - Online Marketing Tools - Amy Porterfield | Online Marketing Expert
- /podcast-test - Podcast Test - Amy Porterfield | Online Marketing Expert
- /porter-terms - Porter™️ - Terms & Conditions - Amy Porterfield | Online Marketing Expert
- /privacy - Privacy
- /reset-terms - Reset Terms & Conditions - Amy Porterfield | Online Marketing Expert
- /reviews - reviews
- /side-hustle-ideas-guide-ap - Moving Forward
- /sts-terms - Systems That Scale®️ - Terms & Conditions - Amy Porterfield | Online Marketing Expert
- /subscribed-2024-terms - Subscribed - Terms & Conditions - Amy Porterfield | Online Marketing Expert
- /subscribed-2025-terms - Subscribed - Terms & Conditions - Amy Porterfield | Online Marketing Expert
- /t1ho-terms - The 1 Hour Offer ™️ - Terms & Conditions - Amy Porterfield | Online Marketing Expert
- /tcc-terms - The Calibrae Collective - Terms and Conditions - Amy Porterfield | Online Marketing Expert
- /terms-and-conditions - Terms and Conditions | Amy Porterfield
- /tmc-terms - The Milly Club Terms & Conditions - Amy Porterfield | Online Marketing Expert
- /tmc-terms-3a - The Milly Club Terms & Conditions - Amy Porterfield | Online Marketing Expert
- /tmc-terms-3nm - The Milly Club Terms & Conditions - Amy Porterfield | Online Marketing Expert
- /tmc-terms-4 - The Milly Club Terms & Conditions - Amy Porterfield | Online Marketing Expert
- /tmc-terms-5 - The Milly Club Terms & Conditions - Amy Porterfield | Online Marketing Expert
- /tme-terms - The Membership Experience Bonus Package by Amy Porterfield Terms & Conditions - Amy Porterfield | Online Marketing Expert
- /tobss-terms-conditions - The Online Business Starter Suite - Terms & Conditions - Amy Porterfield | Online Marketing Expert
- /tocs-terms - The Offer Conversion Scorecard™️ - Terms & Conditions - Amy Porterfield | Online Marketing Expert
- /torc-terms - The Offer Refinement Coach™️ - Terms & Conditions - Amy Porterfield | Online Marketing Expert
- /training - Free Training with Amy Porterfield
- /ultimate-guide-terms - Digital Course Academy's Ultimate Guide Workbook - Terms & Conditions - Amy Porterfield | Online Marketing Expert
- /ydcc-terms - Your Digital Course Coach Terms and Conditions - Amy Porterfield | Online Marketing Expert
- /ap_show_categories/business-tips - Business Tips Archives - Amy Porterfield | Online Marketing Expert
- /blog-category/engagement-and-community - Engagement & Community Archives - Amy Porterfield | Online Marketing Expert
- /blog/10-signs-its-time-to-create-your-9-to-5-exit-strategy - 10 Signs It’s Time to Create Your 9-to-5 Exit Strategy - Amy Porterfield | Online Marketing Expert

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.
