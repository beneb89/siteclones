import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Ads Transparency API – DataForSEO",
  "description": "Look behind Google Ads: get data on active campaigns and advertisers",
  "keywords": [
    "eretur"
  ],
  "robots": "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  "alternates": {
    "canonical": "/apis/serp-api/ads-transparency-api"
  },
  "openGraph": {
    "title": "Ads Transparency API – DataForSEO",
    "description": "Look behind Google Ads: get data on active campaigns and advertisers",
    "type": "article",
    "siteName": "DataForSEO",
    "url": "/apis/serp-api/ads-transparency-api"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Ads Transparency API – DataForSEO",
    "description": "Look behind Google Ads: get data on active campaigns and advertisers"
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
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Place\",\"@id\":\"", "/#place\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Vesiv\\u00e4rava tn 50-201, Kesklinna linnaosa\",\"addressLocality\":\"Tallinn,\",\"addressRegion\":\"Harju maakond\",\"postalCode\":\"10152\",\"addressCountry\":\"Estonia\"}},{\"@type\":[\"LegalService\",\"Organization\"],\"@id\":\"", "/#organization\",\"name\":\"DATAFORSEO\",\"url\":\"", "\",\"email\":\"info@dataforseo.com\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Vesiv\\u00e4rava tn 50-201, Kesklinna linnaosa\",\"addressLocality\":\"Tallinn,\",\"addressRegion\":\"Harju maakond\",\"postalCode\":\"10152\",\"addressCountry\":\"Estonia\"},\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"", "/#logo\",\"url\":\"", "/wp-content/uploads/2016/11/logo_data_for_seo_429.png\",\"contentUrl\":\"", "/wp-content/uploads/2016/11/logo_data_for_seo_429.png\",\"caption\":\"DATAFORSEO\",\"inLanguage\":\"en-US\",\"width\":\"429\",\"height\":\"80\"},\"priceRange\":\"$$$\",\"openingHours\":[\"Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday 09:00-17:00\"],\"location\":{\"@id\":\"", "/#place\"},\"image\":{\"@id\":\"", "/#logo\"},\"telephone\":\"+3726027642\"},{\"@type\":\"WebSite\",\"@id\":\"", "/#website\",\"url\":\"", "\",\"name\":\"DATAFORSEO\",\"publisher\":{\"@id\":\"", "/#organization\"},\"inLanguage\":\"en-US\"},{\"@type\":\"ImageObject\",\"@id\":\"", "/wp-content/uploads/2023/04/arrow.png\",\"url\":\"", "/wp-content/uploads/2023/04/arrow.png\",\"width\":\"200\",\"height\":\"200\",\"inLanguage\":\"en-US\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"", "/apis/serp-api/ads-transparency-api#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":\"1\",\"item\":{\"@id\":\"", "/\",\"name\":\"DATAFORSEO\"}},{\"@type\":\"ListItem\",\"position\":\"2\",\"item\":{\"@id\":\"", "/apis\",\"name\":\"APIs\"}},{\"@type\":\"ListItem\",\"position\":\"3\",\"item\":{\"@id\":\"", "/apis/serp-api\",\"name\":\"SERP API\"}},{\"@type\":\"ListItem\",\"position\":\"4\",\"item\":{\"@id\":\"", "/apis/serp-api/ads-transparency-api\",\"name\":\"Ads Transparency API\"}}]},{\"@type\":\"WebPage\",\"@id\":\"", "/apis/serp-api/ads-transparency-api#webpage\",\"url\":\"", "/apis/serp-api/ads-transparency-api\",\"name\":\"Ads Transparency API &ndash; DataForSEO\",\"datePublished\":\"2024-11-28T11:18:34+03:00\",\"dateModified\":\"2025-07-10T15:22:55+03:00\",\"isPartOf\":{\"@id\":\"", "/#website\"},\"primaryImageOfPage\":{\"@id\":\"", "/wp-content/uploads/2023/04/arrow.png\"},\"inLanguage\":\"en-US\",\"breadcrumb\":{\"@id\":\"", "/apis/serp-api/ads-transparency-api#breadcrumb\"}},{\"@type\":\"Person\",\"@id\":\"", "/apis/serp-api/ads-transparency-api#author\",\"name\":\"Viktoriia Churbanova\",\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://secure.gravatar.com/avatar/ba5bed13fe66e5365d2552a9f198663c6cc7283c08a01e8f5d57842f95c95b38?s=96&amp;d=retro&amp;r=g\",\"url\":\"https://secure.gravatar.com/avatar/ba5bed13fe66e5365d2552a9f198663c6cc7283c08a01e8f5d57842f95c95b38?s=96&amp;d=retro&amp;r=g\",\"caption\":\"Viktoriia Churbanova\",\"inLanguage\":\"en-US\"},\"worksFor\":{\"@id\":\"", "/#organization\"}},{\"@type\":\"Article\",\"headline\":\"Ads Transparency API &ndash; DataForSEO\",\"datePublished\":\"2024-11-28T11:18:34+03:00\",\"dateModified\":\"2025-07-10T15:22:55+03:00\",\"author\":{\"@id\":\"", "/apis/serp-api/ads-transparency-api#author\",\"name\":\"Viktoriia Churbanova\"},\"publisher\":{\"@id\":\"", "/#organization\"},\"description\":\"Look behind Google Ads: get data on active campaigns and advertisers\",\"name\":\"Ads Transparency API &ndash; DataForSEO\",\"@id\":\"", "/apis/serp-api/ads-transparency-api#richSnippet\",\"isPartOf\":{\"@id\":\"", "/apis/serp-api/ads-transparency-api#webpage\"},\"image\":{\"@id\":\"", "/wp-content/uploads/2023/04/arrow.png\"},\"inLanguage\":\"en-US\",\"mainEntityOfPage\":{\"@id\":\"", "/apis/serp-api/ads-transparency-api#webpage\"}}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="box-content block overflow-x-hidden overflow-y-auto text-foreground [font-family:Raleway,_sans-serif] text-sm font-medium not-italic leading-[1.4375rem] tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
