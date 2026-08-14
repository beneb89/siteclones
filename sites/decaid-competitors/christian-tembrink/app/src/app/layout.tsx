import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "KI Speaker & KI Vorträge für Unternehmen | Christian Tembrink",
  "description": "KI Speaker für packende Keynotes & KI Vorträge für Events & Führungsteams. Praxisnah, inspirierend - Jetzt Termin anfragen.",
  "openGraph": {
    "images": [
      "https://christian-tembrink.com/-_-/res/2eff7021-b41e-4941-b3a0-098a98704384/images/files/2eff7021-b41e-4941-b3a0-098a98704384/11f5fa0c-aacf-4eeb-8e66-edcf86b40aee/1200-1562/aca788a0294c89345bdc54d5f64ec64ae36180b0"
    ]
  },
  "icons": {
    "shortcut": [
      {
        "url": "/assets/cloned/images/59d53440684d.ico",
        "type": "image/x-icon"
      }
    ],
    "icon": [
      {
        "url": "/assets/cloned/images/59d53440684d.ico",
        "type": "image/x-icon"
      },
      {
        "url": "/assets/cloned/images/aa9d9d4ccb35.png",
        "type": "image/png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/062273ce98d1.png",
        "type": "image/png",
        "sizes": "192x192"
      },
      {
        "url": "/assets/cloned/images/57f077d21434.png",
        "type": "image/png",
        "sizes": "16x16"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/f63467fcbd9a.png",
        "type": "image/png",
        "sizes": "180x180"
      }
    ]
  },
  "manifest": "/assets/cloned/manifest/6fa50e99dd46.json"
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
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"Köln\",\"streetAddress\":\"Belvederestraße 40\",\"addressRegion\":null},\"logo\":\"/-_-/resources/images/files/2eff7021-b41e-4941-b3a0-098a98704384/adbf8105-71a5-4ffa-ae93-1036e4d30993?o=rs:fill:312:324:1:1/g:sm/\",\"url\":\"https://christian-tembrink.com\",\"longitude\":6.8769865,\"latitude\":50.9418576,\"name\":\"Christian Tembrink KI Workshops\",\"sameAs\":[\"\",\"\",\"\",\"\",\"\",\"\",\"\"],\"openingHours\":{\"weekDays\":[\"Mo 07:00-18:00\",\"Tu 07:00-18:00\",\"We 07:00-18:00\",\"Th 07:00-18:00\",\"Fr 07:00-18:00\",\"Sa \",\"Su \"],\"timeFormat\":\"24\"},\"email\":\"hallo@christian-tembrink.com\",\"founder\":\"Christian Tembrink\"}" }}
        />
      </head>
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
