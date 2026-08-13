import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Microsoft Ads MCP Server: How to Build, Run, and Use It (2026), Amjid Ali",
  "description": "A Microsoft Ads MCP server lets AI agents manage Bing/Microsoft Advertising via natural language. Architecture, auth, what works today, and what to gate to humans.",
  "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  "alternates": {
    "canonical": "/insights/microsoft-ads-mcp-server-build-and-use/"
  },
  "openGraph": {
    "title": "Microsoft Ads MCP Server: How to Build, Run, and Use It (2026), Amjid Ali",
    "description": "A Microsoft Ads MCP server lets AI agents manage Bing/Microsoft Advertising via natural language. Architecture, auth, what works today, and what to gate to humans.",
    "type": "article",
    "siteName": "Amjid Ali",
    "url": "/insights/microsoft-ads-mcp-server-build-and-use/",
    "images": [
      "https://amjid.au/images/featured/insights/microsoft-ads-mcp-server-build-and-use.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Microsoft Ads MCP Server: How to Build, Run, and Use It (2026), Amjid Ali",
    "description": "A Microsoft Ads MCP server lets AI agents manage Bing/Microsoft Advertising via natural language. Architecture, auth, what works today, and what to gate to humans.",
    "images": [
      "https://amjid.au/images/featured/insights/microsoft-ads-mcp-server-build-and-use.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/14db4dc0d958.ico",
        "type": "image/x-icon"
      },
      {
        "url": "/assets/cloned/images/6af7d2f72703.png",
        "type": "image/png",
        "sizes": "16x16"
      },
      {
        "url": "/assets/cloned/images/9fdea8e87f31.png",
        "type": "image/png",
        "sizes": "32x32"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/464bfcad34b4.png",
        "sizes": "180x180"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1,
  "themeColor": "#0a0a0a"
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en-AU"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"headline\":\"Microsoft Ads MCP Server: How to Build, Run, and Use It (2026)\",\"description\":\"A Microsoft Ads MCP server lets AI agents manage Bing/Microsoft Advertising via natural language. Architecture, auth, what works today, and what to gate to humans.\",\"datePublished\":\"2026-04-24T00:00:00.000Z\",\"dateModified\":\"2026-04-24T00:00:00.000Z\",\"author\":{\"@type\":\"Person\",\"name\":\"Amjid Ali\",\"url\":\"", "/about\"},\"publisher\":{\"@type\":\"Person\",\"name\":\"Amjid Ali\",\"url\":\"", "\"},\"image\":{\"@type\":\"ImageObject\",\"url\":\"", "/images/featured/insights/microsoft-ads-mcp-server-build-and-use.png\",\"width\":1200,\"height\":630},\"keywords\":\"MCP, Microsoft Ads, Microsoft Advertising, Agentic AI, MarTech, Integration\",\"mainEntityOfPage\":\"", "/insights/microsoft-ads-mcp-server-build-and-use\",\"url\":\"", "/insights/microsoft-ads-mcp-server-build-and-use\"}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What is a Microsoft Ads MCP server?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"A Microsoft Ads MCP server is a Model Context Protocol adapter that exposes Microsoft Advertising (Bing Ads) operations to AI agents as structured tools. With one plugged in, a Claude or ChatGPT agent can read campaign performance, draft ad copy, adjust bids, and manage negative keyword lists, all under your OAuth credentials, not a side-channel API key.\"}},{\"@type\":\"Question\",\"name\":\"Is there an official Microsoft Ads MCP server?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"As of April 2026, Microsoft has not shipped a first-party MCP server for Microsoft Advertising. The ecosystem runs on open-source community implementations and custom builds wrapping the Microsoft Advertising API (REST and SOAP). Expect a first-party option within 12 months given Microsoft's broader MCP adoption across Azure and M365.\"}},{\"@type\":\"Question\",\"name\":\"What can an AI agent do with Microsoft Ads via MCP?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Practical use cases: performance reporting (pull KPIs across accounts, campaigns, ad groups), ad copy variant generation, negative keyword expansion, bid strategy analysis, budget pacing alerts, search term report mining, and anomaly detection. Harder (and worth gating to humans): launching new campaigns, moving budget between campaigns, pausing high-spend campaigns.\"}},{\"@type\":\"Question\",\"name\":\"Is it safe to let AI manage paid advertising spend?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Only with explicit guardrails. Our baseline: read-only access is fine, any write operation (bid change, budget move, campaign pause) requires human approval or sits under hard daily-budget caps. Log every write to an audit trail. The upside of AI-assisted ads management is real; the downside of a misfiring agent is six figures of wasted spend overnight.\"}},{\"@type\":\"Question\",\"name\":\"How long does it take to build a custom Microsoft Ads MCP server?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"3–4 weeks for a well-scoped server: OAuth flow, read endpoints (accounts, campaigns, ad groups, keywords, reports), a curated set of write endpoints behind approval gates, rate limit handling, and audit logging. Deep integrations (custom reporting, multi-tenant agency setups) can run 6–8 weeks.\"}}]}" }}
        />
        <script
          key="ditto-json-ld-2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"", "/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Insights\",\"item\":\"", "/insights/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Microsoft Ads MCP Server: How to Build, Run, and Use It (2026)\",\"item\":\"", "/insights/microsoft-ads-mcp-server-build-and-use/\"}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="h-[14115.1px] min-h-screen block overflow-x-hidden overflow-y-auto text-foreground [font-family:Inter,_system-ui,_-apple-system,_'Segoe_UI',_sans-serif] text-base font-normal not-italic leading-[1.625rem] tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:'cv11',_'ss01'] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background max-md:h-[18387.7px] md:max-lg:h-[14069.7px] 2xl:h-[884.8375rem]">
        {children}
      </body>
    </html>
  );
}
