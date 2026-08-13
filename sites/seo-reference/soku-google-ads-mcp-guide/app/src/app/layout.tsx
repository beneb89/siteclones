import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Google Ads MCP: The Complete Guide (2026) | Soku",
  "description": "The complete guide to Google's official Ads MCP server — the 2 tools and GAQL, the read-only safety model, setup with developer token and OAuth, the connector…",
  "alternates": {
    "canonical": "/blog/google-ads-mcp-guide"
  },
  "openGraph": {
    "title": "Google Ads MCP: The Complete Guide (2026)",
    "description": "The complete guide to Google's official Ads MCP server — the 2 tools and GAQL, the read-only safety model, setup with developer token and OAuth, the connector landscape, how it compares to Meta's read-write MCP, and the agent operating model it implies.",
    "type": "article",
    "siteName": "Soku AI",
    "url": "/blog/google-ads-mcp-guide",
    "images": [
      "https://cdn.soku.ai/marketing/images/blog/google-ads-mcp-guide/cover-2.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Google Ads MCP: The Complete Guide (2026)",
    "description": "The complete guide to Google's official Ads MCP server — the 2 tools and GAQL, the read-only safety model, setup with developer token and OAuth, the connector landscape, how it compares to Meta's read-write MCP, and the agent operating model it implies.",
    "images": [
      "https://cdn.soku.ai/marketing/images/blog/google-ads-mcp-guide/cover-2.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/41d048ee1143.png",
        "type": "image/png",
        "sizes": "96x96"
      },
      {
        "url": "/assets/cloned/images/eb481638df9b.png",
        "type": "image/png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/cd8ec564d528.png",
        "type": "image/png",
        "sizes": "48x48"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/bbf4bfac2dc3.png",
        "sizes": "180x180"
      }
    ]
  },
  "manifest": "/assets/cloned/manifest/b5a7f7398ffb.webmanifest"
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
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"Soku AI\",\"legalName\":\"About Intelligence Inc.\",\"url\":\"", "\",\"logo\":\"https://cdn.soku.ai/marketing/logo.svg\",\"description\":\"Your always-on AI marketing agent. Analyze performance, surface insights, and optimize campaigns across every channel.\",\"contactPoint\":{\"@type\":\"ContactPoint\",\"contactType\":\"customer support\",\"url\":\"", "/contact\"},\"sameAs\":[\"https://join.slack.com/t/soku-talk/shared_invite/zt-3s9i1a4w7-AWlkU3GAiar3wJM4ToYLEg\",\"https://github.com/About-Intelligence\"]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"WebSite\",\"name\":\"Soku AI\",\"url\":\"", "\",\"description\":\"Your always-on AI marketing agent. Analyze performance, surface insights, and optimize campaigns across every channel.\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"Soku AI\"}}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"name\":\"Soku AI\",\"description\":\"Your always-on AI marketing agent. Analyze performance, surface insights, and optimize campaigns across every channel.\",\"url\":\"", "\",\"applicationCategory\":\"BusinessApplication\",\"applicationSubCategory\":\"Marketing & Advertising Automation\",\"operatingSystem\":\"Web\",\"offers\":{\"@type\":\"Offer\",\"price\":\"0\",\"priceCurrency\":\"USD\",\"description\":\"Free to start\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Soku AI\"}}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-3"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Google Ads MCP: The Complete Guide (2026)\",\"description\":\"The complete guide to Google's official Ads MCP server — the 2 tools and GAQL, the read-only safety model, setup with developer token and OAuth, the connector landscape, how it compares to Meta's read-write MCP, and the agent operating model it implies.\",\"url\":\"", "/blog/google-ads-mcp-guide\",\"dateModified\":\"2026-07-24\",\"datePublished\":\"2026-06-08\",\"author\":{\"@type\":\"Person\",\"name\":\"Soku Team\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Soku AI\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://cdn.soku.ai/marketing/logo.svg\"}},\"image\":\"https://cdn.soku.ai/marketing/images/blog/google-ads-mcp-guide/cover-2.png\"}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-4"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"", "/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Blog\",\"item\":\"", "/blog\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"AI & Marketing\",\"item\":\"", "/blog?category=ai-marketing\"},{\"@type\":\"ListItem\",\"position\":4,\"name\":\"Google Ads MCP: The Complete Guide (2026)\"}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="block text-foreground [font-family:neueMontrealArabic,_'neueMontrealArabic_Fallback'] text-base font-normal not-italic leading-6 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
