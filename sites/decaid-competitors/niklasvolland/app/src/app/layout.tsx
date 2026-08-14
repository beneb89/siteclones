import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Niklas Volland – KI-Transformationsexperte | Keynote Speaker & Berater",
  "description": "Niklas Volland ist KI-Transformationsexperte und Keynote Speaker. Microsoft, NVIDIA, Google Partner. Keynotes & Academy für C-Level Executives, Kollaborationen mit AI-Brands.",
  "keywords": [
    "KI-Beratung",
    "KI-Transformation",
    "KI-Keynote",
    "KI-Speaker",
    "KI-Integration",
    "Keynote Speaker",
    "Niklas Volland"
  ],
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Niklas Volland – KI-Transformationsexperte | Keynote Speaker",
    "description": "KI-Transformation auf der Bühne, in Teams und in der Strategie. Verfügbarkeit je nach Auslastung – mindestens 6 Wochen Vorlauf.",
    "type": "website",
    "siteName": "Niklas Volland",
    "url": "/",
    "images": [
      "https://niklasvolland.de/assets/niklas-stage.jpg"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Niklas Volland – KI-Transformationsexperte | Keynote Speaker",
    "description": "KI-Transformation auf der Bühne, in Teams und in der Strategie. Keynotes, Academy & Kollaborationen.",
    "images": [
      "https://niklasvolland.de/assets/niklas-stage.jpg"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/svg/6a4bc9e419b7.svg",
        "type": "image/svg+xml"
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
          dangerouslySetInnerHTML={{ __html: ["{\n        \"@context\":\"https://schema.org\",\n        \"@type\":\"Person\",\n        \"name\":\"Niklas Volland\",\n        \"jobTitle\":\"KI-Transformationsexperte, Keynote Speaker\",\n        \"url\":\"", "\",\n        \"sameAs\":[\"https://www.linkedin.com/in/niklas-volland/\",\"https://instagram.com/niklas_volland\",\"https://tiktok.com/@niklas_volland\"],\n        \"description\":\"Niklas Volland bringt KI-Transformation auf die Bühne, in Teams und in Strategien. Microsoft, NVIDIA, Google Partner. Keynote Speaker und Berater für C-Level.\",\n        \"knowsAbout\":[\"Künstliche Intelligenz\",\"KI-Transformation\",\"Change Management\",\"Digitale Transformation\",\"Keynote Speaking\"],\n        \"affiliation\":[\n            {\"@type\":\"Organization\",\"name\":\"Microsoft\"},\n            {\"@type\":\"Organization\",\"name\":\"Google\"},\n            {\"@type\":\"Organization\",\"name\":\"NVIDIA\"},\n            {\"@type\":\"Organization\",\"name\":\"Adobe\"}\n        ]\n    }"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n        \"@context\":\"https://schema.org\",\n        \"@type\":\"FAQPage\",\n        \"mainEntity\":[\n            {\"@type\":\"Question\",\"name\":\"Wann ist Niklas verfügbar?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Die Verfügbarkeit hängt von der aktuellen Auslastung ab. Bitte plane mindestens 6 Wochen Vorlauf zwischen Anfrage und Termin ein.\"}},\n            {\"@type\":\"Question\",\"name\":\"Was kostet eine Keynote?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Keynotes starten bei 12.500€. Alle Themen sind für 90 Minuten optimiert.\"}},\n            {\"@type\":\"Question\",\"name\":\"Kann Niklas auch online gebucht werden?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Ja. Online-Keynotes sind möglich. Präsenz ist jedoch immer stärker.\"}},\n            {\"@type\":\"Question\",\"name\":\"Für wen eignet sich eine Keynote von Niklas?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Ideal: C-Suite, Management-Teams und Innovators. Jede Keynote kann auch für Mitarbeitende angepasst werden.\"}},\n            {\"@type\":\"Question\",\"name\":\"Wird die Keynote personalisiert?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Absolut. Vor jeder Keynote gibt es ein Briefing-Gespräch, um Industrie, Herausforderungen und Ziele zu verstehen.\"}}\n        ]\n    }" }}
        />
      </head>
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
