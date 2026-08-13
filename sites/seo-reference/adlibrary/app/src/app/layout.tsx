import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Meta Ads MCP setup guide for media buyers 2026",
  "description": "Connect Claude Code to Meta's MCP server in four commands. OAuth scopes, read queries, paused campaign drafting, and Pipeboard vs official server compared.",
  "robots": "index, follow",
  "alternates": {
    "canonical": "/posts/meta-ads-mcp-setup-guide",
    "languages": {
      "en": "https://adlibrary.com/posts/meta-ads-mcp-setup-guide",
      "x-default": "https://adlibrary.com/posts/meta-ads-mcp-setup-guide"
    }
  },
  "openGraph": {
    "title": "Meta Ads MCP setup guide for media buyers 2026",
    "description": "Connect Claude Code to Meta's MCP server in four commands. OAuth scopes, read queries, paused campaign drafting, and Pipeboard vs official server compared.",
    "type": "article",
    "siteName": "adlibrary.com",
    "url": "/posts/meta-ads-mcp-setup-guide",
    "images": [
      "https://www.adlibrary.com/api/media/file/claude-code-adlibrary-api-workflows-hero-1200x630.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Meta Ads MCP setup guide for media buyers 2026",
    "description": "Connect Claude Code to Meta's MCP server in four commands. OAuth scopes, read queries, paused campaign drafting, and Pipeboard vs official server compared.",
    "images": [
      "https://www.adlibrary.com/api/media/file/claude-code-adlibrary-api-workflows-hero-1200x630.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/f5dc77727fac.ico",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/svg/107c9de47cfe.svg",
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
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"", "/#organization\",\"name\":\"AdLibrary\",\"url\":\"", "\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"", "/og-image-1200x630.png\",\"width\":1200,\"height\":630},\"sameAs\":[\"https://twitter.com/kuhm8muh\"]},{\"@type\":\"WebSite\",\"@id\":\"", "/#website\",\"url\":\"", "\",\"name\":\"AdLibrary\",\"description\":\"Unified Ad Library Search - Browse top-performing ads from brands across Facebook, Instagram, and TikTok.\",\"publisher\":{\"@id\":\"", "/#organization\"},\"potentialAction\":{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"", "/search?q={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}}]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"BlogPosting\",\"headline\":\"Meta Ads MCP setup: connect Claude Code to Meta in 2026\",\"description\":\"Connect Claude Code to Meta's MCP server in four commands. OAuth scopes, read queries, paused campaign drafting, and Pipeboard vs official server compared.\",\"image\":\"", "/media/69e39774e52123cb72fb0c35\",\"datePublished\":\"2026-05-05T11:00:00.000Z\",\"dateModified\":\"2026-05-05T11:00:00.000Z\",\"author\":{\"@type\":\"Person\",\"name\":\"Murat Bock\",\"url\":\"", "/about\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"adlibrary\",\"url\":\"", "\"},\"mainEntityOfPage\":\"", "/posts/meta-ads-mcp-setup-guide\",\"keywords\":[\"meta ads mcp\",\"meta ads mcp setup\",\"meta ads mcp claude code\",\"mcp facebook ads\",\"meta marketing api mcp\"],\"wordCount\":2150,\"articleSection\":\"Guides \\u0026 Tutorials\"},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What is Meta Ads MCP and how does it work?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Meta Ads MCP is Meta's official Model Context Protocol server hosted at mcp.facebook.com/ads. It exposes 29 tools from the Meta Marketing API v25.0 — including campaign creation, insights retrieval, and opportunity scoring — to any MCP-compatible AI client like Claude Code. Authentication uses OAuth 2.0; you connect once and the AI agent can then read account data and, if you grant write scopes, create or modify campaigns on your behalf.\"}},{\"@type\":\"Question\",\"name\":\"Is Meta Ads MCP safe to connect with write permissions?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, with the right guard rails. Meta's OAuth scope picker lets you grant read-only, read/write, or read/write/financial access. The safest production pattern is to grant read and read/write but keep all agent-created campaigns in PAUSED state for human review before activating. Never grant financial scope to an automated agent without an explicit approval step in your workflow.\"}},{\"@type\":\"Question\",\"name\":\"What is the difference between Meta's official MCP server and Pipeboard?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Meta's official server at mcp.facebook.com/ads is OAuth-based, requires no developer app provisioning, and is directly maintained by Meta. Pipeboard's open-source meta-ads-mcp (github.com/pipeboard-co/meta-ads-mcp) requires a Facebook developer app but gives you local control and is licensed under BSL 1.1, which restricts commercial hosting. Most media buyers should start with Meta's official server.\"}},{\"@type\":\"Question\",\"name\":\"How many tools does Meta Ads MCP expose?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"As of its April 29 2026 beta launch, Meta Ads MCP exposes 29 tools including ads_create_campaign, ads_insights_advertiser_context, ads_get_opportunity_score, ads_insights_industry_benchmark, and mcp_meta_ads_get_login_link, among others.\"}},{\"@type\":\"Question\",\"name\":\"Do I need a Meta developer app to use Meta Ads MCP?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. Meta's official MCP server handles authentication entirely through OAuth 2.0 — you authorize via your existing Meta Business Manager account. No developer app, no app review, no access token wrangling. That is the key advantage over older Marketing API integrations.\"}}]},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"", "\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Posts\",\"item\":\"", "/posts\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Meta Ads MCP setup: connect Claude Code to Meta in 2026\",\"item\":\"", "/posts/meta-ads-mcp-setup-guide\"}]}]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"", "/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Blog\",\"item\":\"", "/posts\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Meta Ads MCP setup: connect Claude Code to Meta in 2026\",\"item\":\"", "/posts/meta-ads-mcp-setup-guide\"}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-clip text-foreground [font-family:GeistSans,_'GeistSans_Fallback'] text-2xl font-normal not-italic leading-8 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background max-lg:text-base max-lg:leading-6">
        {children}
      </body>
    </html>
  );
}
