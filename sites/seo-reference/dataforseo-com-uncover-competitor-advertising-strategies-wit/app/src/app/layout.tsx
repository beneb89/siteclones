import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Uncover Competitor Advertising Strategies with Google Ads Transparency and APIs – DataForSEO",
  "description": "Keeping an eye on competitors in a sphere like online advertising is vital for success. Analyzing competitors’ ads and how they are displayed in Google SERPs",
  "robots": "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:standard",
  "alternates": {
    "canonical": "/blog/uncover-competitor-advertising-strategies-with-google-ads-transparency-and-apis"
  },
  "openGraph": {
    "title": "Uncover Competitor Advertising Strategies with Google Ads Transparency and APIs – DataForSEO",
    "description": "Keeping an eye on competitors in a sphere like online advertising is vital for success. Analyzing competitors’ ads and how they are displayed in Google SERPs",
    "type": "article",
    "siteName": "DataForSEO",
    "url": "/blog/uncover-competitor-advertising-strategies-with-google-ads-transparency-and-apis",
    "images": [
      "https://dataforseo.com/wp-content/uploads/2024/12/Ads-Transparency-cover.webp"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Uncover Competitor Advertising Strategies with Google Ads Transparency and APIs – DataForSEO",
    "description": "Keeping an eye on competitors in a sphere like online advertising is vital for success. Analyzing competitors’ ads and how they are displayed in Google SERPs",
    "images": [
      "https://dataforseo.com/wp-content/uploads/2024/12/Ads-Transparency-cover.webp"
    ]
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
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Place\",\"@id\":\"", "/#place\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Vesiv\\u00e4rava tn 50-201, Kesklinna linnaosa\",\"addressLocality\":\"Tallinn,\",\"addressRegion\":\"Harju maakond\",\"postalCode\":\"10152\",\"addressCountry\":\"Estonia\"}},{\"@type\":[\"LegalService\",\"Organization\"],\"@id\":\"", "/#organization\",\"name\":\"DATAFORSEO\",\"url\":\"", "\",\"email\":\"info@dataforseo.com\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Vesiv\\u00e4rava tn 50-201, Kesklinna linnaosa\",\"addressLocality\":\"Tallinn,\",\"addressRegion\":\"Harju maakond\",\"postalCode\":\"10152\",\"addressCountry\":\"Estonia\"},\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"", "/#logo\",\"url\":\"", "/wp-content/uploads/2016/11/logo_data_for_seo_429.png\",\"contentUrl\":\"", "/wp-content/uploads/2016/11/logo_data_for_seo_429.png\",\"caption\":\"DATAFORSEO\",\"inLanguage\":\"en-US\",\"width\":\"429\",\"height\":\"80\"},\"priceRange\":\"$$$\",\"openingHours\":[\"Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday 09:00-17:00\"],\"location\":{\"@id\":\"", "/#place\"},\"image\":{\"@id\":\"", "/#logo\"},\"telephone\":\"+3726027642\"},{\"@type\":\"WebSite\",\"@id\":\"", "/#website\",\"url\":\"", "\",\"name\":\"DATAFORSEO\",\"publisher\":{\"@id\":\"", "/#organization\"},\"inLanguage\":\"en-US\"},{\"@type\":\"ImageObject\",\"@id\":\"", "/wp-content/uploads/2024/12/Ads-Transparency-cover.webp\",\"url\":\"", "/wp-content/uploads/2024/12/Ads-Transparency-cover.webp\",\"width\":\"1920\",\"height\":\"1080\",\"caption\":\"Ads-Transparency-cover\",\"inLanguage\":\"en-US\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"", "/blog/uncover-competitor-advertising-strategies-with-google-ads-transparency-and-apis#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":\"1\",\"item\":{\"@id\":\"", "/\",\"name\":\"DATAFORSEO\"}},{\"@type\":\"ListItem\",\"position\":\"2\",\"item\":{\"@id\":\"", "/blog/category/use-cases\",\"name\":\"Use Cases\"}},{\"@type\":\"ListItem\",\"position\":\"3\",\"item\":{\"@id\":\"", "/blog/uncover-competitor-advertising-strategies-with-google-ads-transparency-and-apis\",\"name\":\"Uncover Competitor Advertising Strategies with Google Ads Transparency and APIs\"}}]},{\"@type\":\"WebPage\",\"@id\":\"", "/blog/uncover-competitor-advertising-strategies-with-google-ads-transparency-and-apis#webpage\",\"url\":\"", "/blog/uncover-competitor-advertising-strategies-with-google-ads-transparency-and-apis\",\"name\":\"Uncover Competitor Advertising Strategies with Google Ads Transparency and APIs &ndash; DataForSEO\",\"datePublished\":\"2024-12-23T21:00:00+03:00\",\"dateModified\":\"2026-04-28T18:37:15+03:00\",\"isPartOf\":{\"@id\":\"", "/#website\"},\"primaryImageOfPage\":{\"@id\":\"", "/wp-content/uploads/2024/12/Ads-Transparency-cover.webp\"},\"inLanguage\":\"en-US\",\"breadcrumb\":{\"@id\":\"", "/blog/uncover-competitor-advertising-strategies-with-google-ads-transparency-and-apis#breadcrumb\"}},{\"@type\":\"Person\",\"@id\":\"", "/blog/uncover-competitor-advertising-strategies-with-google-ads-transparency-and-apis#author\",\"name\":\"Anatolii\",\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://secure.gravatar.com/avatar/bb036f6da65d7577057b1b9070acbbdc266eb9f22abc3b6d2a37ac85455a9d11?s=96&amp;d=retro&amp;r=g\",\"url\":\"https://secure.gravatar.com/avatar/bb036f6da65d7577057b1b9070acbbdc266eb9f22abc3b6d2a37ac85455a9d11?s=96&amp;d=retro&amp;r=g\",\"caption\":\"Anatolii\",\"inLanguage\":\"en-US\"},\"worksFor\":{\"@id\":\"", "/#organization\"}},{\"@type\":\"BlogPosting\",\"headline\":\"Uncover Competitor Advertising Strategies with Google Ads Transparency and APIs &ndash; DataForSEO\",\"datePublished\":\"2024-12-23T21:00:00+03:00\",\"dateModified\":\"2026-04-28T18:37:15+03:00\",\"articleSection\":\"Use Cases, What's New\",\"author\":{\"@id\":\"", "/blog/uncover-competitor-advertising-strategies-with-google-ads-transparency-and-apis#author\",\"name\":\"Anatolii\"},\"publisher\":{\"@id\":\"", "/#organization\"},\"description\":\"Keeping an eye on competitors in a sphere like online advertising is vital for success. Analyzing competitors\\u2019 ads and how they are displayed in Google SERPs\",\"name\":\"Uncover Competitor Advertising Strategies with Google Ads Transparency and APIs &ndash; DataForSEO\",\"@id\":\"", "/blog/uncover-competitor-advertising-strategies-with-google-ads-transparency-and-apis#richSnippet\",\"isPartOf\":{\"@id\":\"", "/blog/uncover-competitor-advertising-strategies-with-google-ads-transparency-and-apis#webpage\"},\"image\":{\"@id\":\"", "/wp-content/uploads/2024/12/Ads-Transparency-cover.webp\"},\"inLanguage\":\"en-US\",\"mainEntityOfPage\":{\"@id\":\"", "/blog/uncover-competitor-advertising-strategies-with-google-ads-transparency-and-apis#webpage\"}}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="min-h-screen block text-foreground [font-family:Raleway,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Roboto,_'Helvetica_Neue',_sans-serif] text-base font-normal not-italic leading-[1.625rem] tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
