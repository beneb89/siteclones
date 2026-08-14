import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Social Media Experte & Keynote Speaker ➡️ Felix Beilharz (Köln)",
  "description": "Keynote Speaker ✔️ Trainer ✔️ 10-facher Buchautor ✔️ Lehrbeauftragter ✔️ Online-Marketing (Experte für Social Media Marketing und SEO)",
  "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Social Media Experte & Keynote Speaker ➡️ Felix Beilharz (Köln)",
    "description": "Keynote Speaker ✔️ Trainer ✔️ 10-facher Buchautor ✔️ Lehrbeauftragter ✔️ Online-Marketing (Experte für Social Media Marketing und SEO)",
    "type": "website",
    "siteName": "FelixBeilharz.de",
    "url": "/",
    "images": [
      "https://felixbeilharz.de/wp-content/uploads/2019/08/og2019.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "site": "@beilharz",
    "images": [
      "https://felixbeilharz.de/wp-content/uploads/2019/08/og2019.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/219702c7e833.png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/219702c7e833.png",
        "sizes": "192x192"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/219702c7e833.png"
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
    <html lang={"de"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"", "\\/\",\"url\":\"", "\\/\",\"name\":\"Social Media Experte & Keynote Speaker ➡️ Felix Beilharz (Köln)\",\"isPartOf\":{\"@id\":\"", "\\/#website\"},\"about\":{\"@id\":\"", "\\/#\\/schema\\/person\\/6a14f34e1d546ba58f68b07acc2856bb\"},\"primaryImageOfPage\":{\"@id\":\"", "\\/#primaryimage\"},\"image\":{\"@id\":\"", "\\/#primaryimage\"},\"thumbnailUrl\":\"", "\\/wp-content\\/uploads\\/2021\\/05\\/felixbeilharz_mit_Outline.png\",\"datePublished\":\"2015-04-25T15:10:09+00:00\",\"dateModified\":\"2026-04-16T15:49:23+00:00\",\"description\":\"Keynote Speaker ✔️ Trainer ✔️ 10-facher Buchautor ✔️ Lehrbeauftragter ✔️ Online-Marketing (Experte für Social Media Marketing und SEO)\",\"breadcrumb\":{\"@id\":\"", "\\/#breadcrumb\"},\"inLanguage\":\"de\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"", "\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"de\",\"@id\":\"", "\\/#primaryimage\",\"url\":\"", "\\/wp-content\\/uploads\\/2021\\/05\\/felixbeilharz_mit_Outline.png\",\"contentUrl\":\"", "\\/wp-content\\/uploads\\/2021\\/05\\/felixbeilharz_mit_Outline.png\",\"width\":620,\"height\":640},{\"@type\":\"BreadcrumbList\",\"@id\":\"", "\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Startseite\"}]},{\"@type\":\"WebSite\",\"@id\":\"", "\\/#website\",\"url\":\"", "\\/\",\"name\":\"Felix Beilharz\",\"description\":\"\",\"publisher\":{\"@id\":\"", "\\/#\\/schema\\/person\\/6a14f34e1d546ba58f68b07acc2856bb\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"", "\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"de\"},{\"@type\":[\"Person\",\"Organization\"],\"@id\":\"", "\\/#\\/schema\\/person\\/6a14f34e1d546ba58f68b07acc2856bb\",\"name\":\"Felix Beilharz\",\"image\":{\"@type\":\"ImageObject\",\"inLanguage\":\"de\",\"@id\":\"", "\\/wp-content\\/uploads\\/2019\\/07\\/felix-speaker.jpg\",\"url\":\"", "\\/wp-content\\/uploads\\/2019\\/07\\/felix-speaker.jpg\",\"contentUrl\":\"", "\\/wp-content\\/uploads\\/2019\\/07\\/felix-speaker.jpg\",\"width\":667,\"height\":800,\"caption\":\"Felix Beilharz\"},\"logo\":{\"@id\":\"", "\\/wp-content\\/uploads\\/2019\\/07\\/felix-speaker.jpg\"},\"description\":\"Felix Beilharz ist \\\"einer der führenden Berater für Online- und Social Media Marketing\\\" (RTL) und \\\"gehört zu den besten Rednern Deutschlands\\\" (WAZ). Seit 2002 ist Felix im Online-Marketing unterwegs. Er hat Vorträge, Seminare und Workshops in 18 Ländern gehalten, 11 Bücher geschrieben und zählt 22 der 100 umsatzstärksten Unternehmen Deutschlands zu seinen Kunden. Die Influencer-Analyseplattform Favikon rankt ihn als den einflussreichsten deutschen Experten im Digitalen Marketing. Über 110.000 Menschen folgen ihm in den sozialen Medien. Felix unterrichtet an mehreren Hochschulen in Deutschland und der Schweiz und ist regelmäßig als Experte in TV, Radio und Print-Medien zu Gast.\",\"sameAs\":[\"", "\",\"https:\\/\\/urlgeni.us\\/facebook\\/felixbeilharz\",\"https:\\/\\/urlgeni.us\\/instagram\\/felixbeilharz\",\"https:\\/\\/urlgeni.us\\/linkedin\\/felixbeilharz\",\"https:\\/\\/www.pinterest.de\\/marketier\\/\",\"https:\\/\\/x.com\\/https:\\/\\/urlgeni.us\\/twitter\\/beilharz\",\"https:\\/\\/www.google.com\\/search?q=knowledge+graph+search+api&kponly&kgmid=\\/g\\/1hhjslj3b\",\"https:\\/\\/urlgeni.us\\/youtube\\/FelixBeilharzde\",\"https:\\/\\/de.wikipedia.org\\/wiki\\/Felix_Beilharz\"]}]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org/\", \"@type\": \"Product\", \"name\": \"Felix Beilharz\", \"description\": \"Keynote Speaker, Autor, geh\\u00f6rt zu den besten Rednern Deutschlands(WAZ)\", \"image\": \"https://images.provenexpert.com/17/af/2d6dd4333be5d4f1eab24e19dbb5/felixbeilharz_full_1557993986.jpg\", \"aggregateRating\":{\"@type\": \"AggregateRating\", \"ratingCount\": 2075, \"reviewCount\": 2075, \"ratingValue\": 4.94, \"bestRating\": 5, \"worstRating\": 1}}" }}
        />
      </head>
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
