import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Not Found",
  "alternates": {
    "canonical": "/404"
  },
  "openGraph": {
    "title": "Not Found"
  },
  "twitter": {
    "title": "Not Found"
  },
  "icons": {
    "shortcut": [
      {
        "url": "/assets/cloned/images/5a757b6b733a.png",
        "type": "image/x-icon"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/2a240bb757ea.png"
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
    <html lang={"en"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Organization\",\n  \"@id\": \"", "/#organization\",\n  \"name\": \"Scalekit\",\n  \"legalName\": \"ScaleKit Inc.\",\n  \"url\": \"", "/\",\n  \"logo\": \"", "/images/logo.png\",\n  \"description\": \"Scalekit is an authentication platform for AI and B2B SaaS applications, offering SSO, SCIM, and agent authentication.\",\n  \"email\": \"hi@scalekit.com\",\n  \"address\": {\n    \"@type\": \"PostalAddress\",\n    \"streetAddress\": \"16192 Coastal Highway\",\n    \"addressLocality\": \"Lewes\",\n    \"addressRegion\": \"DE\",\n    \"postalCode\": \"19958\",\n    \"addressCountry\": \"US\"\n  },\n  \"sameAs\": [\n    \"https://www.linkedin.com/company/scalekit\",\n    \"https://twitter.com/scalekit\"\n  ]\n}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"WebSite\",\n  \"@id\": \"", "/#website\",\n  \"url\": \"", "/\",\n  \"name\": \"Scalekit\",\n  \"publisher\": {\n    \"@id\": \"", "/#organization\"\n  }\n}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="min-h-full block text-foreground [font-family:Inter,_sans-serif] text-sm font-normal not-italic leading-5 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
