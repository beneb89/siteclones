import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "DataForSEO product pricing – DataForSEO",
  "description": "DataForSEO Product Pricing - Pay-as-you-go",
  "keywords": [
    "eretur"
  ],
  "robots": "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  "alternates": {
    "canonical": "/pricing-list"
  },
  "openGraph": {
    "title": "DataForSEO product pricing – DataForSEO",
    "description": "DataForSEO Product Pricing - Pay-as-you-go",
    "type": "article",
    "siteName": "DataForSEO",
    "url": "/pricing-list"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "DataForSEO product pricing – DataForSEO",
    "description": "DataForSEO Product Pricing - Pay-as-you-go"
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
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Place\",\"@id\":\"", "/#place\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Vesiv\\u00e4rava tn 50-201, Kesklinna linnaosa\",\"addressLocality\":\"Tallinn,\",\"addressRegion\":\"Harju maakond\",\"postalCode\":\"10152\",\"addressCountry\":\"Estonia\"}},{\"@type\":[\"LegalService\",\"Organization\"],\"@id\":\"", "/#organization\",\"name\":\"DATAFORSEO\",\"url\":\"", "\",\"email\":\"info@dataforseo.com\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Vesiv\\u00e4rava tn 50-201, Kesklinna linnaosa\",\"addressLocality\":\"Tallinn,\",\"addressRegion\":\"Harju maakond\",\"postalCode\":\"10152\",\"addressCountry\":\"Estonia\"},\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"", "/#logo\",\"url\":\"", "/wp-content/uploads/2016/11/logo_data_for_seo_429.png\",\"contentUrl\":\"", "/wp-content/uploads/2016/11/logo_data_for_seo_429.png\",\"caption\":\"DATAFORSEO\",\"inLanguage\":\"en-US\",\"width\":\"429\",\"height\":\"80\"},\"priceRange\":\"$$$\",\"openingHours\":[\"Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday 09:00-17:00\"],\"location\":{\"@id\":\"", "/#place\"},\"image\":{\"@id\":\"", "/#logo\"},\"telephone\":\"+3726027642\"},{\"@type\":\"WebSite\",\"@id\":\"", "/#website\",\"url\":\"", "\",\"name\":\"DATAFORSEO\",\"publisher\":{\"@id\":\"", "/#organization\"},\"inLanguage\":\"en-US\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"", "/pricing-list#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":\"1\",\"item\":{\"@id\":\"", "/\",\"name\":\"DATAFORSEO\"}},{\"@type\":\"ListItem\",\"position\":\"2\",\"item\":{\"@id\":\"", "/pricing-list\",\"name\":\"DataForSEO product pricing\"}}]},{\"@type\":\"WebPage\",\"@id\":\"", "/pricing-list#webpage\",\"url\":\"", "/pricing-list\",\"name\":\"DataForSEO product pricing &ndash; DataForSEO\",\"datePublished\":\"2022-01-31T13:06:03+03:00\",\"dateModified\":\"2026-02-03T16:51:51+03:00\",\"isPartOf\":{\"@id\":\"", "/#website\"},\"inLanguage\":\"en-US\",\"breadcrumb\":{\"@id\":\"", "/pricing-list#breadcrumb\"}},{\"@type\":\"Person\",\"@id\":\"", "/pricing-list#author\",\"name\":\"Viktoriia Churbanova\",\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://secure.gravatar.com/avatar/ba5bed13fe66e5365d2552a9f198663c6cc7283c08a01e8f5d57842f95c95b38?s=96&amp;d=retro&amp;r=g\",\"url\":\"https://secure.gravatar.com/avatar/ba5bed13fe66e5365d2552a9f198663c6cc7283c08a01e8f5d57842f95c95b38?s=96&amp;d=retro&amp;r=g\",\"caption\":\"Viktoriia Churbanova\",\"inLanguage\":\"en-US\"},\"worksFor\":{\"@id\":\"", "/#organization\"}},{\"@type\":\"Article\",\"headline\":\"DataForSEO product pricing &ndash; DataForSEO\",\"datePublished\":\"2022-01-31T13:06:03+03:00\",\"dateModified\":\"2026-02-03T16:51:51+03:00\",\"author\":{\"@id\":\"", "/pricing-list#author\",\"name\":\"Viktoriia Churbanova\"},\"publisher\":{\"@id\":\"", "/#organization\"},\"description\":\"DataForSEO Product Pricing - Pay-as-you-go\",\"name\":\"DataForSEO product pricing &ndash; DataForSEO\",\"@id\":\"", "/pricing-list#richSnippet\",\"isPartOf\":{\"@id\":\"", "/pricing-list#webpage\"},\"inLanguage\":\"en-US\",\"mainEntityOfPage\":{\"@id\":\"", "/pricing-list#webpage\"}}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="box-content block overflow-x-hidden overflow-y-auto text-foreground [font-family:Raleway,_sans-serif] text-sm font-medium not-italic leading-[1.4375rem] tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
