import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "DataForSEO Labs API – Analyze Keywords and Competitors",
  "description": "DataForSEO Labs API is designed to provide data for keyword research, competitor intelligence and market analysis.",
  "keywords": [
    "eretur"
  ],
  "robots": "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  "alternates": {
    "canonical": "/apis/dataforseo-labs-api"
  },
  "openGraph": {
    "title": "DataForSEO Labs API – Analyze Keywords and Competitors",
    "description": "DataForSEO Labs API is designed to provide data for keyword research, competitor intelligence and market analysis.",
    "type": "article",
    "siteName": "DataForSEO",
    "url": "/apis/dataforseo-labs-api"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "DataForSEO Labs API – Analyze Keywords and Competitors",
    "description": "DataForSEO Labs API is designed to provide data for keyword research, competitor intelligence and market analysis."
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
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Place\",\"@id\":\"", "/#place\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Vesiv\\u00e4rava tn 50-201, Kesklinna linnaosa\",\"addressLocality\":\"Tallinn,\",\"addressRegion\":\"Harju maakond\",\"postalCode\":\"10152\",\"addressCountry\":\"Estonia\"}},{\"@type\":[\"LegalService\",\"Organization\"],\"@id\":\"", "/#organization\",\"name\":\"DATAFORSEO\",\"url\":\"", "\",\"email\":\"info@dataforseo.com\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Vesiv\\u00e4rava tn 50-201, Kesklinna linnaosa\",\"addressLocality\":\"Tallinn,\",\"addressRegion\":\"Harju maakond\",\"postalCode\":\"10152\",\"addressCountry\":\"Estonia\"},\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"", "/#logo\",\"url\":\"", "/wp-content/uploads/2016/11/logo_data_for_seo_429.png\",\"contentUrl\":\"", "/wp-content/uploads/2016/11/logo_data_for_seo_429.png\",\"caption\":\"DATAFORSEO\",\"inLanguage\":\"en-US\",\"width\":\"429\",\"height\":\"80\"},\"priceRange\":\"$$$\",\"openingHours\":[\"Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday 09:00-17:00\"],\"location\":{\"@id\":\"", "/#place\"},\"image\":{\"@id\":\"", "/#logo\"},\"telephone\":\"+3726027642\"},{\"@type\":\"WebSite\",\"@id\":\"", "/#website\",\"url\":\"", "\",\"name\":\"DATAFORSEO\",\"publisher\":{\"@id\":\"", "/#organization\"},\"inLanguage\":\"en-US\"},{\"@type\":\"ImageObject\",\"@id\":\"", "/wp-content/uploads/2024/06/google-ads-150.png\",\"url\":\"", "/wp-content/uploads/2024/06/google-ads-150.png\",\"width\":\"200\",\"height\":\"200\",\"inLanguage\":\"en-US\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"", "/apis/dataforseo-labs-api#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":\"1\",\"item\":{\"@id\":\"", "/\",\"name\":\"DATAFORSEO\"}},{\"@type\":\"ListItem\",\"position\":\"2\",\"item\":{\"@id\":\"", "/apis\",\"name\":\"APIs\"}},{\"@type\":\"ListItem\",\"position\":\"3\",\"item\":{\"@id\":\"", "/apis/dataforseo-labs-api\",\"name\":\"DataForSEO Labs API\"}}]},{\"@type\":\"WebPage\",\"@id\":\"", "/apis/dataforseo-labs-api#webpage\",\"url\":\"", "/apis/dataforseo-labs-api\",\"name\":\"DataForSEO Labs API \\u2013 Analyze Keywords and Competitors\",\"datePublished\":\"2020-02-26T17:47:07+03:00\",\"dateModified\":\"2026-07-07T18:14:59+03:00\",\"isPartOf\":{\"@id\":\"", "/#website\"},\"primaryImageOfPage\":{\"@id\":\"", "/wp-content/uploads/2024/06/google-ads-150.png\"},\"inLanguage\":\"en-US\",\"breadcrumb\":{\"@id\":\"", "/apis/dataforseo-labs-api#breadcrumb\"}},{\"@type\":\"SoftwareApplication\",\"name\":\"DataForSEO Labs API \\u2013 Analyze Keywords and Competitors\",\"description\":\"DataForSEO Labs API is designed to provide data for keyword research, competitor intelligence and market analysis.\",\"operatingSystem\":\"Windows, MAcOS, NIX\",\"applicationCategory\":\"DataForSEO LAbs API\",\"offers\":{\"@type\":\"Offer\",\"price\":\"50\",\"priceCurrency\":\"usd\",\"availability\":\"InStock\"},\"image\":{\"@id\":\"", "/wp-content/uploads/2024/06/google-ads-150.png\"},\"@id\":\"", "/apis/dataforseo-labs-api#schema-63798\",\"isPartOf\":{\"@id\":\"", "/apis/dataforseo-labs-api#webpage\"},\"publisher\":{\"@id\":\"", "/#organization\"},\"inLanguage\":\"en-US\",\"mainEntityOfPage\":{\"@id\":\"", "/apis/dataforseo-labs-api#webpage\"}}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="box-content block overflow-x-hidden overflow-y-auto text-foreground [font-family:Raleway,_sans-serif] text-sm font-medium not-italic leading-[1.4375rem] tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
