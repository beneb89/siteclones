import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Guide to using Google Ads Transparency Center & Ad Library",
  "description": "Discover how to leverage the power of Google Ads Transparency Center and Ad Library with our comprehensive guide. Learn how to gain insights into your competitors' strategies, find ad creative inspiration, build a swipe file, stay ahead of trends, and more. Supercharge your advertising workflow and take your Google ads to the next level.",
  "alternates": {
    "canonical": "/post/google-ads-transparency-center"
  },
  "openGraph": {
    "title": "Guide to using Google Ads Transparency Center & Ad Library",
    "description": "Discover how to leverage the power of Google Ads Transparency Center and Ad Library with our comprehensive guide. Learn how to gain insights into your competitors' strategies, find ad creative inspiration, build a swipe file, stay ahead of trends, and more. Supercharge your advertising workflow and take your Google ads to the next level.",
    "type": "website",
    "images": [
      "https://cdn.prod.website-files.com/62a4f1b9ff17080082bbb71e/64933a828c7dd9754d2a6992_google-transparency-2.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Guide to using Google Ads Transparency Center & Ad Library",
    "description": "Discover how to leverage the power of Google Ads Transparency Center and Ad Library with our comprehensive guide. Learn how to gain insights into your competitors' strategies, find ad creative inspiration, build a swipe file, stay ahead of trends, and more. Supercharge your advertising workflow and take your Google ads to the next level.",
    "images": [
      "https://cdn.prod.website-files.com/62a4f1b9ff17080082bbb71e/64933a828c7dd9754d2a6992_google-transparency-2.png"
    ]
  },
  "icons": {
    "shortcut": [
      {
        "url": "/assets/cloned/images/be9e62e4123d.png",
        "type": "image/x-icon"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/cc22d9b2957c.png"
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
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"http://schema.org\",\"@type\":\"Product\",\"name\":\"Foreplay.Co\",\"url\":\"https://foreplay.co/\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"bestRating\":5,\"ratingValue\":4.96,\"reviewCount\":359,\"worstRating\":1}}" }}
        />
      </head>
      <body className="min-h-full block overflow-x-clip text-foreground [font-family:Inter,_sans-serif] text-base font-normal not-italic leading-6 tracking-[-0.18px] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
