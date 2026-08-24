import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Neil Patel: Helping You Succeed Through Digital Marketing!",
  "description": "Master digital marketing with Neil Patel and NP Digital. Explore expert SEO advice, free AI-powered tools, and omnichannel strategies to grow your business.",
  "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  "alternates": {
    "canonical": "/",
    "languages": {
      "x-default": "https://neilpatel.com/",
      "en": "https://neilpatel.com/",
      "pt-br": "https://neilpatel.com/br/",
      "de": "https://neilpatel.com/de/",
      "es": "https://neilpatel.com/es/",
      "it": "https://neilpatel.com/it/",
      "nl": "https://neilpatel.com/nl/",
      "fr": "https://neilpatel.com/fr/"
    }
  },
  "openGraph": {
    "title": "Neil Patel: Helping You Succeed Through Digital Marketing!",
    "description": "Master digital marketing with Neil Patel and NP Digital. Explore expert SEO advice, free AI-powered tools, and omnichannel strategies to grow your business.",
    "type": "website",
    "siteName": "Neil Patel",
    "url": "/",
    "images": [
      "https://neilpatel.com/wp-content/themes/neilpatel/images/homepage-v2/npdigital-agency.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image"
  },
  "icons": {
    "shortcut": [
      {
        "url": "/assets/cloned/images/8a3d30adc2ee.ico",
        "type": "image/x-icon"
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
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"", "\\/\",\"url\":\"", "\\/\",\"name\":\"Neil Patel: Helping You Succeed Through Digital Marketing!\",\"isPartOf\":{\"@id\":\"", "\\/#website\"},\"about\":{\"@id\":\"", "\\/#organization\"},\"primaryImageOfPage\":{\"@id\":\"", "\\/#primaryimage\"},\"image\":{\"@id\":\"", "\\/#primaryimage\"},\"thumbnailUrl\":\"", "\\/wp-content\\/themes\\/neilpatel\\/images\\/homepage-v2\\/npdigital-agency.png\",\"datePublished\":\"2015-11-18T20:12:54+00:00\",\"dateModified\":\"2026-07-23T23:18:19+00:00\",\"description\":\"Master digital marketing with Neil Patel and NP Digital. Explore expert SEO advice, free AI-powered tools, and omnichannel strategies to grow your business.\",\"breadcrumb\":{\"@id\":\"", "\\/#breadcrumb\"},\"inLanguage\":\"en\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"", "\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en\",\"@id\":\"", "\\/#primaryimage\",\"url\":\"", "\\/wp-content\\/themes\\/neilpatel\\/images\\/homepage-v2\\/npdigital-agency.png\",\"contentUrl\":\"", "\\/wp-content\\/themes\\/neilpatel\\/images\\/homepage-v2\\/npdigital-agency.png\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"", "\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\"}]},{\"@type\":\"WebSite\",\"@id\":\"", "\\/#website\",\"url\":\"", "\\/\",\"name\":\"Neil Patel\",\"description\":\"\",\"publisher\":{\"@id\":\"", "\\/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"", "\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en\"},{\"@type\":\"Organization\",\"@id\":\"", "\\/#organization\",\"name\":\"Neil Patel\",\"url\":\"", "\\/\",\"logo\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en\",\"@id\":\"", "\\/#\\/schema\\/logo\\/image\\/\",\"url\":\"", "\\/wp-content\\/uploads\\/2022\\/07\\/neilpatel.png\",\"contentUrl\":\"", "\\/wp-content\\/uploads\\/2022\\/07\\/neilpatel.png\",\"width\":570,\"height\":63,\"caption\":\"Neil Patel\"},\"image\":{\"@id\":\"", "\\/#\\/schema\\/logo\\/image\\/\"}}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
