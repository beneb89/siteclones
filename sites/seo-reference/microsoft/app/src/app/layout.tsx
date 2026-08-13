import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Microsoft MCP Server | Microsoft Advertising",
  "description": "MCP server powers agentic commerce with AI-ready product data, improving visibility, accuracy, and conversion across AI-driven shopping experiences.",
  "alternates": {
    "canonical": "/en/solutions/technology/mcp-server",
    "languages": {
      "ja": "https://about.ads.microsoft.com/ja/solutions/technology/mcp-%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC",
      "fr": "https://about.ads.microsoft.com/fr/Solutions/technologie/serveur-mcp",
      "es": "https://about.ads.microsoft.com/es/soluciones/tecnologia/servidor-mcp",
      "de": "https://about.ads.microsoft.com/de/loesungen/technologie/mcp%E2%80%91server"
    }
  },
  "openGraph": {
    "title": "Microsoft MCP Server",
    "description": "MCP server powers agentic commerce with AI-ready product data, improving visibility, accuracy, and conversion across AI-driven shopping experiences."
  },
  "twitter": {
    "card": "summary",
    "title": "Microsoft MCP Server",
    "description": "MCP server powers agentic commerce with AI-ready product data, improving visibility, accuracy, and conversion across AI-driven shopping experiences.",
    "site": "@MicrosoftAds",
    "creator": "@Microsoft"
  },
  "icons": {
    "shortcut": [
      {
        "url": "/assets/cloned/images/2c1c2bc5f5db.ico",
        "type": "image/x-icon"
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
          dangerouslySetInnerHTML={{ __html: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Organization\",\n    \"name\": \"Microsoft\",\n    \"url\": \"https://www.microsoft.com/\",\n    \"logo\": \"https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png\",\n    \"sameAs\": [\n      \"https://www.linkedin.com/company/microsoft-advertising\",\n      \"https://twitter.com/MSAdvertising\"\n    ],\n    \"contactPoint\": [{\"@type\":\"ContactPoint\",\"telephone\":\"+1-800-123-4567\",\"contactType\":\"Customer Service\",\"areaServed\":[\"US\"],\"availableLanguage\":[\"English\"]}],\n\n    \"address\": {\n      \"@type\": \"PostalAddress\",\n      \"streetAddress\": \"One Microsoft Way\",\n      \"addressLocality\": \"Redmond\",\n      \"addressRegion\": \"WA\",\n      \"postalCode\": \"98052\",\n      \"addressCountry\": \"US\"\n    },\n    \"description\": \"Microsoft Advertising helps businesses reach customers across Microsoft properties and partner sites.\"\n  }" }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\n        \"@context\": \"https://schema.org/\",\n        \"@type\": \"WebPage\",\n        \"name\": \"Microsoft MCP Server\",\n        \"url\": \"", "\\/en\\/solutions\\/technology\\/mcp\\u002Dserver\",\n        \"description\": \"MCP server powers agentic commerce with AI-ready product data, improving visibility, accuracy, and conversion across AI-driven shopping experiences.\",\n        \"inLanguage\": \"en\",\n        \"isPartOf\": {\n          \"@type\": \"WebSite\",\n          \"name\": \"Microsoft Advertising | End-to-End Digital Marketing Solutions for Advertisers and Publishers\",\n          \"url\": \"\\/en.html\"\n        }\n      }"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What is an MCP server?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"<p>MCP (Model Context Protocol) acts as a bridge that lets AI assistants such as Microsoft 365 Copilot and Claude connect to external tools and data sources, such as Microsoft Advertising. Once connected, advertisers can directly retrieve Microsoft Advertising data from their favorite AI assistants.</p>\\r\\n\"}},{\"@type\":\"Question\",\"name\":\"Which AI assistants will be supported at launch?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"<p>At launch, we plan to support Microsoft 365 Copilot via Copilot Studio, the Claude desktop app, the ChatGPT desktop app, and any MCP-compatible AI agent.</p>\\r\\n\"}},{\"@type\":\"Question\",\"name\":\"What data and capabilities will be available via Microsoft Advertising MCP at launch?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"<p>At launch, Microsoft Advertising MCP will support:</p>\\r\\n<ul><li><p>Exploration of key Microsoft Advertising account data, including campaigns, ad groups, ads, and keywords.</p>\\r\\n</li></ul>\\r\\n<ul><li><p>Performance metrics on every entity for filtering and sorting, including spend, clicks, impressions, CTR, average CPC, average CPM, conversions, conversion rate, revenue, return on ad spend (ROAS), and more.</p>\\r\\n</li></ul>\\r\\n<ul><li><p>Common ways to narrow results, such as filtering and viewing performance over a selected date range, so you can understand results faster and save token credits.</p>\\r\\n</li></ul>\\r\\n\"}},{\"@type\":\"Question\",\"name\":\"What can I actually do with the MCP server?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"<p>The MCP server enables you to query Microsoft Advertising data from the AI assistants you already use, such as Microsoft 365 Copilot and Claude. You can ask it to pull your top campaign products, search queries, and key performance data, such as month-over-month conversion changes. You can also have it audit your campaign setup to make sure it&#39;s following best practices.</p>\\r\\n\"}},{\"@type\":\"Question\",\"name\":\"Is the MCP server free to use?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"<p>Yes, it&#39;s free to connect to the Microsoft Advertising MCP server. However, you may need a paid subscription for the AI assistants you use to connect to the MCP server, or enough token credits available to run your workflows.</p>\\r\\n\"}}]}" }}
        />
        <script
          key="ditto-json-ld-3"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n                    \"@context\": \"https://schema.org\",\n                    \"@type\": \"VideoObject\",\n                    \"name\": \"\",\n                    \"description\": \"\",\n                    \"thumbnailUrl\": \"\\/content\\/dam\\/sites\\/msa\\u002Dabout\\/global\\/common\\/content\\u002Dlib\\/videos\\/MCPLandingPage_VideoThumbnail_814x500.png\",\n                    \"contentUrl\": \"\\/content\\/dam\\/sites\\/msa\\u002Dabout\\/global\\/common\\/content\\u002Dlib\\/videos\\/MCP Demo Video_Hero.mov\"\n                }" }}
        />
      </head>
      <body className="block overflow-auto text-foreground [font-family:'Segoe_UI',_SegoeUI-regular,_sans-serif] text-base font-normal not-italic leading-[1.3125rem] tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] max-lg:text-sm max-lg:leading-[1.125rem]">
        {children}
      </body>
    </html>
  );
}
