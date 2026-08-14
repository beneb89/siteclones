import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Fraunhofer-Allianz Big Data und Künstliche Intelligenz",
  "description": "KI-Transformation für Unternehmen: Von Einstieg & Strategie über Entwicklung bis zur sicheren Umsetzung erfolgreicher KI-Anwendungen.",
  "keywords": [
    "Data Science",
    "Data Scientist",
    "Machine Learning",
    "Fraunhofer Gesellschaft",
    "Künstliche Intelligenz",
    "Fraunhofer",
    "Maschinelles Lernen",
    "Fraunhofer Institut"
  ],
  "robots": "noodp,noydir,index,follow",
  "openGraph": {
    "title": "Fraunhofer-Allianz Big Data und Künstliche Intelligenz",
    "description": "KI-Transformation für Unternehmen: Von Einstieg & Strategie über Entwicklung bis zur sicheren Umsetzung erfolgreicher KI-Anwendungen.",
    "type": "website",
    "url": "/de.html"
  },
  "icons": {
    "shortcut": [
      {
        "url": "/assets/cloned/images/d931c17b0899.ico",
        "type": "image/x-icon"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/9ad6ceb26bd9.png",
        "sizes": "180x180"
      }
    ],
    "icon": [
      {
        "url": "/assets/cloned/images/baeb086ac68e.png",
        "type": "image/png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/f2b8d06074c1.png",
        "type": "image/png",
        "sizes": "96x96"
      },
      {
        "url": "/assets/cloned/svg/ff2b1c9fa4b0.svg",
        "type": "image/svg+xml",
        "sizes": "any"
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
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
