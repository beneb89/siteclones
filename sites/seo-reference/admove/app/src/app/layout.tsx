import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Meta’s MCP and CLI: What Advertisers Need to Know in 2026",
  "description": "Learn how to use Meta Ads AI Connectors for ad reporting, campaign management, and catalog operations. Covers MCP Server and CLI setup, workflows, and limits.",
  "robots": "max-image-preview:large",
  "alternates": {
    "canonical": "/blog/metas-mcp-and-cli-for-advertisers"
  },
  "openGraph": {
    "title": "Meta’s MCP and CLI: What Advertisers Need to Know in 2026",
    "description": "Learn how to use Meta Ads AI Connectors for ad reporting, campaign management, and catalog operations. Covers MCP Server and CLI setup, workflows, and limits.",
    "type": "website",
    "url": "/blog/metas-mcp-and-cli-for-advertisers",
    "images": [
      "https://framerusercontent.com/images/lcCgC4pcptWz2PUOZ9BYL59CKU.png?width=2752&height=1536"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Meta’s MCP and CLI: What Advertisers Need to Know in 2026",
    "description": "Learn how to use Meta Ads AI Connectors for ad reporting, campaign management, and catalog operations. Covers MCP Server and CLI setup, workflows, and limits.",
    "images": [
      "https://framerusercontent.com/images/lcCgC4pcptWz2PUOZ9BYL59CKU.png?width=2752&height=1536"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/3be167a70908.png",
        "media": "(prefers-color-scheme: light)"
      },
      {
        "url": "/assets/cloned/images/3be167a70908.png",
        "media": "(prefers-color-scheme: dark)"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/3cda43c3c652.png"
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
          dangerouslySetInnerHTML={{ __html: ["{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"Organization\",\n      \"@id\": \"", "/#Organization\",\n      \"name\": \"AdMove AI\",\n      \"legalName\": \"AdMove AI\",\n      \"description\": \"AdMove AI is an AI-native creative operations platform for agencies. Produce on-brand ads at portfolio scale with scalable AI agents, custom API and automation workflows.\",\n      \"url\": \"", "/\",\n      \"email\": \"contact@admove.ai\",\n      \"slogan\": \"Ad Campaigns On Autopilot. With AI.\",\n      \"areaServed\": \"Worldwide\",\n      \"foundingDate\": \"2025-05-25\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"@id\": \"", "/#Logo\",\n        \"url\": \"https://framerusercontent.com/assets/AE9ad3WQzjZQUfuDEdxWGiPiQxI.png\",\n        \"contentUrl\": \"https://framerusercontent.com/assets/AE9ad3WQzjZQUfuDEdxWGiPiQxI.png\",\n        \"caption\": \"AdMove AI\"\n      },\n      \"image\": { \"@id\": \"", "/#Logo\" },\n      \"contactPoint\": { \"@id\": \"", "/#ContactPoint\" },\n      \"founder\": [\n        { \"@id\": \"", "/#Person-Daniel-Demian\" },\n        { \"@id\": \"", "/#Person-Gery-Meleg\" }\n      ],\n      \"keywords\": [\n        \"AdMove\",\n        \"AdMove AI\",\n        \"AI creative operations\",\n        \"creative operations platform\",\n        \"AI agents for agencies\",\n        \"social media advertising automation\"\n      ],\n      \"sameAs\": [\n        \"https://www.linkedin.com/company/admove-ai/\",\n        \"https://x.com/AdMove_AI\",\n        \"https://www.instagram.com/admove.ai/\",\n        \"https://www.youtube.com/@AdMoveAI\",\n        \"https://www.g2.com/sellers/admove-ai\"\n      ]\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"", "/#WebSite\",\n      \"url\": \"", "/\",\n      \"name\": \"AdMove AI\",\n      \"alternateName\": [\"AdMove\", \"AdMove.ai\"],\n      \"description\": \"AdMove AI is an AI-native creative operations platform for agencies. Produce on-brand ads at portfolio scale with scalable AI agents, custom API and automation workflows.\",\n      \"publisher\": { \"@id\": \"", "/#Organization\" },\n      \"inLanguage\": {\n        \"@type\": \"Language\",\n        \"name\": \"en\",\n        \"alternateName\": \"English\",\n        \"description\": \"The English language\"\n      },\n      \"accessMode\": [\"textual\", \"visual\"],\n      \"isFamilyFriendly\": true\n    },\n    {\n      \"@type\": \"ContactPoint\",\n      \"@id\": \"", "/#ContactPoint\",\n      \"name\": \"AdMove AI Email Support\",\n      \"contactType\": \"Email Support\",\n      \"email\": \"contact@admove.ai\"\n    }\n  ]\n}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="block text-foreground [font-family:sans-serif] text-xs font-normal not-italic leading-3.5 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
