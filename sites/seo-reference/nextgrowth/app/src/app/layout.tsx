import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "DataForSEO API: Complete 2026 Guide (Pricing + Endpoints)",
  "description": "DataForSEO API guide 2026: every endpoint, pricing and integration explained. SERP, Keywords, Backlinks, Labs, plus Python code and n8n setup samples.",
  "robots": "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  "alternates": {
    "canonical": "/dataforseo-api-guide/"
  },
  "openGraph": {
    "title": "DataForSEO API: Complete 2026 Guide (Pricing + Endpoints)",
    "description": "DataForSEO API guide 2026: every endpoint, pricing and integration explained. SERP, Keywords, Backlinks, Labs, plus Python code and n8n setup samples.",
    "type": "article",
    "siteName": "NextGrowth.ai",
    "url": "/dataforseo-api-guide/",
    "images": [
      "https://nextgrowth.ai/wp-content/uploads/2026/02/dataforseo-api-guide-hero.webp"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "DataForSEO API: Complete 2026 Guide (Pricing + Endpoints)",
    "description": "DataForSEO API guide 2026: every endpoint, pricing and integration explained. SERP, Keywords, Backlinks, Labs, plus Python code and n8n setup samples.",
    "creator": "@thenguyen_ai",
    "images": [
      "https://nextgrowth.ai/wp-content/uploads/2026/02/dataforseo-api-guide-hero.webp"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/f09c00c6425b.png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/e7b9fffb5902.png",
        "sizes": "192x192"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/682b7b5ae57d.png"
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
    <html lang={"en-US"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"", "/#organization\",\"name\":\"NextGrowth.ai\",\"url\":\"", "\",\"sameAs\":[\"https://www.linkedin.com/company/nextgrowth-ai/\",\"https://github.com/thenguyenvn90\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"", "/#logo\",\"url\":\"", "/wp-content/uploads/2025/08/cropped-logo.png\",\"contentUrl\":\"", "/wp-content/uploads/2025/08/cropped-logo.png\",\"caption\":\"NextGrowth.ai\",\"inLanguage\":\"en-US\",\"width\":\"791\",\"height\":\"253\"}},{\"@type\":\"WebSite\",\"@id\":\"", "/#website\",\"url\":\"", "\",\"name\":\"NextGrowth.ai\",\"alternateName\":\"Next Growth With AI\",\"publisher\":{\"@id\":\"", "/#organization\"},\"inLanguage\":\"en-US\",\"sameAs\":[\"https://www.linkedin.com/company/nextgrowth-ai/\",\"https://github.com/thenguyenvn90\"]},{\"@type\":\"ImageObject\",\"@id\":\"", "/wp-content/uploads/2026/02/dataforseo-api-guide-hero.webp\",\"url\":\"", "/wp-content/uploads/2026/02/dataforseo-api-guide-hero.webp\",\"width\":\"1162\",\"height\":\"648\",\"caption\":\"DataForSEO API guide showing raw SEO data access at low per-query cost without dashboard\",\"inLanguage\":\"en-US\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"", "/dataforseo-api-guide/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@id\":\"", "\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@id\":\"", "/category/seo-tools/\",\"name\":\"SEO Tools\"}},{\"@type\":\"ListItem\",\"position\":3,\"item\":{\"@id\":\"", "/dataforseo-api-guide/\",\"name\":\"DataForSEO API Guide: Complete Setup for Developers 2026\"}}]},{\"@type\":\"WebPage\",\"@id\":\"", "/dataforseo-api-guide/#webpage\",\"url\":\"", "/dataforseo-api-guide/\",\"name\":\"DataForSEO API: Complete 2026 Guide (Pricing + Endpoints)\",\"datePublished\":\"2026-03-01T03:22:57+00:00\",\"dateModified\":\"2026-08-12T15:52:31+00:00\",\"isPartOf\":{\"@id\":\"", "/#website\"},\"primaryImageOfPage\":{\"@id\":\"", "/wp-content/uploads/2026/02/dataforseo-api-guide-hero.webp\"},\"inLanguage\":\"en-US\",\"breadcrumb\":{\"@id\":\"", "/dataforseo-api-guide/#breadcrumb\"}},{\"@type\":\"Person\",\"@id\":\"", "/#thenguyen\",\"name\":\"The Nguyen\",\"description\":\"Senior DevOps and Cloud Engineer who has been publishing and ranking English-language content sites since 2014, holding page-one positions in competitive US niches between 2016 and 2022. After Google's 2023 Helpful Content Update and the March 2024 Core Update reset that portfolio to zero, he rebuilt around engineered systems: SEO automation on n8n and Claude Code, self-hosted infrastructure, and the SEVOsmith content engine.\",\"url\":\"", "/about/\",\"image\":{\"@type\":\"ImageObject\",\"@id\":\"", "/wp-content/uploads/2025/11/The-avatar-150x150.jpg\",\"url\":\"", "/wp-content/uploads/2025/11/The-avatar-150x150.jpg\",\"caption\":\"The Nguyen\",\"inLanguage\":\"en-US\"},\"sameAs\":[\"https://www.linkedin.com/in/the-nguyen-minh-nextgrowth-ai/\",\"https://github.com/thenguyenvn90\",\"https://www.youtube.com/@nextgrowth-ai\"],\"worksFor\":{\"@type\":\"Organization\",\"@id\":\"", "/#organization\",\"name\":\"NextGrowth.ai\",\"url\":\"", "/\"},\"jobTitle\":\"Senior DevOps Engineer and SEO Automation Specialist\",\"knowsAbout\":[\"n8n workflow automation\",\"Claude Code\",\"Self-hosted infrastructure\",\"AI-powered SEO\",\"DataForSEO API\",\"Coolify deployment\",\"WordPress SEO\",\"DevOps engineering\"]},{\"@type\":\"BlogPosting\",\"headline\":\"DataForSEO API: Complete 2026 Guide (Pricing + Endpoints)\",\"description\":\"DataForSEO API guide 2026: every endpoint, pricing and integration explained. SERP, Keywords, Backlinks, Labs, plus Python code and n8n setup samples.\",\"datePublished\":\"2026-03-01T03:22:57+00:00\",\"dateModified\":\"2026-08-12T15:52:31+00:00\",\"articleSection\":\"SEO Tools\",\"author\":{\"@id\":\"", "/#thenguyen\",\"name\":\"The Nguyen\"},\"publisher\":{\"@id\":\"", "/#organization\"},\"name\":\"DataForSEO API: Complete 2026 Guide (Pricing + Endpoints)\",\"isPartOf\":{\"@id\":\"", "/dataforseo-api-guide/#webpage\"},\"inLanguage\":\"en-US\",\"mainEntityOfPage\":{\"@id\":\"", "/dataforseo-api-guide/#webpage\"},\"speakable\":{\"@type\":\"SpeakableSpecification\",\"cssSelector\":[\".entry-content p:first-of-type\",\"h1\",\".tl-dr\"]},\"@id\":\"", "/dataforseo-api-guide/#schema-7926\",\"image\":{\"@id\":\"", "/wp-content/uploads/2026/02/dataforseo-api-guide-hero.webp\"}},{\"@type\":\"VideoObject\",\"name\":\"DataForSEO API: Complete 2026 Guide (Pricing + Endpoints)\",\"description\":\"DataForSEO API: Complete 2026 Guide (Pricing + Endpoints) — complete walkthrough covering setup, configuration, and real-world usage.\",\"uploadDate\":\"2026-03-01T03:22:57+00:00\",\"thumbnailUrl\":\"", "/wp-content/uploads/2026/02/dataforseo-api-guide-hero.webp\",\"embedUrl\":\"https://www.youtube.com/embed/4C6dgxiQIpY\",\"isFamilyFriendly\":\"True\",\"@id\":\"", "/dataforseo-api-guide/#schema-8563\",\"isPartOf\":{\"@id\":\"", "/dataforseo-api-guide/#webpage\"},\"publisher\":{\"@id\":\"", "/#organization\"},\"inLanguage\":\"en-US\"}]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"@id\":\"", "/dataforseo-api-guide/#faq\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How much does DataForSEO cost per month?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The platform has no fixed monthly cost, you pay only for API requests consumed. The minimum to access the Live environment is a $50 deposit, but there&#8217;s no recurring subscription. A small agency running 50K requests/month at Standard pricing spends roughly $30. A large agency at 1M requests/month pays approximately $600. These figures reference dataforseo.com/pricing (September 2025); compare to Semrush Pro at $139.95/month and Ahrefs Lite at $129/month to calculate your break-even volume. Credits don&#8217;t expire, so unused balances carry forward indefinitely.\"}},{\"@type\":\"Question\",\"name\":\"Is DataForSEO better than Ahrefs or Semrush?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"It is not a direct replacement for Ahrefs or Semrush, it&#8217;s a different product category. Ahrefs and Semrush are subscription tools built for manual SEO workflows; this is raw API infrastructure for developers and automated pipelines. It wins on cost ($0.0006/query vs. $129+/month subscription), ASO data, LLM Mentions tracking, and AI agent connectivity. Ahrefs wins on backlink depth, non-English keyword database size, and user experience for manual research. For agencies automating reporting at scale, the API typically costs less above 100K monthly requests, the Raw Data Advantage compounds at volume.\"}},{\"@type\":\"Question\",\"name\":\"How does the async architecture work?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The Standard and High Priority endpoints use a three-phase async cycle: submit, wait, retrieve. Your POST request returns a task ID immediately; data becomes available after processing, retrieved via a separate GET request. You do need to build a polling loop for direct API integrations, a while status != &#8220;ok&#8221;: time.sleep(10) pattern handles most cases. However, n8n&#8217;s official community node manages this automatically, requiring zero custom code. If async complexity is a blocker, start with n8n. Only Live-mode endpoints are synchronous and return data in the initial response.\"}},{\"@type\":\"Question\",\"name\":\"Can I connect the API to Claude or ChatGPT?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, the platform offers an official MCP server for Claude Desktop and a native API wrapper for LangChain agents. For Claude Desktop, add the configuration block to claude_desktop_config.json via Settings → Developer → Edit Config (see the full config blocks in the MCP section above). For LangChain, install langchain-community and use DataForSeoAPIWrapper to give any LangChain agent live SERP and keyword data access. Both integrations use your standard API credentials. AI search interest in the platform grew +967% YoY, driven by developers building exactly these agent-based workflows. For ChatGPT specifically, the DataForSEO custom GPT integration uses GPT Actions to connect all three data tiers without writing code.\"}},{\"@type\":\"Question\",\"name\":\"Difference between Sandbox and Live?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The Sandbox returns structurally identical responses to the Live environment using simulated data, no credits consumed. The only difference in production code is the base URL: sandbox.dataforseo.com vs. api.dataforseo.com. This means all code written and tested in Sandbox deploys to production without modification. The Sandbox has lower rate limits but is otherwise a complete development environment. The $50 minimum deposit is only required for Live environment access, Sandbox is always free. If you are evaluating whether DataForSEO is the right fit for your stack, our other DataForSEO alternatives comparison breaks down cost, speed, and feature differences across all major SEO data providers. For a broader view of best SEO API options across the market, including pricing and use-case f...\"}}]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"Review\",\"name\":\"DataForSEO API Review\",\"author\":{\"@type\":\"Person\",\"name\":\"The Nguyen\",\"url\":\"", "/about/\"},\"itemReviewed\":{\"@type\":\"SoftwareApplication\",\"name\":\"DataForSEO\",\"applicationCategory\":\"DeveloperApplication\",\"url\":\"https://dataforseo.com\",\"operatingSystem\":\"Web, API\",\"offers\":{\"@type\":\"Offer\",\"price\":\"0\",\"priceCurrency\":\"USD\",\"description\":\"Pay-as-you-go pricing starting at $0.01 per API task\"},\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.5\",\"reviewCount\":\"1\",\"bestRating\":\"5\"}},\"reviewRating\":{\"@type\":\"Rating\",\"ratingValue\":\"4.5\",\"bestRating\":\"5\",\"worstRating\":\"1\"},\"reviewBody\":\"DataForSEO delivers raw SEO data via API at roughly $0.0006 per SERP query without the dashboard markup of traditional tools. The async architecture handles bulk operations well, though the learning curve is steeper than GUI-based alternatives.\",\"datePublished\":\"2026-03-01\"}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-3"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"VideoObject\",\"name\":\"DataForSEO API Complete Guide\",\"description\":\"Complete video walkthrough of the DataForSEO API platform covering setup, authentication, and integration patterns.\",\"thumbnailUrl\":\"https://img.youtube.com/vi/4C6dgxiQIpY/maxresdefault.jpg\",\"uploadDate\":\"2026-03-01T00:00:00+00:00\",\"contentUrl\":\"https://www.youtube.com/watch?v=4C6dgxiQIpY\",\"embedUrl\":\"https://www.youtube.com/embed/4C6dgxiQIpY\",\"duration\":\"PT10M\"}" }}
        />
      </head>
      <body className="block text-foreground [font-family:'Open_Sans',_sans-serif] text-[1.0625rem] font-normal not-italic leading-[1.6875rem] tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
