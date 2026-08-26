import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "LLM-API-Kostenrechner: GPT, Claude & Gemini | Provimedia",
  "description": "Was kostet die GPT-, Claude- oder Gemini-API? Anfragen und Tokens eingeben, Monatskosten in USD und Euro vergleichen – kostenlos und ohne Anmeldung.",
  "alternates": {
    "canonical": "/tools/llm-kosten-rechner",
    "languages": {
      "de-DE": "https://www.provimedia.de/tools/llm-kosten-rechner",
      "x-default": "https://www.provimedia.de/tools/llm-kosten-rechner"
    }
  },
  "openGraph": {
    "title": "LLM-API-Kostenrechner: GPT, Claude & Gemini",
    "description": "Was kostet die GPT-, Claude- oder Gemini-API? Anfragen und Tokens eingeben, Monatskosten in USD und Euro vergleichen – kostenlos und ohne Anmeldung.",
    "type": "website",
    "siteName": "Provimedia",
    "url": "/tools/llm-kosten-rechner",
    "images": [
      "https://www.provimedia.de/images/og-default.jpg"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "LLM-API-Kostenrechner: GPT, Claude & Gemini",
    "description": "Was kostet die GPT-, Claude- oder Gemini-API? Anfragen und Tokens eingeben, Monatskosten in USD und Euro vergleichen – kostenlos und ohne Anmeldung.",
    "images": [
      "https://www.provimedia.de/images/og-default.jpg"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/svg/2b5f58727480.svg",
        "type": "image/svg+xml"
      },
      {
        "url": "/assets/cloned/images/75dd2d9f82ae.png",
        "type": "image/png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/9e34d8ea6c2b.png",
        "type": "image/png",
        "sizes": "16x16"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/5e79e346f6ce.png"
      }
    ]
  },
  "manifest": "/assets/cloned/manifest/907953a8adc3.webmanifest"
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
          dangerouslySetInnerHTML={{ __html: ["[{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"name\":\"LLM-API-Kostenrechner\",\"serviceType\":\"BusinessApplication\",\"description\":\"Was kostet die GPT-, Claude- oder Gemini-API? Anfragen und Tokens eingeben, Monatskosten in USD und Euro vergleichen – kostenlos und ohne Anmeldung.\",\"provider\":{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"@id\":\"", "/#organization\",\"name\":\"Provimedia\",\"legalName\":\"Provimedia GmbH\",\"url\":\"", "\",\"logo\":\"", "/favicon.svg\",\"description\":\"Provimedia ist eine deutsche Digitalagentur mit Sitz in Bietigheim-Bissingen, spezialisiert auf KI-Entwicklung, SaaS-Plattformen und thematische Online-Portale.\",\"foundingDate\":\"2007\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Weidenweg 12\",\"addressLocality\":\"Bietigheim-Bissingen\",\"postalCode\":\"74321\",\"addressRegion\":\"Baden-Württemberg\",\"addressCountry\":\"DE\"},\"contactPoint\":{\"@type\":\"ContactPoint\",\"email\":\"info@provimedia.de\",\"telephone\":\"+4971429170511\",\"contactType\":\"customer service\",\"availableLanguage\":[\"German\",\"English\"]},\"founder\":{\"@id\":\"", "/#alexander-weipprecht\"},\"employee\":{\"@id\":\"", "/#alexander-weipprecht\"},\"sameAs\":[\"https://www.linkedin.com/company/provimedia\"],\"dateModified\":\"2026-08-26T09:06:40+00:00\"}},{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Was kostet die ChatGPT-API pro Monat?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Das hängt von Anfragen und Token-Volumen ab. Beispiel: Ein Chatbot mit 10.000 Anfragen pro Monat (durchschnittlich 800 Input- und 300 Output-Tokens je Anfrage) kostet mit GPT-5 (1,25 USD Input / 10 USD Output pro 1 Mio. Tokens) rund 40 US-Dollar im Monat, mit GPT-5 mini rund 8 US-Dollar. Die Formel: Anfragen × (Input-Tokens ÷ 1 Mio. × Input-Preis + Output-Tokens ÷ 1 Mio. × Output-Preis).\"}},{\"@type\":\"Question\",\"name\":\"Wie berechnen sich die Kosten einer LLM-API?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Alle großen Anbieter rechnen pro Token ab, getrennt nach Input (Ihr Prompt inklusive Kontext) und Output (die Antwort des Modells). Output-Tokens sind dabei deutlich teurer als Input-Tokens — bei den gängigen Modellen um den Faktor 3 bis 8. Die Monatskosten ergeben sich aus: Anzahl der Anfragen × (Input-Tokens ÷ 1 Mio. × Input-Preis + Output-Tokens ÷ 1 Mio. × Output-Preis). Genau diese Rechnung führt der Rechner oben für alle ausgewählten Modelle gleichzeitig aus.\"}},{\"@type\":\"Question\",\"name\":\"Was ist ein Token und wie viele Tokens hat ein Text?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Ein Token ist die kleinste Abrechnungseinheit eines Sprachmodells — im Deutschen entspricht ein Token grob 3 bis 4 Zeichen. Eine DIN-A4-Seite Text mit rund 3.000 Zeichen sind etwa 750 bis 1.000 Tokens. 1 Million Tokens — die übliche Preiseinheit der Anbieter — entsprechen damit ungefähr 1.000 bis 1.300 Seiten Text.\"}},{\"@type\":\"Question\",\"name\":\"Welches LLM ist am günstigsten?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Für einfache, hochvolumige Aufgaben sind Effizienz-Modelle am günstigsten: GPT-5 mini (0,25 USD Input / 2 USD Output pro 1 Mio. Tokens) und Claude Haiku 4.5 (1 USD / 5 USD). Frontier-Modelle wie die Claude-Opus-Klasse (5 USD / 25 USD) lohnen sich nur für komplexes Reasoning oder anspruchsvolle Code-Aufgaben. Beim identischen Chatbot-Workload mit 10.000 Anfragen pro Monat liegt der Unterschied bei 23 US-Dollar (Haiku 4.5) gegenüber 115 US-Dollar (Opus-Klasse) — Faktor 5.\"}},{\"@type\":\"Question\",\"name\":\"Wie kann ich meine LLM-API-Kosten senken?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Die fünf wirksamsten Hebel: Erstens ein kleineres Modell oder Model-Routing einsetzen — einfache Teilaufgaben ans günstige Modell, nur komplexe ans teure. Zweitens Prompt-Caching nutzen: wiederholte Prompt-Teile werden je nach Anbieter mit bis zu 90 Prozent Rabatt abgerechnet. Drittens Batch-APIs für Nicht-Echtzeit-Jobs verwenden (typischerweise rund 50 Prozent Rabatt). Viertens System-Prompts und mitgeschickten Kontext kürzen, denn Input-Tokens zahlen bei jeder Anfrage erneut ein. Fünftens die Output-Länge begrenzen, weil Output-Tokens am teuersten sind.\"}}]},{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Startseite\",\"item\":\"", "\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Tools\",\"item\":\"", "/tools\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"LLM-API-Kostenrechner\"}]},{\"@context\":\"https://schema.org\",\"@type\":\"Person\",\"@id\":\"", "/#alexander-weipprecht\",\"name\":\"Alexander Weipprecht\",\"jobTitle\":\"Gründer & Geschäftsführer Provimedia GmbH\",\"description\":\"KI-Experte, Unternehmer und Entwickler mit 25 Jahren Programmiererfahrung. Berät Unternehmen zu LLM-Integration, RAG-Pipelines und Custom-Chatbots; betreibt mit Provimedia 230 thematische Portale mit über 300.000 monatlichen Besuchen.\",\"url\":\"", "/ueber-uns\",\"image\":\"", "/images/team/alexander-weipprecht-portrait.webp\",\"sameAs\":[\"https://alexander-weipprecht.de/\",\"https://linkedin.com/in/alexander-weipprecht-025a3669\",\"https://twitter.com/KryptoMagazin\",\"https://www.youtube.com/@Promptgefl%C3%BCster\"],\"worksFor\":{\"@id\":\"", "/#organization\"},\"knowsAbout\":[\"KI-Entwicklung\",\"LLM-Integration\",\"RAG-Pipelines\",\"Custom Chatbots\",\"SaaS-Entwicklung\",\"Webdesign\",\"SEO\",\"Portal-Entwicklung\",\"Generative Engine Optimization\"]}]"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="block text-foreground [font-family:ui-sans-serif,_system-ui,_sans-serif,_'Apple_Color_Emoji',_'Segoe_UI_Emoji',_'Segoe_UI_Symbol',_'Noto_Color_Emoji'] text-base font-normal not-italic leading-6 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
