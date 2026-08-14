import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "AI FIRST — Dein Kompass für die neue Ära | AI FIRST",
  "description": "Inspiration, Werkzeuge & Wissen für deine Zukunft mit AI. School, Insights, Podcast, Collective und Enablement — von AI FIRST.",
  "robots": "index, follow",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "AI FIRST — Dein Kompass für die neue Ära",
    "description": "Inspiration, Werkzeuge & Wissen für deine Zukunft mit AI.",
    "type": "website",
    "images": [
      "https://ai-first.ai/images/og/og-default.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "AI FIRST — Dein Kompass für die neue Ära",
    "description": "Inspiration, Werkzeuge & Wissen für deine Zukunft mit AI.",
    "images": [
      "https://ai-first.ai/images/og/og-default.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/d086c0322435.ico",
        "type": "image/x-icon",
        "sizes": "48x48"
      },
      {
        "url": "/assets/cloned/svg/298770f3b1e4.svg",
        "type": "image/svg+xml",
        "sizes": "any"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/c273eebeb30a.png",
        "type": "image/png",
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
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"AI FIRST\",\"url\":\"", "\",\"logo\":\"", "/images/og/og-default.png\",\"description\":\"AI FIRST ist deine Plattform für KI-Wissen, Werkzeuge und Netzwerk.\",\"sameAs\":[\"https://www.linkedin.com/company/ai-first-ai\"]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"WebSite\",\"name\":\"AI FIRST\",\"url\":\"", "\"}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"AI FIRST\",\"url\":\"", "\",\"logo\":\"", "/images/og/og-default.png\",\"description\":\"AI FIRST ist deine Plattform für KI-Wissen, Werkzeuge und Netzwerk.\",\"sameAs\":[\"https://www.linkedin.com/company/ai-first-ai\"]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-3"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"WebSite\",\"name\":\"AI FIRST\",\"url\":\"", "\"}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
