import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Consultant Websites: 20+ Inspiring Examples (2026)",
  "description": "We searched the web for consultants with modern designs to curate this collection of consulting websites.",
  "alternates": {
    "canonical": "/inspiration/consulting-websites"
  },
  "openGraph": {
    "title": "Consultant Websites: 20+ Inspiring Examples (2026)",
    "description": "We searched the web for consultants with modern designs to curate this collection of consulting websites.",
    "url": "/inspiration/consulting-websites",
    "images": [
      "https://ucarecdn.com/7c1235c6-574c-497e-8fab-80eaa0ff3a3c/"
    ]
  },
  "twitter": {
    "card": "summary",
    "description": "We searched the web for consultants with modern designs to curate this collection of consulting websites.",
    "site": "builderreport",
    "images": [
      "https://ucarecdn.com/7c1235c6-574c-497e-8fab-80eaa0ff3a3c/"
    ]
  },
  "icons": {
    "shortcut": [
      {
        "url": "/assets/cloned/images/640ae702d58e.png",
        "type": "image/png"
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
          dangerouslySetInnerHTML={{ __html: ["{\n\t\"@context\":\"http://schema.org\",\n\t\"name\": \"Consultant Websites: 20+ Inspiring Examples (2026)\",\n\t\"datePublished\":\"\",\n\t\"@type\":\"TechArticle\",\n\t\"publisher\": {\n\t  \"@type\": \"Organization\",\n\t  \"name\": \"Site Builder Report\",\n\t  \"url\": \"", "\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"https://ucarecdn.com/34477ed1-a278-47b2-b72b-d446ee14e540/-/resize/440x/logo.jpg\"\n      }\n\t},\n\t\"author\": {\n\t  \"@type\":\"Person\",\n\t  \"name\":\"\"\n\t},\n    \"headline\":\"Consultant Websites: 20+ Inspiring Examples (2026)\",\n    \"description\":\"We searched the web for consultants with modern designs to curate this collection of consulting websites. \",\n    \"inLanguage\":\"en_US\",\n\t\n\t\"image\": [\n\t\n\t    \"https://ucarecdn.com/7c1235c6-574c-497e-8fab-80eaa0ff3a3c/-/resize/1800x/\", \n\t\n\t    \"https://ucarecdn.com/cfcafbc8-4733-4d50-81e0-ac4a43c35e09/-/resize/1800x/\", \n\t\n\t    \"https://ucarecdn.com/4c73c403-6e3a-43e5-b71a-27e385673eb4/-/resize/1800x/\", \n\t\n\t    \"https://ucarecdn.com/33cb75eb-64fe-4d0c-9a5d-2b5038656769/-/resize/1800x/\", \n\t\n\t    \"https://ucarecdn.com/affb1425-1db7-4d21-b040-952b4a0440c5/-/resize/1800x/\" \n\t\n\t],\n\t\n    \"mainEntityOfPage\":{\n       \"@type\":\"WebPage\",\n       \"@id\":\"", "/inspiration/consulting-websites\"\n     }\n}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\n\t  \"@context\": \"https://schema.org\",\n\t  \"@type\": \"BreadcrumbList\",\n\t  \"itemListElement\": [{\n\t    \"@type\": \"ListItem\",\n\t    \"position\": 1,\n\t    \"name\": \"Examples\",\n\t    \"item\": \"", "/inspiration\"\n\t  },{\n\t    \"@type\": \"ListItem\",\n\t    \"position\": 2,\n\t    \"name\": \"Consulting Websites\",\n\t    \"item\": \"", "/inspiration/consulting-websites\"\n\t  }]\n\t}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="box-content block text-foreground [font-family:'Gotham_SSm_A',_'Gotham_SSm_B',_sans-serif] text-[1.0625rem] font-normal not-italic leading-5 tracking-[normal] [word-spacing:0px] text-center normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr]">
        {children}
      </body>
    </html>
  );
}
