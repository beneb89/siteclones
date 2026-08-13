import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "AI with ALLIE",
  "description": "Turning AI buzzwords into business tactics. Get hands-on insights from an industry insider. Trusted by 2 million. Subscribe and get access to the AI Fast Track — a 5-day email course to expand what AI can do for you.",
  "keywords": [
    "leadership",
    "artificial intelligence",
    "technology"
  ],
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "AI with ALLIE",
    "description": "Turning AI buzzwords into business tactics. Get hands-on insights from an industry insider. Trusted by 2 million. Subscribe and get access to the AI Fast Track — a 5-day email course to expand what AI can do for you.",
    "type": "website",
    "siteName": "AI with ALLIE",
    "url": "/",
    "images": [
      "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/thumbnail/e9ad1156-1424-47ca-b18d-12c9d21c9073/landscape_BannerSmFix-07.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "AI with ALLIE",
    "description": "Turning AI buzzwords into business tactics. Get hands-on insights from an industry insider. Trusted by 2 million. Subscribe and get access to the AI Fast Track — a 5-day email course to expand what AI can do for you.",
    "images": [
      "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/thumbnail/e9ad1156-1424-47ca-b18d-12c9d21c9073/landscape_BannerSmFix-07.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/971be86c7431.png"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/971be86c7431.png"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1,
  "themeColor": "#000000"
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"url\":\"", "/\",\"@context\":\"https://schema.org\",\"@type\":\"WebSite\",\"potentialAction\":{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"", "/?q={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"url\":\"", "/\",\"@context\":\"https://schema.org\",\"@type\":\"WebSite\",\"potentialAction\":{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"", "/?q={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
