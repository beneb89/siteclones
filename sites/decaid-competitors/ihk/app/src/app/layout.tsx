import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "⁣Startseite - IHK Köln",
  "keywords": [
    "Startseite"
  ],
  "robots": "index,follow",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Startseite",
    "type": "article",
    "siteName": "IHK Köln",
    "url": "/",
    "images": [
      "https://www.ihk.de/blueprint/servlet/resource/blob/5448874/8955c90bc892130b4bb51e8a79c85e3d/logo-ihk-koeln-social-media-data.jpg"
    ]
  },
  "icons": {
    "shortcut": [
      {
        "url": "/assets/cloned/images/866adfee81f0.ico",
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
    <html lang={"de"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\"@context\" : \"https://schema.org\",\n\"@type\" : \"Organization\",\n\"address\" : {\n\"@type\" : \"PostalAddress\",\n\"addressLocality\" : \"Köln\",\n\"alternateName\" : \"IHK\",\n\"email\" : \"service@koeln.ihk.de\",\n\"name\" : \"Industrie- und Handelskammer zu Köln\",\n\"postalCode\" : \"50667\",\n\"streetAddress\" : \"Unter Sachsenhausen 5–7<br>(Eingang: Komödienstraße 18–24)\"\n},\n\"alternateName\" : \"IHK\",\n\"email\" : \"service@koeln.ihk.de\",\n\"name\" : \"Industrie- und Handelskammer zu Köln\",\n\"sameAs\" : [ \"https://www.youtube.com/user/IHKKOELN\", \"https://de.linkedin.com/company/industrie-und-handelskammer-zu-koeln\", \"https://www.facebook.com/ihkkoeln\", \"https://www.instagram.com/ihkkoeln/\" ],\n\"telephone\" : \"0221 1640-0\"\n}" }}
        />
      </head>
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
