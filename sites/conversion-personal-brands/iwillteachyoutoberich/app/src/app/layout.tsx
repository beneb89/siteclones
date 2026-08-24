import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "I Will Teach You To Be Rich » by Ramit Sethi",
  "description": "Stop pinching pennies and design the life you’ve always imagined. Spend confidently on the things you love, and cut back mercilessly on the things you don’t.",
  "robots": "max-image-preview:large",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Home - I Will Teach You To Be Rich",
    "description": "Stop pinching pennies and design the life you’ve always imagined. Spend confidently on the things you love, and cut back mercilessly on the things you don’t.",
    "type": "article",
    "siteName": "I Will Teach You To Be Rich - by Ramit Sethi",
    "url": "/",
    "images": [
      "https://www.iwillteachyoutoberich.com/wp-content/uploads/2023/03/cropped-RS-1_Credit-Chris-Newhard-Booklight-scaled.jpg"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Home - I Will Teach You To Be Rich",
    "description": "Stop pinching pennies and design the life you’ve always imagined. Spend confidently on the things you love, and cut back mercilessly on the things you don’t.",
    "images": [
      "https://www.iwillteachyoutoberich.com/wp-content/uploads/2023/03/cropped-RS-1_Credit-Chris-Newhard-Booklight-scaled.jpg"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/190e82f44156.png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/44dd5f40391c.png",
        "sizes": "192x192"
      },
      {
        "url": "/assets/cloned/svg/fa8f4a59768e.svg",
        "type": "image/svg+xml"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/006348a972bc.png"
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
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"BreadcrumbList\",\"@id\":\"", "\\/#breadcrumblist\",\"itemListElement\":[{\"@type\":\"ListItem\",\"@id\":\"", "#listItem\",\"position\":1,\"name\":\"Home\"}]},{\"@type\":\"Organization\",\"@id\":\"", "\\/#organization\",\"name\":\"I Will Teach You To Be Rich\",\"description\":\"by Ramit Sethi\",\"url\":\"", "\\/\"},{\"@type\":\"WebPage\",\"@id\":\"", "\\/#webpage\",\"url\":\"", "\\/\",\"name\":\"Home - I Will Teach You To Be Rich\",\"inLanguage\":\"en-US\",\"isPartOf\":{\"@id\":\"", "\\/#website\"},\"breadcrumb\":{\"@id\":\"", "\\/#breadcrumblist\"},\"datePublished\":\"2025-03-11T05:49:50-04:00\",\"dateModified\":\"2026-07-13T21:13:58-04:00\"},{\"@type\":\"WebSite\",\"@id\":\"", "\\/#website\",\"url\":\"", "\\/\",\"name\":\"I Will Teach You To Be Rich\",\"description\":\"by Ramit Sethi\",\"inLanguage\":\"en-US\",\"publisher\":{\"@id\":\"", "\\/#organization\"}}]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebSite\",\"@id\":\"", "/#/schema/WebSite\",\"url\":\"", "/\",\"name\":\"I Will Teach You To Be Rich\",\"description\":\"by Ramit Sethi\",\"inLanguage\":\"en-US\",\"potentialAction\":{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"", "/search/{search_term_string}/\"},\"query-input\":\"required name=search_term_string\"},\"publisher\":{\"@id\":\"", "/#/schema/Organization\"}},{\"@type\":\"WebPage\",\"@id\":\"", "/\",\"url\":\"", "/\",\"name\":\"I Will Teach You To Be Rich » by Ramit Sethi\",\"description\":\"Stop pinching pennies and design the life you’ve always imagined. Spend confidently on the things you love, and cut back mercilessly on the things you don’t.\",\"inLanguage\":\"en-US\",\"isPartOf\":{\"@id\":\"", "/#/schema/WebSite\"},\"breadcrumb\":{\"@type\":\"BreadcrumbList\",\"@id\":\"", "/#/schema/BreadcrumbList\",\"itemListElement\":{\"@type\":\"ListItem\",\"position\":1,\"name\":\"I Will Teach You To Be Rich\"}},\"potentialAction\":{\"@type\":\"ReadAction\",\"target\":\"", "/\"},\"about\":{\"@id\":\"", "/#/schema/Organization\"}},{\"@type\":\"Organization\",\"@id\":\"", "/#/schema/Organization\",\"name\":\"I Will Teach You To Be Rich\",\"url\":\"", "/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"", "/wp-content/uploads/2022/11/cropped-favicon-dark-1.png\",\"contentUrl\":\"", "/wp-content/uploads/2022/11/cropped-favicon-dark-1.png\",\"width\":512,\"height\":512,\"contentSize\":\"5295\"}}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
