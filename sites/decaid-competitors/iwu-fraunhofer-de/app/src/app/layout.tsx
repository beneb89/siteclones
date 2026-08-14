import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Forschung für die Zukunft - Fraunhofer IWU",
  "description": "Das Fraunhofer IWU ist Innovationsmotor für Neuerungen in der produktionstechnischen Forschung und Entwicklung!",
  "keywords": [
    "Produktion",
    "Ressourceneffizienz",
    "Forschung"
  ],
  "robots": "noodp,noydir,index,follow",
  "alternates": {
    "languages": {
      "de": "https://www.iwu.fraunhofer.de/de.html",
      "en": "https://www.iwu.fraunhofer.de/en.html"
    }
  },
  "openGraph": {
    "title": "Forschung für die Zukunft - Fraunhofer IWU",
    "description": "Das Fraunhofer IWU ist Innovationsmotor für Neuerungen in der produktionstechnischen Forschung und Entwicklung!",
    "type": "website",
    "url": "/de.html"
  },
  "icons": {
    "shortcut": [
      {
        "url": "/assets/cloned/images/535e12a45abc.ico",
        "type": "image/x-icon"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/8a66563df9e1.png",
        "sizes": "180x180"
      }
    ],
    "icon": [
      {
        "url": "/assets/cloned/images/9966bae71571.png",
        "type": "image/png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/e844b9045357.png",
        "type": "image/png",
        "sizes": "96x96"
      },
      {
        "url": "/assets/cloned/svg/8cc6b523e853.svg",
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
