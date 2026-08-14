import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "KI Weiterbildung & Seminare",
  "description": "Entdecke unsere Weiterbildungen & Seminare zu Künstlicher Intelligenz | Haufe Akademie",
  "robots": "index,follow",
  "alternates": {
    "canonical": "/hierarchy/ki"
  },
  "openGraph": {
    "title": "KI Weiterbildung & Seminare",
    "description": "Entdecke unsere Weiterbildungen & Seminare zu Künstlicher Intelligenz | Haufe Akademie",
    "siteName": "Haufe Akademie",
    "url": "/hierarchy/ki",
    "images": [
      "https://www.haufe-akademie.de/shop_static/dist/assets/images/misc/og-logo.png"
    ]
  },
  "icons": {
    "shortcut": [
      {
        "url": "/assets/cloned/images/ff2dbbdf25d4.png",
        "type": "image/x-icon"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/01b639075c4b.png"
      }
    ]
  },
  "other": {
    "og:type": "product"
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
          dangerouslySetInnerHTML={{ __html: ["{\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"BreadcrumbList\",\n      \"itemListElement\": [\n     {\n        \"@type\": \"ListItem\",\n        \"position\": 1,\n        \"name\": \"Haufe Akademie\",\n        \"item\": \"", "\"\n     }\n\n\t\n\t,{\n        \"@type\": \"ListItem\",\n        \"position\": 2,\n        \"name\": \"Persönliche Weiterbildung\",\n        \"item\": \"", "/persoenliche-weiterbildung\"\n     }\n     \n\t,{\n        \"@type\": \"ListItem\",\n        \"position\": 3,\n        \"name\": \"Künstliche Intelligenz &amp; Data Analytics\",\n        \"item\": \"", "/hierarchy/data-analytics-ki\"\n     }\n     \n\t,{\n        \"@type\": \"ListItem\",\n        \"position\": 4,\n        \"name\": \"Künstliche Intelligenz\",\n        \"item\": \"", "/hierarchy/ki\"\n     }\n     \n\t]\n    }"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.1\",\n\t\t\t\t\t\t\t\"reviewCount\": \"3\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI-Agenten in der Praxis: Strategische Einordnung für Entscheider:innen\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.2\",\n\t\t\t\t\t\t\t\"reviewCount\": \"5\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI-Mindset entwickeln: Mensch und Maschine im Einklang\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-3"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.2\",\n\t\t\t\t\t\t\t\"reviewCount\": \"10\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI-Tools gezielt auswählen und produktiv einsetzen\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-4"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.9\",\n\t\t\t\t\t\t\t\"reviewCount\": \"4\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Von der Einzelanwendung zum KI-Team: Dein Weg zu skalierbaren Assistenten\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-5"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"39\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"AI Literacy: Kompetenzen für den sicheren Umgang mit Künstlicher Intelligenz\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-6"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.2\",\n\t\t\t\t\t\t\t\"reviewCount\": \"14\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Künstliche Intelligenz im Produktentwicklungsprozess\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-7"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"12\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Effiziente Datenanalyse mit Künstlicher Intelligenz\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-8"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.3\",\n\t\t\t\t\t\t\t\"reviewCount\": \"1\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Dein erster KI-Assistent: Praxisworkshop für smarte Automatisierung\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-9"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.9\",\n\t\t\t\t\t\t\t\"reviewCount\": \"4\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Visueller Content mit KI: Methoden und Workflows für die Praxis\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-10"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"17\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI Update: EU AI Act\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-11"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.4\",\n\t\t\t\t\t\t\t\"reviewCount\": \"48\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Generative KI für Entscheider:innen\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-12"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.9\",\n\t\t\t\t\t\t\t\"reviewCount\": \"5\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Ethik der Künstlichen Intelligenz\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-13"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"223\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Künstliche Intelligenz: Grundlagen, Anwendungen und Zukunftsaussichten\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-14"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"3\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"AI-Governance: Chancen nutzen, Risiken minimieren\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-15"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"126\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI Express\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-16"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.7\",\n\t\t\t\t\t\t\t\"reviewCount\": \"63\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Kreativer und innovativer mit Künstlicher Intelligenz\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-17"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"285\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Prompt Engineering für ChatGPT, Microsoft Copilot und Co.\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-18"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.7\",\n\t\t\t\t\t\t\t\"reviewCount\": \"17\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI-Use Cases: Anwendungsfälle identifizieren, Potenziale nutzen\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-19"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"163\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Künstliche Intelligenz als strategischer Hebel für Unternehmen\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-20"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"188\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Künstliche Intelligenz im Business: Potenziale, Anwendungsfälle, Wertbeiträge\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-21"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.2\",\n\t\t\t\t\t\t\t\"reviewCount\": \"131\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Künstliche Intelligenz erfolgreich im Unternehmen operationalisieren\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-22"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"241\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Die ChatGPT-Revolution: Bedienung, Einsatzfelder, Geschäftsmodelle\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-23"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"100\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI-Projekte identifizieren & wirtschaftlich realisieren\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-24"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"3.9\",\n\t\t\t\t\t\t\t\"reviewCount\": \"22\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Business Automation: Effizienz, Innovation & Erfolg durch autonome Technologie\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-25"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"1\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Praxisorientierte KI–Workflows: Theorie und Anwendung\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-26"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"22\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI-Technologien und Automatisierungstools praxisorientiert einsetzen\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-27"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"146\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI- und Data-Projekte: Grundlagenkurs für Machine Learning und Data Mining\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-28"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"28\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Automatisierung meistern – zukunftssichere Prozesse für nachhaltiges Wachstum\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-29"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"9\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Manager:in für KI-gestützte Transformation\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-30"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.4\",\n\t\t\t\t\t\t\t\"reviewCount\": \"12\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Strategische Datenkompetenz für Entscheider:innen\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-31"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"179\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI im Recruiting für Einsteiger:innen\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-32"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"47\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Microsoft Copilot im Einkauf – ein Praxisworkshop\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-33"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.3\",\n\t\t\t\t\t\t\t\"reviewCount\": \"117\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Basiswissen Data Science und Künstliche Intelligenz für Controller:innen\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-34"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.1\",\n\t\t\t\t\t\t\t\"reviewCount\": \"10\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI und Arbeitsrecht: Chancen und Risiken\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-35"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"51\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Teamführung und Künstliche Intelligenz\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-36"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"3.9\",\n\t\t\t\t\t\t\t\"reviewCount\": \"21\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI–basierte Strategien im Business Development\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-37"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"73\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"ChatGPT Basics im Steuer- und Rechnungswesen \"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-38"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.3\",\n\t\t\t\t\t\t\t\"reviewCount\": \"149\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Mastering the Future I – KI erfolgreich für Marketing & Sales nutzen (Basics)\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-39"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"101\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"ChatGPT im Controlling\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-40"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"3.9\",\n\t\t\t\t\t\t\t\"reviewCount\": \"2\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI im Marketing einführen – mit optimierten Prozessen\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-41"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.4\",\n\t\t\t\t\t\t\t\"reviewCount\": \"67\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI-generiertes Texten für Unternehmenskommunikation und Marketing\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-42"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.3\",\n\t\t\t\t\t\t\t\"reviewCount\": \"44\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Mit KI Compliance-Herausforderungen erfolgreich bewältigen?\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-43"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"165\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI-Tools im B2B-Marketing: Überblick, Anwendungen, Chancen\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-44"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"122\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"ChatGPT & Co. im Vertrieb – Grundlagen\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-45"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.1\",\n\t\t\t\t\t\t\t\"reviewCount\": \"21\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Robotic Process Automation für Controllingprozesse\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-46"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.3\",\n\t\t\t\t\t\t\t\"reviewCount\": \"16\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI in der Medienarbeit\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-47"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"28\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI-Automatisierung für Controlling und Finance\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-48"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"347\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI für Personaler:innen - Microsoft Copilot, ChatGPT & Co. im HR-Alltag\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-49"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"11\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"ChatGPT Advanced im Steuer- und Rechnungswesen\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-50"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"42\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI in der Verhandlungsführung\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-51"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"13\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Künstliche Intelligenz (KI) in der Kreativwirtschaft\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-52"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"33\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Datenanalyse und Finance Reporting mit KI\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-53"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.7\",\n\t\t\t\t\t\t\t\"reviewCount\": \"101\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI in der Führung\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-54"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"14\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Work smarter – mit KI\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-55"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"8\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI trifft Immobilienmanagement: Praktische Anwendungen von ChatGPT & Co.\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-56"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"24\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Moderne Korrespondenz mit KI-Tools\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-57"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"175\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Das KI-Cockpit für die Assistenz: ChatGPT, Copilot & Co.\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-58"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.7\",\n\t\t\t\t\t\t\t\"reviewCount\": \"21\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI in MS 365 Office Apps clever nutzen\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-59"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.4\",\n\t\t\t\t\t\t\t\"reviewCount\": \"25\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Forecasting und Finanzplanung mit KI\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-60"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.2\",\n\t\t\t\t\t\t\t\"reviewCount\": \"27\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Künstliche Intelligenz für UX-Professionals\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-61"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"20\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Künstliche Intelligenz entlang der Customer Journey\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-62"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"11\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Vertrieb 4.0: Erfolgreich Verkaufen mit Künstlicher Intelligenz\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-63"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"3\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI in der Immobilienverwaltung\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-64"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"6\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI in der Beratung: von Workflows zu Wertschöpfung\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-65"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"45\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Weiterbildung mit neuen Lerntechnologien transformieren\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-66"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.3\",\n\t\t\t\t\t\t\t\"reviewCount\": \"39\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"ChatGPT & Co. erfolgreich im Produktmanagement nutzen\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-67"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"146\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI im Projektmanagement – ​kompakt​\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-68"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"113\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Prompt my Sales: KI im Vertrieb effizient einsetzen\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-69"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.7\",\n\t\t\t\t\t\t\t\"reviewCount\": \"30\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Next Level ChatGPT für Marketing & Co.\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-70"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.3\",\n\t\t\t\t\t\t\t\"reviewCount\": \"14\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Kreativ mit KI: So entstehen bessere Ideen mit ChatGPT & Co.\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-71"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.9\",\n\t\t\t\t\t\t\t\"reviewCount\": \"7\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"LinkedIn Content Creation mit KI\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-72"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.7\",\n\t\t\t\t\t\t\t\"reviewCount\": \"13\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI im Performance Marketing\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-73"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"3\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI im Marketing – rechtliche Grundlagen & Best Practices\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-74"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.7\",\n\t\t\t\t\t\t\t\"reviewCount\": \"11\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Zertifizierte:r KI-Expert:in Produktmanagement\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-75"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.5\",\n\t\t\t\t\t\t\t\"reviewCount\": \"5\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Mastering the Future II – KI-Praxistag für Marketing & Sales (Advanced)\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-76"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.7\",\n\t\t\t\t\t\t\t\"reviewCount\": \"51\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Crashkurs LLMO & GEO – KI-Sichtbarkeit für deine Angebote\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-77"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.7\",\n\t\t\t\t\t\t\t\"reviewCount\": \"22\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Microsoft 365 Copilot in Excel 365 effizient einsetzen\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-78"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.7\",\n\t\t\t\t\t\t\t\"reviewCount\": \"103\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI im Büro: Wie KI das Büro wirklich schneller macht\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-79"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"81\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Microsoft Copilot in MS Office 365 nutzen\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-80"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.9\",\n\t\t\t\t\t\t\t\"reviewCount\": \"2\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Digitale Frauenpower: KI für Beruf und Business\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-81"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.7\",\n\t\t\t\t\t\t\t\"reviewCount\": \"9\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Meetings moderieren mit KI-Unterstützung\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-82"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.7\",\n\t\t\t\t\t\t\t\"reviewCount\": \"7\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Präsentationen mit KI: schneller vorbreiten, stärker wirken\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-83"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.7\",\n\t\t\t\t\t\t\t\"reviewCount\": \"69\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"Die besten KI-Tools fürs Büro - Basics\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-84"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.9\",\n\t\t\t\t\t\t\t\"reviewCount\": \"20\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI-Assistenten & Automatisierung im Marketing  \"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-85"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"178\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI-Tools für Einsteiger\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-86"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.6\",\n\t\t\t\t\t\t\t\"reviewCount\": \"62\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI-Assistenten, KI-Agenten und Chatbots einfach selbst erstellen\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-87"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n\t\t\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\t\t\"@type\": \"Product\",\n\t\t\t\t\t\t\"aggregateRating\": {\n\t\t\t\t\t\t\t\"@type\": \"AggregateRating\",\n\t\t\t\t\t\t\t\"ratingValue\": \"4.7\",\n\t\t\t\t\t\t\t\"reviewCount\": \"69\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"name\": \"KI-unterstützte Präsentationen erstellen\"\n\t\t\t\t\t}" }}
        />
        <script
          key="ditto-json-ld-88"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\n\t\"@context\": \"https://schema.org\",\n\t\"@type\": \"Organization\",\n\t\"legalName\" : \"Haufe Akademie\",\n\t\"url\": \"", "/\",\n\n\t\"sameAs\" : [\n\t\t\"https://www.facebook.com/Haufe.Akademie\",\n\t\t\"https://www.linkedin.com/company/haufe-akademie\",\n\t\t\"https://www.instagram.com/haufe.akademie/\",\n\t\t\"https://www.xing.com/pages/haufeakademiegmbh-co-kg\",\n\t\t\"https://www.youtube.com/user/HaufeAkademieTV\",\n\t\t\"https://www.tiktok.com/@haufe.akademie\"\n\t],\n\n  \t\"potentialAction\": {\n    \t\"@type\": \"SearchAction\",\n    \t\"target\": \"", "/search?query={search_term_string}\",\n    \t\"query-input\": \"required name=search_term_string\"\n\t}\n}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
