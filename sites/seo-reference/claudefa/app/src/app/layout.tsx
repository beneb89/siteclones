import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Google Ads MCP for Claude Code: Run PMax + Search",
  "description": "Claude Fast | Connect a Google Ads MCP to Claude Code. Manage PMax, Search, Shopping campaigns, audiences, and conversions from your terminal in 2026.",
  "robots": "index, follow",
  "alternates": {
    "canonical": "/blog/tools/mcp-extensions/google-ads-mcp-claude-code"
  },
  "openGraph": {
    "title": "Google Ads MCP for Claude Code: Run PMax + Search",
    "description": "Claude Fast | Connect a Google Ads MCP to Claude Code. Manage PMax, Search, Shopping campaigns, audiences, and conversions from your terminal in 2026.",
    "type": "website",
    "siteName": "Claude Fast",
    "url": "/blog/tools/mcp-extensions/google-ads-mcp-claude-code",
    "images": [
      "https://claudefa.st/api/og/tools/mcp-extensions/google-ads-mcp-claude-code/image.png?v4"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Google Ads MCP for Claude Code: Run PMax + Search",
    "description": "Claude Fast | Connect a Google Ads MCP to Claude Code. Manage PMax, Search, Shopping campaigns, audiences, and conversions from your terminal in 2026.",
    "creator": "@AbdoMobayad",
    "images": [
      "https://claudefa.st/api/og/tools/mcp-extensions/google-ads-mcp-claude-code/image.png?v4"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/2326dfc911fa.ico",
        "sizes": "any"
      },
      {
        "url": "/assets/cloned/images/df9ab296f466.png",
        "type": "image/png",
        "sizes": "32x32"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/58b8ecfcb70b.png",
        "type": "image/png",
        "sizes": "180x180"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1,
  "themeColor": "#272725",
  "colorScheme": "dark"
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Google Ads MCP for Claude Code: Run PMax + Search\",\"description\":\"Connect a Google Ads MCP to Claude Code. Manage PMax, Search, Shopping campaigns, audiences, and conversions from your terminal in 2026.\",\"image\":\"/api/og/tools/mcp-extensions/google-ads-mcp-claude-code/image.png?v4\",\"datePublished\":\"2026-08-10T08:34:17.777Z\",\"dateModified\":\"2026-08-10T08:34:17.777Z\",\"author\":{\"@type\":\"Person\",\"name\":\"Abdullah Mobayad\",\"url\":\"https://x.com/AbdoMobayad\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Claude Fast\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"", "/apple-icon.png\"}},\"url\":\"", "/blog/tools/mcp-extensions/google-ads-mcp-claude-code\"}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"", "\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Blog\",\"item\":\"", "/blog\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Google Ads MCP for Claude Code: Run PMax and Search\",\"item\":\"", "/blog/tools/mcp-extensions/google-ads-mcp-claude-code\"}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="block text-foreground [font-family:sans,_'sans_Fallback',_ui-sans-serif,_system-ui,_sans-serif,_'Apple_Color_Emoji',_'Segoe_UI_Emoji',_'Segoe_UI_Symbol',_'Noto_Color_Emoji'] text-base font-normal not-italic leading-6 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
