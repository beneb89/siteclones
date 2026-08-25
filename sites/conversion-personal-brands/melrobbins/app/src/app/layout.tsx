import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Mel Robbins",
  "description": "Mel Robbins' mission with The Mel Robbins Podcast is simple: to share proven tools that empower you to create a better life. Jump into Mel's podcast and you'll laugh with her, learn from her and create your new life — your better life — step by step.",
  "robots": "max-snippet:-1,max-image-preview:large,max-video-preview:-1",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Mel Robbins",
    "description": "Mel Robbins' mission with The Mel Robbins Podcast is simple: to share proven tools that empower you to create a better life. Jump into Mel's podcast and you'll laugh with her, learn from her and create your new life — your better life — step by step.",
    "type": "website",
    "siteName": "Mel Robbins",
    "url": "/"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Mel Robbins",
    "description": "Mel Robbins' mission with The Mel Robbins Podcast is simple: to share proven tools that empower you to create a better life. Jump into Mel's podcast and you'll laugh with her, learn from her and create your new life — your better life — step by step."
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/47380f308d8b.ico"
      },
      {
        "url": "/assets/cloned/images/abf7cda8fbc7.png",
        "type": "image/png",
        "sizes": "196x196"
      },
      {
        "url": "/assets/cloned/images/17c48a4d3f89.png",
        "type": "image/png",
        "sizes": "96x96"
      },
      {
        "url": "/assets/cloned/images/1001bbb65d07.png",
        "type": "image/png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/d8e45785bd2c.png",
        "type": "image/png",
        "sizes": "16x16"
      },
      {
        "url": "/assets/cloned/images/53d5594062d7.png",
        "type": "image/png",
        "sizes": "128x128"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/a708d2e5d446.png",
        "sizes": "57x57"
      },
      {
        "url": "/assets/cloned/images/7ddcc225143d.png",
        "sizes": "114x114"
      },
      {
        "url": "/assets/cloned/images/42287871b2f5.png",
        "sizes": "72x72"
      },
      {
        "url": "/assets/cloned/images/d79e13382914.png",
        "sizes": "144x144"
      },
      {
        "url": "/assets/cloned/images/65aec71b17db.png",
        "sizes": "60x60"
      },
      {
        "url": "/assets/cloned/images/5a7f596227d9.png",
        "sizes": "120x120"
      },
      {
        "url": "/assets/cloned/images/bb348bc54d1b.png",
        "sizes": "76x76"
      },
      {
        "url": "/assets/cloned/images/693bafe632a8.png",
        "sizes": "152x152"
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
    <html lang={"en-us"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebSite\",\"@id\":\"", "/#/schema/WebSite\",\"url\":\"", "/\",\"name\":\"Mel Robbins\",\"inLanguage\":\"en-US\",\"potentialAction\":{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"", "/search/{search_term_string}/\"},\"query-input\":\"required name=search_term_string\"},\"publisher\":{\"@id\":\"", "/#/schema/Organization\"}},{\"@type\":\"WebPage\",\"@id\":\"", "\",\"url\":\"", "\",\"name\":\"Mel Robbins\",\"description\":\"Mel Robbins' mission with The Mel Robbins Podcast is simple: to share proven tools that empower you to create a better life. Jump into Mel's podcast and you'll laugh with her, learn from her and create your new life — your better life — step by step.\",\"inLanguage\":\"en-US\",\"isPartOf\":{\"@id\":\"", "/#/schema/WebSite\"},\"breadcrumb\":{\"@type\":\"BreadcrumbList\",\"@id\":\"", "/#/schema/BreadcrumbList\",\"itemListElement\":{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Mel Robbins\"}},\"potentialAction\":{\"@type\":\"ReadAction\",\"target\":\"", "\"},\"about\":{\"@id\":\"", "/#/schema/Organization\"}},{\"@type\":\"Organization\",\"@id\":\"", "/#/schema/Organization\",\"name\":\"Mel Robbins\",\"url\":\"", "/\"}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
