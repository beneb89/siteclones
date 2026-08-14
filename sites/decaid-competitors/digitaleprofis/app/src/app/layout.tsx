import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "KI verstehen. Sicher anwenden. | Digitale Profis",
  "description": "KI verstehen, sicher anwenden und jede Woche besser werden – mit verständlichen Artikeln und aktuellen KI-News von Johannes und Timothy.",
  "robots": "max-image-preview:large",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "KI verstehen. Sicher anwenden. | Digitale Profis",
    "description": "KI verstehen, sicher anwenden und jede Woche besser werden – mit verständlichen Artikeln und aktuellen KI-News von Johannes und Timothy.",
    "type": "website",
    "siteName": "Digitale Profis",
    "url": "/"
  },
  "twitter": {
    "card": "summary",
    "title": "KI verstehen. Sicher anwenden. | Digitale Profis",
    "description": "KI verstehen, sicher anwenden und jede Woche besser werden – mit verständlichen Artikeln und aktuellen KI-News von Johannes und Timothy."
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/33e7777be7ca.png",
        "type": "image/png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/svg/e26b60d3b1e3.svg",
        "type": "image/svg+xml",
        "sizes": "any"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/25052793fd9a.png",
        "sizes": "180x180"
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
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"WebSite\",\"name\":\"KI verstehen. Sicher anwenden. | Digitale Profis\",\"url\":\"", "/\",\"description\":\"KI verstehen, sicher anwenden und jede Woche besser werden – mit verständlichen Artikeln und aktuellen KI-News von Johannes und Timothy.\",\"publisher\":{\"@type\":\"Organization\",\"@id\":\"", "/#organization\",\"name\":\"Digitale Profis\",\"url\":\"", "/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"", "/wp-content/themes/dp-theme/assets/images/apple-touch-icon.png\"}}}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
