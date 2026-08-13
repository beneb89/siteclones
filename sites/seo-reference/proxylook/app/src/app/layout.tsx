import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "DataForSEO Review 2026 — Pricing, Pros & Cons · ProxyLook",
  "description": "The deepest SEO data API on the market with true pay-as-you-go pricing. From $50.00/GB. Independent ProxyLook review.",
  "robots": "index, follow",
  "alternates": {
    "canonical": "/providers/dataforseo",
    "languages": {
      "en": "https://proxylook.com/providers/dataforseo",
      "x-default": "https://proxylook.com/providers/dataforseo"
    }
  },
  "openGraph": {
    "title": "DataForSEO Review 2026 — Pricing, Pros & Cons · ProxyLook",
    "description": "The deepest SEO data API on the market with true pay-as-you-go pricing. From $50.00/GB. Independent ProxyLook review.",
    "type": "website",
    "siteName": "ProxyLook",
    "url": "/providers/dataforseo",
    "images": [
      "https://proxylook.com/static/og-image.jpg"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "DataForSEO Review 2026 — Pricing, Pros & Cons · ProxyLook",
    "description": "The deepest SEO data API on the market with true pay-as-you-go pricing. From $50.00/GB. Independent ProxyLook review.",
    "images": [
      "https://proxylook.com/static/og-image.jpg"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/svg/1ad8820ca62c.svg",
        "type": "image/svg+xml"
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
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"@id\":\"", "/#organization\",\"name\":\"ProxyLook\",\"alternateName\":[\"Proxy Look\",\"ProxyLook.com\"],\"url\":\"", "\",\"logo\":\"", "/static/logo.svg\",\"description\":\"Independent directory of every major proxy network provider and antidetect browser — with editorial reviews, side-by-side comparisons, performance benchmarks combining our test data, independent lab reports and published specifications, and verified deal codes. Researched by humans, updated weekly.\",\"foundingDate\":\"2022\",\"slogan\":\"The independent proxy network directory\",\"knowsAbout\":[\"Residential proxies\",\"Datacenter proxies\",\"Mobile proxies\",\"ISP proxies\",\"Web scraping\",\"SEO and SERP monitoring\",\"Ad verification\",\"Brand protection\",\"Antidetect browsers\",\"JA3 fingerprinting\",\"TLS fingerprinting\",\"Bot mitigation\"],\"sameAs\":[\"https://x.com/proxylook\",\"https://www.linkedin.com/company/proxylook\",\"https://www.youtube.com/@proxylook\",\"https://github.com/proxylook\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"email\":\"hello@proxylook.com\",\"contactType\":\"customer support\",\"availableLanguage\":\"en\"},\"publishingPrinciples\":\"", "/methodology\",\"actionableFeedbackPolicy\":\"", "/contact\",\"diversityPolicy\":\"", "/about\",\"ethicsPolicy\":\"", "/about\",\"ownershipFundingInfo\":\"", "/about\"}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"@id\":\"", "/about#editor\",\"name\":\"The ProxyLook Editorial Team\",\"parentOrganization\":{\"@id\":\"", "/#organization\"},\"url\":\"", "/about\",\"knowsAbout\":[\"Proxy networks\",\"Web scraping\",\"Anti-bot detection\",\"Residential IP infrastructure\",\"Anonymous browsing\",\"TLS fingerprinting\"],\"description\":\"The ProxyLook editorial team tracks proxy network performance since March 2024 — combining our own test data, independent lab reports and providers' published specifications, with third-party numbers attributed.\",\"sameAs\":[\"https://x.com/proxylook\",\"https://www.linkedin.com/company/proxylook\",\"https://github.com/proxylook\"]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"Product\",\"@id\":\"", "/providers/dataforseo#product\",\"name\":\"DataForSEO\",\"description\":\"DataForSEO provides a comprehensive suite of APIs and bulk databases covering SERP, keyword (Google Ads, Trends, Bing), backlinks, on-page audits, DataForSEO Labs, reviews, business and merchant data. The project began in 2011 as in-house agency software and launched its first API in 2016. It runs on a consumption-based pay-as-you-go model, is ISO-certified, and is headquartered in Tallinn, Estonia with an office in Kharkiv, Ukraine, serving 3,500+ customers.\",\"image\":\"", "/static/logos/dataforseo.png\",\"brand\":{\"@type\":\"Organization\",\"@id\":\"", "/providers/dataforseo#brand\",\"name\":\"DataForSEO\",\"url\":\"https://dataforseo.com\",\"logo\":\"", "/static/logos/dataforseo.png\",\"sameAs\":[\"https://dataforseo.com\",\"https://www.linkedin.com/company/dataforseo/\",\"https://x.com/dataforseo\",\"https://www.youtube.com/@DataForSEO\",\"https://www.facebook.com/dataforseo\"]},\"url\":\"", "/providers/dataforseo\",\"mainEntityOfPage\":\"", "/providers/dataforseo\",\"category\":\"Web Scraping & Proxy Service\",\"sku\":\"proxylook-dataforseo\",\"audience\":{\"@type\":\"BusinessAudience\",\"audienceType\":\"Developers, data engineers, web scraping teams\"},\"offers\":{\"@type\":\"Offer\",\"url\":\"https://dataforseo.com\",\"priceCurrency\":\"USD\",\"price\":\"50.00\",\"priceSpecification\":{\"@type\":\"UnitPriceSpecification\",\"price\":\"50.00\",\"priceCurrency\":\"USD\",\"unitText\":\"request\"},\"availability\":\"https://schema.org/InStock\",\"priceValidUntil\":\"2027-08-13\",\"seller\":{\"@type\":\"Organization\",\"name\":\"DataForSEO\",\"url\":\"https://dataforseo.com\"}}}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-3"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"", "/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Directory\",\"item\":\"", "/all-providers\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"DataForSEO\",\"item\":\"", "/providers/dataforseo\"}]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-4"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"inLanguage\":\"en\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How much does DataForSEO cost?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Entry pricing for DataForSEO starts at $50.00 per request or month, verified Aug 13, 2026. Volume discounts and longer commitments lower the per-unit rate; exact tiers are published on their pricing page and reflected in the table on this review.\",\"inLanguage\":\"en\"}},{\"@type\":\"Question\",\"name\":\"What kinds of proxies does DataForSEO offer?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"DataForSEO focuses on a single proxy category across a pool advertised as 1.98T live backlinks, 8B+ Google keywords, 577M Google SERPs. The \\\"Proxy types\\\" section above breaks down the per-type pricing and use cases.\",\"inLanguage\":\"en\"}},{\"@type\":\"Question\",\"name\":\"Is DataForSEO the right choice for my workload?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"DataForSEO serves the broad mid-market. Benchmarked performance is detailed in the Performance section above — the right way to validate is to run 100-500 requests through their cheapest tier against your actual targets before committing.\",\"inLanguage\":\"en\"}},{\"@type\":\"Question\",\"name\":\"Who is behind DataForSEO?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"DataForSEO has been operating since 2016, headquartered in Tallinn, Estonia. Support is reachable via 24/7. Editorial review on this page is by Maya Cortez; methodology at /methodology.\",\"inLanguage\":\"en\"}}]}" }}
        />
        <script
          key="ditto-json-ld-5"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"Person\",\"@id\":\"", "/authors/maya-cortez#person\",\"name\":\"Maya Cortez\",\"jobTitle\":\"Senior Benchmarking Lead\",\"worksFor\":{\"@id\":\"", "/#organization\"},\"url\":\"", "/authors/maya-cortez\",\"image\":\"", "/static/authors/maya-cortez.webp\",\"description\":\"Maya writes ProxyLook's deep-dive editorial reviews of residential and ISP proxy networks.\",\"knowsAbout\":[\"Residential proxies\",\"ISP proxies\",\"Web scraping\",\"Anti-bot detection\",\"Cloudflare bypass\",\"Benchmarking methodology\",\"TLS fingerprinting\"],\"sameAs\":[\"https://www.linkedin.com/in/maya-cortez-proxylook\"]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-6"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"Review\",\"itemReviewed\":{\"@id\":\"", "/providers/dataforseo#product\"},\"reviewRating\":{\"@type\":\"Rating\",\"ratingValue\":\"4.6\",\"bestRating\":\"5\",\"worstRating\":\"1\"},\"author\":{\"@id\":\"", "/authors/maya-cortez#person\"},\"publisher\":{\"@id\":\"", "/#organization\"},\"datePublished\":\"2026-05-19\",\"dateModified\":\"2026-05-19\",\"inLanguage\":\"en\",\"mainEntityOfPage\":\"", "/providers/dataforseo\",\"speakable\":{\"@type\":\"SpeakableSpecification\",\"cssSelector\":[\".pp-tagline\",\".pp-review-verdict\",\"[data-speakable]\"]},\"reviewBody\":\"DataForSEO is the data-infrastructure layer behind a large share of SEO and martech tools, and its scale is the headline. The platform exposes 13-plus APIs — SERP, Keywords Data, Backlinks, On-Page, DataForSEO Labs, Reviews, Business Data, Merchant, Domain Analytics and Content Analysis — backed by databases spanning Google, Bing, Amazon, App Store and Google Play. Published figures include 1.98 trillion live backlinks, over 8 billion Google keywords and 577 million Google SERPs. The commercial model is its other strong suit: genuine pay-as-you-go where you pay only for the calls you consume, with a modest $50 minimum payment and dashboard tools for budgeting and spend limits. This is materially more flexible than the fixed monthly tiers most competitors impose and is well suited to SaaS products with variable load. There is free registration for testing, though no permanent flat free tier. History adds credibility: the company started in 2011 building software for an SEO agency, pivoted to its first API in 2016, shipped API v3 in 2019, and became an early ISO-certified data provider. It is headquartered in Tallinn with a team office in Kharkiv, Ukraine, and serves 3,500+ customers. Support is 24/7 and documentation is thorough, with first-party connectors for Google Sheets, Zapier, Make, n8n, Airtable and Postman. The gaps are transparency-related rather than capability: per-API rates are not surfaced on the main pricing page, and there are no published uptime or success-rate benchmarks. Consumption pricing, while flexible, demands monitoring discipline to avoid surprise bills at volume. For developers and agencies building data-heavy SEO products, DataForSEO is the most comprehensive single source available, and the pay-per-use model makes it easy to start small.\"}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="block text-foreground [font-family:Inter,_system-ui,_-apple-system,_sans-serif] text-sm font-normal not-italic leading-[1.4375rem] tracking-[-0.07px] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:'cv02',_'cv11',_'ss01'] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
