import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Framer Blog: 13 best consulting website design examples",
  "description": "Great consulting websites combine eye-catching design, clear messaging, sharp writing, and seamless functionality. Here are 13 examples to inspire your design.",
  "robots": "max-image-preview:large",
  "alternates": {
    "canonical": "/blog/13-best-consulting-website-design-examples/"
  },
  "openGraph": {
    "title": "Framer Blog: 13 best consulting website design examples",
    "description": "Great consulting websites combine eye-catching design, clear messaging, sharp writing, and seamless functionality. Here are 13 examples to inspire your design.",
    "type": "website",
    "siteName": "Framer",
    "url": "/blog/13-best-consulting-website-design-examples/",
    "images": [
      "https://framerusercontent.com/images/DstEsvgUc2p9s2l6M5tSp8cN8vo.jpg?width=4854&height=3240"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Framer Blog: 13 best consulting website design examples",
    "description": "Great consulting websites combine eye-catching design, clear messaging, sharp writing, and seamless functionality. Here are 13 examples to inspire your design.",
    "images": [
      "https://framerusercontent.com/images/DstEsvgUc2p9s2l6M5tSp8cN8vo.jpg?width=4854&height=3240"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/f57b6f8acc46.png",
        "media": "(prefers-color-scheme: light)"
      },
      {
        "url": "/assets/cloned/images/f91b4b3d5836.png",
        "media": "(prefers-color-scheme: dark)"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/dc2c288c9888.png"
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
          dangerouslySetInnerHTML={{ __html: ["[{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"BlogPosting\",\n\n  \"mainEntityOfPage\": {\n    \"@type\": \"WebPage\",\n    \"@id\": \"", "/blog/13-best-consulting-website-design-examples/\"\n  },\n\n  \"headline\": \"13 best consulting website design examples\",\n  \"alternativeHeadline\": \"13 best consulting website design examples\",\n  \"description\": \"Great consulting websites combine eye-catching design, clear messaging, sharp writing, and seamless functionality. Here are 13 examples to inspire your design.\",\n  \"url\": \"", "/blog/13-best-consulting-website-design-examples/\",\n  \"inLanguage\": \"en\",\n  \"isAccessibleForFree\": true,\n\n  \"image\": [\n    {\n      \"@type\": \"ImageObject\",\n      \"url\": \"https://framerusercontent.com/images/DstEsvgUc2p9s2l6M5tSp8cN8vo.jpg?width=4854&height=3240\"\n    }\n  ],\n\n  \"author\": {\n    \"@type\": \"Person\",\n    \"name\": \"James Pastan\",\n    \"image\": \"https://framerusercontent.com/images/LNJ8cmoS3J8Whw4st8gVgnVW8.jpg?width=1774&height=1645\",\n    \"description\": \"\",\n    \"sameAs\": [\n      \"https://x.com/@jamespastan\"\n    ]\n  },\n\n  \"publisher\": {\n    \"@type\": \"Organization\",\n    \"name\": \"Framer\",\n    \"url\": \"", "\",\n    \"logo\": {\n      \"@type\": \"ImageObject\",\n      \"url\": \"https://framerusercontent.com/images/s8byoJvwTkn7Gm2jKWNdTPv9F8Q.svg\"\n    },\n     \"sameAs\": [\n      \"https://x.com/framer\",\n      \"https://instagram.com/framer\",\n      \"https://facebook.com/framerjs\",\n      \"https://linkedin.com/company/framer/\",\n      \"https://github.com/framer\"\n    ]\n  },\n\n  \"datePublished\": \"2025-11-20T00:00:00.000Z\",\n  \"dateModified\": \"2026-08-03T07:36:39.685Z\",\n  \"articleSection\": \"Inspiration\"\n},\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"BreadcrumbList\",\n  \"itemListElement\": [\n    {\n      \"@type\": \"ListItem\",\n      \"position\": 1,\n      \"name\": \"Home\",\n      \"item\": \"", "\"\n    },\n    {\n      \"@type\": \"ListItem\",\n      \"position\": 2,\n      \"name\": \"Blog\",\n      \"item\": \"", "/blog/\"\n    },\n    {\n      \"@type\": \"ListItem\",\n      \"position\": 3,\n      \"name\": \"Inspiration\",\n      \"item\": \"", "/blog/inspiration\"\n    },\n    {\n      \"@type\": \"ListItem\",\n      \"position\": 4,\n      \"name\": \"13 best consulting website design examples\",\n      \"item\": \"", "/blog/13-best-consulting-website-design-examples/\"\n    }\n  ]\n}]"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"Organization\",\n      \"image\": \"https://framerusercontent.com/images/b2hliN8q6RI1alDDMojdsEiXDU.png\",\n      \"url\": \"", "\",\n      \"sameAs\": [\"https://twitter.com/framer\", \"", "munity/c/support/\"],\n      \"logo\": \"https://framerusercontent.com/images/s8byoJvwTkn7Gm2jKWNdTPv9F8Q.svg\",\n      \"name\": \"Framer\",\n      \"legalName\": \"Framer B.V.\",\n      \"description\": \"The web builder for stunning sites. Design and publish modern sites at any scale.\",\n      \"email\": \"support@framer.com\",\n      \"vatID\": \"NL853695386B01\"\n    }"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="block text-foreground [font-family:sans-serif] text-xs font-normal not-italic leading-3.5 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-foreground">
        {children}
      </body>
    </html>
  );
}
