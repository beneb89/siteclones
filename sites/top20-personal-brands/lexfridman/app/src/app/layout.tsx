import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Lex Fridman",
  "description": "AI researcher working on human-AI interaction, robotics, and machine learning at MIT and beyond. Host of Lex Fridman Podcast.",
  "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Lex Fridman",
    "description": "AI researcher working on human-AI interaction, robotics, and machine learning at MIT and beyond. Host of Lex Fridman Podcast.",
    "type": "website",
    "siteName": "Lex Fridman",
    "url": "/",
    "images": [
      "https://lexfridman.com/wordpress/wp-content/uploads/2019/03/lex_zoomed_out_cropped.jpg"
    ]
  },
  "twitter": {
    "card": "summary_large_image"
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/582f01a0f53d.png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/0ba5c0524c66.png",
        "sizes": "192x192"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/c984b195c9e5.png"
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
    <html lang={"en-US"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"", "\\/\",\"url\":\"", "\\/\",\"name\":\"Lex Fridman\",\"isPartOf\":{\"@id\":\"", "\\/#website\"},\"datePublished\":\"2016-12-18T22:42:13+00:00\",\"dateModified\":\"2025-09-15T15:52:46+00:00\",\"description\":\"AI researcher working on human-AI interaction, robotics, and machine learning at MIT and beyond. Host of Lex Fridman Podcast.\",\"breadcrumb\":{\"@id\":\"", "\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"", "\\/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"", "\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\"}]},{\"@type\":\"WebSite\",\"@id\":\"", "\\/#website\",\"url\":\"", "\\/\",\"name\":\"Lex Fridman\",\"description\":\"Research Scientist at MIT. Host of Lex Fridman Podcast.\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"", "\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
