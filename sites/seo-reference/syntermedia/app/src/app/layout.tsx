import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "MCP Server for Microsoft Ads: Complete 2026 Guide | Synter",
  "description": "Run Microsoft Ads from Claude Desktop with Synter MCP. Manage Bing Ads, search campaigns, audience targeting, and Performance Max via natural language and direct Microsoft Advertising API.",
  "keywords": [
    "MCP server for Microsoft Ads",
    "Microsoft Ads MCP server 2026",
    "Bing Ads MCP tools",
    "manage Microsoft Ads with Claude",
    "Microsoft Advertising API automation",
    "automate Bing Ads Claude Desktop"
  ],
  "robots": "index, follow",
  "alternates": {
    "canonical": "/blog/mcp-server-microsoft-ads"
  },
  "openGraph": {
    "title": "MCP Server for Microsoft Ads: Complete 2026 Guide",
    "description": "Run Microsoft Ads from Claude Desktop with Synter MCP. Manage Bing search campaigns via natural language.",
    "type": "article",
    "url": "/blog/mcp-server-microsoft-ads",
    "images": [
      "https://syntermedia.ai/assets/og/synter-og.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "MCP Server for Microsoft Ads: Complete 2026 Guide",
    "description": "Run Microsoft Ads from Claude Desktop with Synter MCP.",
    "images": [
      "https://syntermedia.ai/assets/og/synter-og.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/8ca0e5e94cf2.ico",
        "type": "image/x-icon",
        "sizes": "16x16"
      },
      {
        "url": "/assets/cloned/images/51841ac27d87.png",
        "type": "image/png",
        "sizes": "243x281"
      },
      {
        "url": "/assets/cloned/svg/875f32d7b7d6.svg",
        "type": "image/svg+xml"
      },
      {
        "url": "/assets/cloned/images/64b6c57fbea3.png",
        "type": "image/png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/8e6f131d8fa8.png",
        "type": "image/png",
        "sizes": "16x16"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/13c1c2b67a98.png",
        "type": "image/png",
        "sizes": "180x180"
      },
      {
        "url": "/assets/cloned/images/ba98878bbf36.png",
        "sizes": "180x180"
      }
    ]
  },
  "manifest": "/assets/cloned/manifest/c2fd9ff67b90.webmanifest"
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1,
  "themeColor": "#0b0f1a"
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"TechArticle\",\"headline\":\"MCP Server for Microsoft Ads: Complete 2026 Guide\",\"description\":\"Run Microsoft Ads from Claude Desktop with Synter MCP. Manage Bing Ads, search campaigns, audience targeting, and Performance Max via natural language and direct Microsoft Advertising API.\",\"author\":{\"@type\":\"Organization\",\"name\":\"Synter\",\"url\":\"", "\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Synter\",\"url\":\"", "\"},\"datePublished\":\"2026-04-15\",\"dateModified\":\"2026-04-15\",\"mainEntityOfPage\":\"", "/blog/mcp-server-microsoft-ads\",\"keywords\":\"MCP server for Microsoft Ads, Microsoft Ads MCP server 2026, Bing Ads MCP tools, manage Microsoft Ads with Claude, Microsoft Advertising API automation, automate Bing Ads Claude Desktop\"}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Can I manage Microsoft Ads from Claude Desktop?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, with Synter MCP. Connect your Microsoft Advertising account to Synter and install the Synter MCP server in Claude Desktop. You can then create search campaigns, configure ad groups, manage keywords, upload creative, and pull performance reports through natural language prompts. Setup guide at syntermedia.ai/mcp.\"}},{\"@type\":\"Question\",\"name\":\"What is the difference between Microsoft Ads and Bing Ads?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Bing Ads was rebranded to Microsoft Advertising in 2019. The platform now covers Bing search, Microsoft Edge, Yahoo, and the Microsoft Audience Network (MSN, Outlook, LinkedIn profile targeting). Microsoft Ads reaches a distinct audience from Google: it skews toward higher-income, older professionals, and B2B decision-makers.\"}},{\"@type\":\"Question\",\"name\":\"Does Microsoft Ads support Google Ads campaign import?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Microsoft Ads supports direct import from Google Ads, so you can replicate Google Search campaigns in Microsoft Ads with minimal setup. Synter MCP can initiate this import and manage both platforms simultaneously, letting you run parallel campaigns across both search engines from a single Claude conversation.\"}},{\"@type\":\"Question\",\"name\":\"How does Microsoft Ads management via MCP work technically?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Synter MCP connects to the Microsoft Advertising API using OAuth credentials from your Microsoft Ads account. When you prompt Claude, the Synter MCP server calls the appropriate API endpoints and executes actions in your live account. All actions are logged in Synter&apos;s audit trail.\"}},{\"@type\":\"Question\",\"name\":\"Why add Microsoft Ads to a paid media mix that already includes Google?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Microsoft Ads typically delivers lower CPCs than Google for the same keywords, with less advertiser competition in many verticals. For B2B advertisers, the LinkedIn profile targeting available in Microsoft Audience Network is unique. Most advertisers who import their Google campaigns to Microsoft see incremental conversions at a lower cost per acquisition.\"}}]}" }}
        />
        <script
          key="ditto-json-ld-2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"headline\":\"MCP Server for Microsoft Ads: Complete 2026 Guide\",\"description\":\"Microsoft Ads (formerly Bing Ads) reaches over 1 billion monthly searchers on Bing, Yahoo, and Microsoft Edge. For paid search advertisers, it is the most direct complement to Google Ads, with lower CPCs and unique access to LinkedIn profile targeting. Synter MCP connects Microsoft Ads to Claude Desktop so you can operate Bing campaigns alongside Google, Meta, and 11 other platforms.\",\"datePublished\":\"2026-04-15T00:00:00.000Z\",\"dateModified\":\"2026-04-15T00:00:00.000Z\",\"author\":{\"@type\":\"Person\",\"name\":\"Joel Horwitz\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"SynterMedia\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"", "/brand/synter-mark-color.png\"}},\"image\":\"", "/og/mcp-server-microsoft-ads.png\"}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-3"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"@id\":\"", "/#organization\",\"name\":\"Synter Media\",\"legalName\":\"Synter, LLC\",\"alternateName\":[\"Synter\",\"SynterMedia\",\"Synter AI\",\"Synter Media AI\"],\"url\":\"", "\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"", "/brand/logo-symbol-lime.png\",\"width\":512,\"height\":512},\"image\":\"", "/assets/og/synter-og.png\",\"description\":\"Cross-platform advertising MCP server and AI Agent platform for managing campaigns across Google Ads, Meta, LinkedIn, Reddit, Microsoft, TikTok, X, Pinterest, Amazon, and Spotify.\",\"foundingDate\":\"2025\",\"founder\":{\"@type\":\"Person\",\"name\":\"Joel Horwitz\"},\"areaServed\":\"Worldwide\",\"brand\":{\"@type\":\"Brand\",\"@id\":\"", "/#organization\"},\"knowsAbout\":[\"Digital Advertising\",\"AI Agents for Advertising\",\"Cross-Platform Campaign Management\",\"Model Context Protocol (MCP)\",\"Google Ads\",\"Meta Ads\",\"LinkedIn Ads\",\"TikTok Ads\",\"Reddit Ads\",\"X Ads\",\"Microsoft Ads\",\"Pinterest Ads\",\"Amazon Ads\",\"Spotify Ads\",\"Google Display & Video 360\"],\"sameAs\":[\"https://x.com/synterai\",\"https://linkedin.com/company/syntermedia\",\"https://github.com/jshorwitz/synter-media\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"email\":\"joel@synterai.com\",\"contactType\":\"sales\"}}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-4"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"name\":\"Synter Media\",\"alternateName\":\"Synter MCP Server\",\"applicationCategory\":\"BusinessApplication\",\"applicationSubCategory\":\"Advertising Technology\",\"operatingSystem\":\"Cloud\",\"url\":\"", "\",\"description\":\"AI Agent platform for cross-channel advertising. Manage campaigns across 20+ ad platforms — Google Ads, Meta, LinkedIn, Microsoft, TikTok, Reddit, X, Pinterest, Snapchat, DV360, Spotify, Amazon, and more — through AI Agents or MCP integration. 100+ tools for campaign creation, performance reporting, budget optimization, creative generation, and cross-platform management.\",\"featureList\":\"Cross-platform campaign management via MCP, Google Ads, Meta, LinkedIn, Microsoft, TikTok, Reddit, X, Pinterest, Snapchat, DV360, Spotify, Amazon support, AI image generation with Imagen 4, Flux, SDXL, AI video generation with Veo, Runway, Luma, Natural language campaign creation, Real-time performance metrics and reporting, Budget optimization across platforms, GAQL query execution for Google Ads, Server-side conversion tracking (CAPI), Compatible with Claude Desktop, Cursor, Amp, Landing page generation and hosting, Competitor analysis via Ads Library\",\"softwareHelp\":{\"@type\":\"CreativeWork\",\"name\":\"Synter Documentation\",\"url\":\"", "/blog\"},\"offers\":{\"@type\":\"AggregateOffer\",\"lowPrice\":\"100\",\"highPrice\":\"500\",\"priceCurrency\":\"USD\",\"offerCount\":\"3\",\"offers\":[{\"@type\":\"Offer\",\"name\":\"Solo\",\"price\":\"100\",\"priceCurrency\":\"USD\",\"description\":\"$100 monthly included usage. One workspace, one developer seat, and one advertiser account per platform.\"},{\"@type\":\"Offer\",\"name\":\"Scale\",\"price\":\"500\",\"priceCurrency\":\"USD\",\"description\":\"$500 monthly included usage. One brand workspace, unlimited campaigns and seats, and one advertiser account per platform.\"},{\"@type\":\"Offer\",\"name\":\"Enterprise\",\"priceCurrency\":\"USD\",\"description\":\"Enterprise capacity and consolidated billing for agencies and multi-client operations.\"}]},\"provider\":{\"@type\":\"Organization\",\"@id\":\"", "/#organization\"},\"softwareRequirements\":\"Web browser or MCP-compatible client (Claude Desktop, Cursor, Amp)\",\"downloadUrl\":\"https://github.com/jshorwitz/synter-media\",\"installUrl\":\"", "/developer\",\"screenshot\":\"", "/assets/og/synter-og.png\"}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="min-h-screen block text-foreground [font-family:Inter,_'Inter_Fallback',_Inter,_ui-sans-serif,_system-ui,_Inter,_ui-sans-serif,_system-ui] text-[0rem] font-normal not-italic leading-0 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr]">
        {children}
      </body>
    </html>
  );
}
