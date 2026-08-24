import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Gary Vaynerchuk | Entrepreneur, Author & Creator",
  "description": "The official home of Gary Vaynerchuk: serial entrepreneur, chairman of VaynerX, CEO of VaynerMedia and VeeFriends, and bestselling author.",
  "keywords": [
    "Gary Vaynerchuk",
    "GaryVee",
    "entrepreneur",
    "marketing",
    "business",
    "social media",
    "VaynerX",
    "VaynerMedia",
    "VeeFriends"
  ],
  "robots": "index, follow",
  "referrer": "strict-origin-when-cross-origin",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Gary Vaynerchuk | Entrepreneur, Author & Creator",
    "description": "The official home of Gary Vaynerchuk: serial entrepreneur, chairman of VaynerX, CEO of VaynerMedia and VeeFriends, and bestselling author.",
    "type": "website",
    "siteName": "Gary Vaynerchuk",
    "url": "/",
    "images": [
      "https://garyvaynerchuk.com/images/blog-hero.jpg"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Gary Vaynerchuk | Entrepreneur, Author & Creator",
    "description": "The official home of Gary Vaynerchuk: serial entrepreneur, chairman of VaynerX, CEO of VaynerMedia and VeeFriends, and bestselling author.",
    "site": "@garyvee",
    "creator": "@garyvee",
    "images": [
      "https://garyvaynerchuk.com/images/blog-hero.jpg"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/6307cf408f01.ico",
        "type": "image/x-icon",
        "sizes": "256x256"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/4f0552f522b7.png",
        "type": "image/png",
        "sizes": "180x180"
      }
    ]
  },
  "manifest": "/assets/cloned/manifest/efdb93b78857.webmanifest"
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1,
  "themeColor": "#0b0b0b"
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Person\",\"@id\":\"", "/#gary-vaynerchuk\",\"name\":\"Gary Vaynerchuk\",\"alternateName\":\"GaryVee\",\"url\":\"", "\",\"image\":\"", "/images/home-entrepreneur.webp\",\"jobTitle\":\"Entrepreneur, author, creator, and investor\",\"sameAs\":[\"https://x.com/garyvee\",\"https://www.instagram.com/garyvee/\",\"https://www.linkedin.com/in/garyvaynerchuk/\",\"https://www.youtube.com/garyvee\",\"https://www.tiktok.com/@garyvee\",\"https://www.facebook.com/gary\",\"https://www.threads.net/@garyvee\",\"https://en.wikipedia.org/wiki/Gary_Vaynerchuk\"]},{\"@type\":\"Organization\",\"@id\":\"", "/#organization\",\"name\":\"Team GaryVee\",\"alternateName\":\"GaryVaynerchuk.com\",\"url\":\"", "\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"", "/images/signature.png\"},\"founder\":{\"@id\":\"", "/#gary-vaynerchuk\"}},{\"@type\":\"WebSite\",\"@id\":\"", "/#website\",\"name\":\"Gary Vaynerchuk\",\"url\":\"", "\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"", "/#organization\"},\"potentialAction\":{\"@type\":\"SearchAction\",\"target\":\"", "/?s={search_term_string}\",\"query-input\":\"required name=search_term_string\"}}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
