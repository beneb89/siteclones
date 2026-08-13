import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "DataForSEO Labs Google API – DataForSEO",
  "description": "DataForSEO Labs API is designed to provide you with keyword research, market analysis, and competitor intelligence capabilities.",
  "keywords": [
    "eretur"
  ],
  "robots": "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  "alternates": {
    "canonical": "/pricing/dataforseo-labs/dataforseo-google-api"
  },
  "openGraph": {
    "title": "DataForSEO Labs Google API – DataForSEO",
    "description": "DataForSEO Labs API is designed to provide you with keyword research, market analysis, and competitor intelligence capabilities.",
    "type": "article",
    "siteName": "DataForSEO",
    "url": "/pricing/dataforseo-labs/dataforseo-google-api"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "DataForSEO Labs Google API – DataForSEO",
    "description": "DataForSEO Labs API is designed to provide you with keyword research, market analysis, and competitor intelligence capabilities."
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/a91eef35f11c.png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/081717a61f69.png",
        "sizes": "192x192"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/c4c7872d7f8a.png"
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
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"BreadcrumbList\",\"@id\":\"", "/pricing/dataforseo-labs/dataforseo-google-api#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":\"1\",\"item\":{\"@id\":\"", "/\",\"name\":\"DATAFORSEO\"}},{\"@type\":\"ListItem\",\"position\":\"2\",\"item\":{\"@id\":\"", "/pricing-archive\",\"name\":\"Pricing\"}},{\"@type\":\"ListItem\",\"position\":\"3\",\"item\":{\"@id\":\"", "/pricing/dataforseo-labs/dataforseo-google-api\",\"name\":\"DataForSEO Labs Google API\"}}]}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="box-content block overflow-x-hidden overflow-y-auto text-foreground [font-family:Raleway,_sans-serif] text-sm font-medium not-italic leading-[1.4375rem] tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
