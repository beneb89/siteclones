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
- extracted components: 370
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
- /3-actionable-insights-from-gary-vaynerchuk - 3 Actionable Insights from… Gary Vaynerchuk - Gary Vaynerchuk
- /3-easy-steps-for-real-estate-agents-on-social-media - 3 Easy Steps for Real Estate Agents on Social Media
- /3-insights-to-create-instagram-content-in-2020 - 3 Instagram Content Hacks For 2020 - Gary Vaynerchuk
- /3-reasons-this-title-wont-work-in-2019 - 3 Reasons This Title Won’t Work in 2019 - Gary Vaynerchuk
- /3-things-that-will-always-stand-in-the-way-of-your-goals-2 - 3 Things That Will Always Stand in the Way of Your Goals
- /3-things-to-do-if-you-dont-like-your-job - 3 things to do if you don’t like your job - Gary Vaynerchuk
- /3-tips-for-building-confidence-in-kids - 3 Tips for Building Confidence in Kids - Gary Vaynerchuk
- /3-tips-for-hiring-top-talent-in-2021 - 3 Tips For Hiring Top Talent In 2021 - Gary Vaynerchuk
- /3-tips-for-running-a-successful-family-business - 3 Tips for Running a Successful Family Business - Gary Vaynerchuk
- /3-unusual-ways-to-start-a-career-in-marketing - 3 Unusual Ways to Start a Career in Marketing - Gary Vaynerchuk
- /3-ways-to-become-a-better-leader - 3 Ways To Become A Better Leader - Gary Vaynerchuk
- /3-ways-to-go-out-of-business-fast - 3 Ways To Go Out Of Business…FAST - Gary Vaynerchuk
- /3-ways-to-overcome-fear-of-failure - Overcome Fear of Failure, Adversity - Gary Vaynerchuk
- /3-ways-you-need-to-be-marketing-your-book-in-2015 - 3 Ways You Need to be Marketing Your Book in 2015
- /31-takeaways-from-my-morning-walk-talks - 31 Takeaways from my Morning Walk Talks - Gary Vaynerchuk
- /4-common-company-problems-and-solutions-that-demand-attention - 5 Common Company Problems and Solutions That Demand Attention
- /4-easy-ways-to-improve-company-culture - 4 Easy Ways to Improve Company Culture - Gary Vaynerchuk
- /4-insights-to-help-businesses-adjust-in-challenging-times - 4 Insights To Help Businesses In Challenging Times
- /4-keys-to-make-decisions-faster - 4 Keys to Make Decisions Faster - Gary Vaynerchuk
- /4-leadership-strategies-of-great-ceos - 4 Leadership Strategies of Great CEOs - Gary Vaynerchuk
- /4-parenting-ideas-no-ones-talking-about - 4 Parenting Ideas No One’s Talking About - Gary Vaynerchuk
- /4-steps-to-make-sure-you-have-eth-in-your-wallet - 4 Steps to Make Sure You Have Ethereum in Your Wallet
- /4-ways-to-find-out-what-your-strengths-are - 4 Ways To Find Out What Your Strengths Are - Gary Vaynerchuk
- /47-pages-that-will-change-your-entire-marketing-organization-approach - 47 Pages That Will Change Your Entire Marketing Organization & Approach
- /4ds-helped-a-photographer-build-a-seven-figure-revenue-stream - POST 4Ds: How 4Ds Helped A Photographer Build a 7-figure Revenue Stream
- /4ds-why-were-raising-the-price-and-going-on-the-road-in-2019 - 4Ds: Why We’re Raising the Price and Going on the Road in 2019
- /5-ad-agencies-to-follow-on-snapchat - 5 Ad Agencies to Follow on Snapchat - Gary Vaynerchuk
- /5-best-tips-salespeople - 5 Best Tips For Salespeople - Gary Vaynerchuk
- /5-core-values-of-business-from-garyvee - 5 Core Values of Business from GaryVee - Gary Vaynerchuk
- /5-easy-hacks-for-platforms-you-need-to-know - 5 Easy Hacks for Platforms You Need to Know - Gary Vaynerchuk
- /5-lessons-i-learned-from-gary-vaynerchuk-at-a-tech-conference-in-armenia - 5 lessons I learned from Gary Vaynerchuk at a tech conference in Armenia
- /5-negative-business-situations-and-how-to-turn-them-around - 5 Negative Business Situations and How to Turn Them Around
- /5-questions-every-employee-should-ask-their-ceo - 5 Questions Every Employee Should Ask Their CEO - Gary Vaynerchuk
- /5-reminders-that-accountability-leads-to-happiness - 5 Reminders That Accountability Leads to Happiness
- /5-short-videos-to-show-you-how-i-run-my-businesses - 5 Short Videos to Show You How I Run My Businesses
- /5-snapchat-hacks-that-are-too-easy-for-you-to-ignore - 5 Snapchat Hacks That Are Too Easy For You To Ignore
- /5-snapchat-secrets-from-gary-vaynerchuk - GaryVee’s First 5 #SnapchatSecrets - Gary Vaynerchuk
- /5-strategies-for-personal-branding-online - 15 Tips on How to Brand Yourself Online - Gary Vaynerchuk
- /5-things-to-do-to-best-prepare-for-5-5 - 5 Things To Do To Best Prepare for 5/5 - Gary Vaynerchuk
- /5-things-to-watch-for-the-next-economic-recession - 5 Things To Watch For the Next Economic Recession
- /5-things-you-need-to-do-when-hiring-someone - 5 Things You Need To Do When Hiring Someone - Gary Vaynerchuk
- /5-tips-for-growing-your-business-with-influencer-marketing - 5 Tips for Growing Your Business With Influencer Marketing
- /5-tips-from-a-public-speaking-pro - 5 Tips from a Public Speaking Pro - Gary Vaynerchuk
- /5-ways-you-can-help-me-celebrate-my-birthday-today - 5 Ways You Can Help Me Celebrate My Birthday Today
- /5-winter-wine-cocktails-for-easy-drinking - 5 winter wine cocktails for easy drinking! - Gary Vaynerchuk

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.
