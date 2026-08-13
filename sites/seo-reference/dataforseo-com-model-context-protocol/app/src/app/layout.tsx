import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "DataForSEO Model Context Protocol – DataForSEO",
  "description": "MCP is what you need to turn DataForSEO APIs into AI-driven intelligent SEO applications.",
  "robots": "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  "alternates": {
    "canonical": "/model-context-protocol"
  },
  "openGraph": {
    "title": "DataForSEO Model Context Protocol – DataForSEO",
    "description": "MCP is what you need to turn DataForSEO APIs into AI-driven intelligent SEO applications.",
    "type": "article",
    "siteName": "DataForSEO",
    "url": "/model-context-protocol"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "DataForSEO Model Context Protocol – DataForSEO",
    "description": "MCP is what you need to turn DataForSEO APIs into AI-driven intelligent SEO applications."
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
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Place\",\"@id\":\"", "/#place\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Vesiv\\u00e4rava tn 50-201, Kesklinna linnaosa\",\"addressLocality\":\"Tallinn,\",\"addressRegion\":\"Harju maakond\",\"postalCode\":\"10152\",\"addressCountry\":\"Estonia\"}},{\"@type\":[\"LegalService\",\"Organization\"],\"@id\":\"", "/#organization\",\"name\":\"DATAFORSEO\",\"url\":\"", "\",\"email\":\"info@dataforseo.com\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Vesiv\\u00e4rava tn 50-201, Kesklinna linnaosa\",\"addressLocality\":\"Tallinn,\",\"addressRegion\":\"Harju maakond\",\"postalCode\":\"10152\",\"addressCountry\":\"Estonia\"},\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"", "/#logo\",\"url\":\"", "/wp-content/uploads/2016/11/logo_data_for_seo_429.png\",\"contentUrl\":\"", "/wp-content/uploads/2016/11/logo_data_for_seo_429.png\",\"caption\":\"DATAFORSEO\",\"inLanguage\":\"en-US\",\"width\":\"429\",\"height\":\"80\"},\"priceRange\":\"$$$\",\"openingHours\":[\"Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday 09:00-17:00\"],\"location\":{\"@id\":\"", "/#place\"},\"image\":{\"@id\":\"", "/#logo\"},\"telephone\":\"+3726027642\"},{\"@type\":\"WebSite\",\"@id\":\"", "/#website\",\"url\":\"", "\",\"name\":\"DATAFORSEO\",\"publisher\":{\"@id\":\"", "/#organization\"},\"inLanguage\":\"en-US\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"", "/model-context-protocol#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":\"1\",\"item\":{\"@id\":\"", "/\",\"name\":\"DATAFORSEO\"}},{\"@type\":\"ListItem\",\"position\":\"2\",\"item\":{\"@id\":\"", "/model-context-protocol\",\"name\":\"DataForSEO Model Context Protocol\"}}]},{\"@type\":\"WebPage\",\"@id\":\"", "/model-context-protocol#webpage\",\"url\":\"", "/model-context-protocol\",\"name\":\"DataForSEO Model Context Protocol &ndash; DataForSEO\",\"datePublished\":\"2025-05-21T11:33:11+03:00\",\"dateModified\":\"2026-08-12T18:34:41+03:00\",\"isPartOf\":{\"@id\":\"", "/#website\"},\"inLanguage\":\"en-US\",\"breadcrumb\":{\"@id\":\"", "/model-context-protocol#breadcrumb\"}},{\"@type\":\"Person\",\"@id\":\"", "/model-context-protocol#author\",\"name\":\"Viktoriia Churbanova\",\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://secure.gravatar.com/avatar/ba5bed13fe66e5365d2552a9f198663c6cc7283c08a01e8f5d57842f95c95b38?s=96&amp;d=retro&amp;r=g\",\"url\":\"https://secure.gravatar.com/avatar/ba5bed13fe66e5365d2552a9f198663c6cc7283c08a01e8f5d57842f95c95b38?s=96&amp;d=retro&amp;r=g\",\"caption\":\"Viktoriia Churbanova\",\"inLanguage\":\"en-US\"},\"worksFor\":{\"@id\":\"", "/#organization\"}},{\"headline\":\"DataForSEO Model Context Protocol &ndash; DataForSEO\",\"description\":\"MCP is what you need to turn DataForSEO APIs into AI-driven intelligent SEO applications.\",\"datePublished\":\"2025-05-21T11:33:11+03:00\",\"dateModified\":\"2026-08-12T18:34:41+03:00\",\"author\":{\"@id\":\"", "/model-context-protocol#author\",\"name\":\"Viktoriia Churbanova\"},\"@type\":\"Article\",\"name\":\"DataForSEO Model Context Protocol &ndash; DataForSEO\",\"@id\":\"", "/model-context-protocol#schema-1639691\",\"isPartOf\":{\"@id\":\"", "/model-context-protocol#webpage\"},\"publisher\":{\"@id\":\"", "/#organization\"},\"inLanguage\":\"en-US\",\"mainEntityOfPage\":{\"@id\":\"", "/model-context-protocol#webpage\"}}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="min-h-screen block text-foreground [font-family:Raleway,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Roboto,_'Helvetica_Neue',_sans-serif] text-base font-normal not-italic leading-[1.625rem] tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
