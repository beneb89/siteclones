import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "AFAIK ≙ As Far As I Know – Kai Spriestersbach über KI und Suche",
  "description": "AFAIK – As Far As I Know. Kai Spriestersbach schreibt über KI, Suchmaschinen und das, was dazwischen passiert: wissenschaftlich fundiert, journalistisch aufbereitet, verständlich erklärt.",
  "robots": "max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "AFAIK ≙ As Far As I Know – Kai Spriestersbach über KI und Suche",
    "description": "AFAIK – As Far As I Know. Kai Spriestersbach schreibt über KI, Suchmaschinen und das, was dazwischen passiert: wissenschaftlich fundiert, journalistisch aufbereitet, verständlich erklärt.",
    "type": "website",
    "url": "/",
    "images": [
      "https://www.afaik.de/wp-content/uploads/2026/06/banner.jpg"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "images": [
      "https://www.afaik.de/wp-content/uploads/2026/06/banner.jpg"
    ]
  },
  "icons": {
    "apple": [
      {
        "url": "/assets/cloned/images/d74e60f4f6fb.png",
        "sizes": "180x180"
      },
      {
        "url": "/assets/cloned/svg/d179f89faeae.svg"
      }
    ],
    "icon": [
      {
        "url": "/assets/cloned/images/5f4b654f64bf.png",
        "type": "image/png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/48b670f40b50.png",
        "type": "image/png",
        "sizes": "16x16"
      },
      {
        "url": "/assets/cloned/svg/d179f89faeae.svg",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/svg/d179f89faeae.svg",
        "sizes": "192x192"
      }
    ],
    "shortcut": [
      {
        "url": "/assets/cloned/images/0904c5c6c575.ico",
        "type": "image/x-icon"
      }
    ],
    "other": [
      {
        "url": "/assets/cloned/svg/4b057a46ab0a.svg",
        "rel": "mask-icon",
        "color": "#5bbad5"
      }
    ]
  },
  "manifest": "/assets/cloned/manifest/c97295c19fa9.webmanifest"
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1,
  "themeColor": "#ffffff"
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"de"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Was bedeutet AFAIK?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"AFAIK ist die Abkürzung für „As Far As I Know“ – auf Deutsch: „so weit ich weiß“. Der Ausdruck wird verwendet, um zu signalisieren, dass eine Aussage auf dem eigenen Wissensstand basiert, ohne Anspruch auf absolute Richtigkeit.\"}},{\"@type\":\"Question\",\"name\":\"Wie verwendet man AFAIK richtig?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"AFAIK wird meist am Anfang oder Ende eines Satzes verwendet, z. B. „AFAIK ist das Meeting um 14 Uhr“ oder „Das Projekt läuft noch, afaik.“ Es ist in Chats, E-Mails, Foren und sozialen Medien gebräuchlich und signalisiert eine gewisse Unsicherheit oder Einschränkung der eigenen Aussage.\"}},{\"@type\":\"Question\",\"name\":\"Ist AFAIK eine formelle oder informelle Abkürzung?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"AFAIK ist informell und gehört zur sogenannten Netzsprache. In geschäftlichen E-Mails oder offiziellen Dokumenten sollte man besser „meines Wissens nach“ oder „so weit ich weiß“ ausschreiben. In Slack, Teams, WhatsApp oder Foren ist die Abkürzung dagegen völlig üblich.\"}},{\"@type\":\"Question\",\"name\":\"Was ist der Unterschied zwischen AFAIK und IMHO?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Beide Abkürzungen drücken Unsicherheit oder Subjektivität aus, aber auf unterschiedliche Weise: AFAIK („As Far As I Know“) bezieht sich auf den eigenen Wissensstand — man hält etwas für faktisch richtig, kann es aber nicht garantieren. IMHO („In My Humble Opinion“) kennzeichnet dagegen eine persönliche Meinung oder Einschätzung. Kurz: AFAIK sagt „ich glaube, das stimmt“, IMHO sagt „so sehe ich das“.\"}}]}" }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"FAQPage\",\n  \"mainEntity\": [\n    {\n      \"@type\": \"Question\",\n      \"name\": \"Was bedeutet AFAIK?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"AFAIK ist die Abkürzung für „As Far As I Know“ – auf Deutsch: „so weit ich weiß“. Der Ausdruck wird verwendet, um zu signalisieren, dass eine Aussage auf dem eigenen Wissensstand basiert, ohne Anspruch auf absolute Richtigkeit.\"\n      }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"Wie verwendet man AFAIK richtig?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"AFAIK wird meist am Anfang oder Ende eines Satzes verwendet, z. B. „AFAIK ist das Meeting um 14 Uhr“ oder „Das Projekt läuft noch, afaik.“ Es ist in Chats, E-Mails, Foren und sozialen Medien gebräuchlich und signalisiert eine gewisse Unsicherheit oder Einschränkung der eigenen Aussage.\"\n      }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"Ist AFAIK eine formelle oder informelle Abkürzung?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"AFAIK ist informell und gehört zur sogenannten Netzsprache. In geschäftlichen E-Mails oder offiziellen Dokumenten sollte man besser „meines Wissens nach“ oder „so weit ich weiß“ ausschreiben. In Slack, Teams, WhatsApp oder Foren ist die Abkürzung dagegen völlig üblich.\"\n      }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"Was ist der Unterschied zwischen AFAIK und IMHO?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"Beide Abkürzungen drücken Unsicherheit oder Subjektivität aus, aber auf unterschiedliche Weise: AFAIK („As Far As I Know“) bezieht sich auf den eigenen Wissensstand — man hält etwas für faktisch richtig, kann es aber nicht garantieren. IMHO („In My Humble Opinion“) kennzeichnet dagegen eine persönliche Meinung oder Einschätzung. Kurz: AFAIK sagt „ich glaube, das stimmt“, IMHO sagt „so sehe ich das“.\"\n      }\n    }\n  ]\n}" }}
        />
        <script
          key="ditto-json-ld-2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebSite\",\"@id\":\"", "/#website\",\"url\":\"", "/\",\"description\":\"As Far As I Know\",\"inLanguage\":\"de\",\"potentialAction\":{\"@id\":\"", "/#searchaction\"},\"publisher\":{\"@id\":\"", "/#organization\"}},{\"@type\":\"SearchAction\",\"@id\":\"", "/#searchaction\",\"target\":\"", "/?s={search_term_string}\",\"query-input\":\"required name=search_term_string\"},{\"@type\":\"WebPage\",\"@id\":\"", "/#webpage\",\"url\":\"", "/\",\"inLanguage\":\"de\",\"name\":\"AFAIK ≙ As Far As I Know – Kai Spriestersbach über KI und Suche\",\"description\":\"AFAIK – As Far As I Know. Kai Spriestersbach schreibt über KI, Suchmaschinen und das, was dazwischen passiert: wissenschaftlich fundiert, journalistisch aufbereitet, verständlich erklärt.\",\"datePublished\":\"2026-03-02T12:18:33+01:00\",\"dateModified\":\"2026-06-30T22:18:09+02:00\",\"isPartOf\":{\"@id\":\"", "/#website\"},\"potentialAction\":{\"@id\":\"", "/#readaction\"},\"about\":{\"@id\":\"", "/#organization\"},\"primaryImageOfPage\":{\"@id\":\"", "/#thumbnail\"},\"image\":{\"@id\":\"", "/#thumbnail\"}},{\"@type\":\"ReadAction\",\"@id\":\"", "/#readaction\",\"target\":\"", "/\"},{\"@type\":\"Organization\",\"@id\":\"", "/#organization\",\"url\":\"", "/\"},{\"@type\":\"ImageObject\",\"@id\":\"", "/#thumbnail\",\"url\":\"", "/wp-content/uploads/2026/06/banner.jpg\",\"contentUrl\":\"", "/wp-content/uploads/2026/06/banner.jpg\",\"width\":2508,\"height\":627}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
