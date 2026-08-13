import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "DataForSEO Review 2026: API-First Data Platform for SEO Builders | TMB",
  "description": "DataForSEO provides SEO data through APIs for developers building tools. Comprehensive coverage, pay-per-use pricing, $50 minimum. Read my full analysis.",
  "robots": "index, follow",
  "alternates": {
    "canonical": "/software/dataforseo"
  },
  "openGraph": {
    "title": "DataForSEO Review 2026: API-First Data Platform for SEO Builders",
    "description": "DataForSEO provides SEO data through APIs for developers building tools. Comprehensive coverage, pay-per-use pricing, $50 minimum. Read my full analysis.",
    "type": "article",
    "url": "/software/dataforseo",
    "images": [
      "https://cdn.sanity.io/images/70c3lhkg/production/3fdab6b7b1f50b8a8d8c106f51be052fd96b9e2c-1200x630.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "DataForSEO Review 2026: API-First Data Platform for SEO Builders",
    "description": "DataForSEO provides SEO data through APIs for developers building tools. Comprehensive coverage, pay-per-use pricing, $50 minimum. Read my full analysis.",
    "images": [
      "https://cdn.sanity.io/images/70c3lhkg/production/3fdab6b7b1f50b8a8d8c106f51be052fd96b9e2c-1200x630.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/dec128f6639d.ico",
        "type": "image/x-icon",
        "sizes": "48x48"
      },
      {
        "url": "/assets/cloned/images/3706c6290888.ico",
        "type": "image/x-icon",
        "sizes": "48x48"
      },
      {
        "url": "/assets/cloned/images/b64427607e0c.png",
        "type": "image/png",
        "sizes": "192x192"
      }
    ],
    "apple": [
      {
        "url": "https://thatmarketingbuddy.com/apple-touch-icon.png"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"name\":\"That Marketing Buddy\",\"url\":\"", "\",\"logo\":\"", "/images/thatmarketingbuddy-logo.webp\",\"description\":\"Software Reviews for Entrepreneurs and Marketing Superstars\",\"sameAs\":[\"https://instagram.com/thatmarketingbuddy\",\"https://youtube.com/@thatmarketingbuddy\",\"https://pinterest.com/thatmarketingbuddy\",\"https://rjdigital.fi/\",\"https://www.linkedin.com/in/joonasrotko/\"],\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"Helsinki\",\"addressCountry\":\"FI\"}},{\"@type\":\"WebSite\",\"name\":\"That Marketing Buddy\",\"url\":\"", "\",\"description\":\"Software Reviews for Entrepreneurs and Marketing Superstars\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"That Marketing Buddy\",\"url\":\"", "\",\"logo\":\"", "/images/thatmarketingbuddy-logo.webp\"},\"potentialAction\":{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"", "/software?q={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}},{\"@type\":\"Person\",\"name\":\"Joonas Rotko\",\"url\":\"", "/about\",\"image\":\"", "/images/joonas-rotko.png\",\"jobTitle\":\"Founder & Marketing Software Reviewer\",\"description\":\"Digital marketing agency veteran with 10+ years of experience. Reviews marketing software for AI-stack fit (pricing, MCP/API support, agent-readiness) to help teams pick tools that work with modern AI workflows.\",\"knowsAbout\":[\"Email Marketing\",\"SEO\",\"Sales Funnels\",\"Marketing Automation\",\"Google Ads\",\"Content Marketing\",\"Landing Pages\",\"Marketing Analytics\",\"All-in-One Marketing Platforms\",\"Online Course Platforms\"],\"sameAs\":[\"https://instagram.com/thatmarketingbuddy\",\"https://youtube.com/@thatmarketingbuddy\",\"https://pinterest.com/thatmarketingbuddy\",\"https://rjdigital.fi/\",\"https://www.linkedin.com/in/joonasrotko/\"],\"worksFor\":{\"@type\":\"Organization\",\"name\":\"That Marketing Buddy\",\"url\":\"", "\"}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"", "/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Software\",\"item\":\"", "/software\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"DataForSEO\"}]},{\"@type\":\"SoftwareApplication\",\"name\":\"DataForSEO\",\"applicationCategory\":\"seo-apis\",\"operatingSystem\":\"Web\",\"description\":\"API-first SEO data platform for developers building SEO tools and software solutions\",\"url\":\"https://dataforseo.com/\",\"image\":\"https://cdn.sanity.io/images/70c3lhkg/production/dfc98b8a12a55f6d87144247863d585d17f0984b-256x256.png\",\"offers\":{\"@type\":\"Offer\",\"price\":50,\"priceCurrency\":\"USD\",\"availability\":\"https://schema.org/InStock\"},\"review\":{\"@type\":\"Review\",\"reviewRating\":{\"@type\":\"Rating\",\"ratingValue\":8.2,\"bestRating\":10},\"author\":{\"@type\":\"Person\",\"name\":\"Joonas Rotko\",\"url\":\"", "/about\",\"image\":\"", "/images/joonas-rotko.png\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"That Marketing Buddy\",\"url\":\"", "\",\"logo\":\"", "/images/thatmarketingbuddy-logo.webp\"},\"dateModified\":\"2026-07-13\",\"reviewBody\":\"DataForSEO isn't consumer software. It's the infrastructure that powers SEO tools, delivering SERP data, keywords, and backlinks through APIs that developers use to build rank trackers, keyword research tools, and competitive analysis platforms.\",\"positiveNotes\":{\"@type\":\"ItemList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Comprehensive API coverage\"}]},\"negativeNotes\":{\"@type\":\"ItemList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Technical barrier to entry\"}]}}},{\"@type\":\"Product\",\"name\":\"DataForSEO\",\"description\":\"API-first SEO data platform for developers building SEO tools and software solutions\",\"url\":\"", "/software/dataforseo\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":8.2,\"bestRating\":10,\"worstRating\":1,\"reviewCount\":1},\"additionalProperty\":[{\"@type\":\"PropertyValue\",\"name\":\"Automation Depth\",\"value\":7,\"maxValue\":10,\"unitText\":\"score\",\"description\":\"DataForSEO's own automation is limited. It returns data, it does not act on your site. But the surface for building automation on top is excellent: 11 API categories, an official MCP server covering 7+ of them, documented webhooks for pushed events, and a sandbox for testing without burning credits.\"},{\"@type\":\"PropertyValue\",\"name\":\"AI Readiness\",\"value\":8,\"maxValue\":10,\"unitText\":\"score\",\"description\":\"An official MCP server exposes 7+ of the API categories (SERP, Keywords, Labs, OnPage, Backlinks, Business Data, Domain Analytics) through one protocol, so Claude, ChatGPT, Cursor, Gemini or n8n can all read the same live data. Because DataForSEO has been a pure data API since 2014, its MCP catalog is wider than any single-vendor SEO MCP.\"},{\"@type\":\"PropertyValue\",\"name\":\"Cost Predictability\",\"value\":7,\"maxValue\":10,\"unitText\":\"score\",\"description\":\"Pricing is genuinely pay-as-you-go: a **$50 minimum deposit**, per-request pricing from around **$0.0001**, and a **free $1 credit** on signup (no card required) to prove out an integration with real data first. A separate sandbox environment also lets you test request/response shapes without spending credits. The trade-off is that heavy, unpredictable usage can produce a lumpier bill than a flat-tier subscription.\"},{\"@type\":\"PropertyValue\",\"name\":\"Who Is This For\",\"value\":7,\"maxValue\":10,\"unitText\":\"score\",\"description\":\"DataForSEO fits developers and agencies building their own SEO tooling, or automating reporting and competitive analysis at scale, not marketers who want to open a dashboard and see rankings. If you're commissioning a build (in-house or through Claude Code/Cursor), the fit is strong; if you want a point-and-click tool, look at a dashboard product instead.\"},{\"@type\":\"PropertyValue\",\"name\":\"Migration & Lock-in\",\"value\":8,\"maxValue\":10,\"unitText\":\"score\",\"description\":\"Migration risk is low by design. You integrate against a documented REST API with **five official SDKs** (Python, TypeScript, PHP, Java, .NET) and a published OpenAPI spec, not a proprietary dashboard, so swapping data providers later means changing a base URL and auth credentials, not rebuilding a workflow. Pay-as-you-go billing also means there is no annual contract to walk away from.\"}]}]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What's the minimum cost to try DataForSEO?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Nothing, to start. New accounts get a free $1 credit for real API testing, no card required. Once that runs out, the $50 minimum top-up kicks in. So you genuinely can test with real data before paying anything.\"}},{\"@type\":\"Question\",\"name\":\"Do I need developers to use DataForSEO?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. This is an API platform that requires technical implementation, not a ready-to-use SEO tool.\"}},{\"@type\":\"Question\",\"name\":\"How does pricing work exactly?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Pay-per-request model where different API calls consume different amounts of credits. Costs vary significantly based on data complexity.\"}},{\"@type\":\"Question\",\"name\":\"Can I build my own SEO tool with this data?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Absolutely. That's the main use case. DataForSEO provides the data infrastructure for custom SEO applications.\"}},{\"@type\":\"Question\",\"name\":\"How fresh is the data compared to other SEO tools?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Very fresh. Keywords update within 30 days, backlinks are crawled continuously, and SERP data reflects real-time results.\"}},{\"@type\":\"Question\",\"name\":\"Is there a free trial or free tier?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, in the form of a free $1 credit on signup (no card required), good for real API calls like several hundred SERP requests or several thousand keyword/backlink lookups. It is not a recurring free tier, and once it is used up, topping up requires the $50 minimum.\"}},{\"@type\":\"Question\",\"name\":\"What makes this different from Ahrefs or Semrush APIs?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"More comprehensive API coverage (11 different categories), fresher data updates, and designed API-first rather than as platform extensions.\"}},{\"@type\":\"Question\",\"name\":\"Can small businesses use this effectively?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Generally not. The technical requirements and minimum costs make it better suited for software companies, agencies, or enterprises with development resources.\"}},{\"@type\":\"Question\",\"name\":\"Is DataForSEO worth the price?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Pricing is genuinely pay-as-you-go: a $50 minimum deposit, per-request pricing from around $0.0001, and a free $1 credit on signup (no card required) to prove out an integration with real data first. A separate sandbox environment also lets you test request/response shapes without spending credits. The trade-off is that heavy, unpredictable usage can produce a lumpier bill than a flat-tier subscription.\"}},{\"@type\":\"Question\",\"name\":\"Does DataForSEO have AI features?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"An official MCP server exposes 7+ of the API categories (SERP, Keywords, Labs, OnPage, Backlinks, Business Data, Domain Analytics) through one protocol, so Claude, ChatGPT, Cursor, Gemini or n8n can all read the same live data. Because DataForSEO has been a pure data API since 2014, its MCP catalog is wider than any single-vendor SEO MCP.\"}},{\"@type\":\"Question\",\"name\":\"How easy is it to switch to or away from DataForSEO?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Migration risk is low by design. You integrate against a documented REST API with five official SDKs (Python, TypeScript, PHP, Java, .NET) and a published OpenAPI spec, not a proprietary dashboard, so swapping data providers later means changing a base URL and auth credentials, not rebuilding a workflow. Pay-as-you-go billing also means there is no annual contract to walk away from.\"}},{\"@type\":\"Question\",\"name\":\"How much does DataForSEO cost?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"DataForSEO starts from From $50.\"}}]}" }}
        />
      </head>
      <body className="block text-foreground [font-family:Inter,_'Inter_Fallback',_sans-serif] text-base font-normal not-italic leading-6 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
