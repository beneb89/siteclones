import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Access Levels and Permissible Use  |  Google Ads API  |  Google for Developers",
  "alternates": {
    "canonical": "/google-ads/api/docs/api-policy/access-levels",
    "languages": {
      "en": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels",
      "x-default": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels",
      "ar": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels?hl=ar",
      "bn": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels?hl=bn",
      "zh-Hans": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels?hl=zh-cn",
      "zh-Hant": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels?hl=zh-tw",
      "fa": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels?hl=fa",
      "fr": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels?hl=fr",
      "de": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels?hl=de",
      "he": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels?hl=he",
      "hi": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels?hl=hi",
      "id": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels?hl=id",
      "it": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels?hl=it",
      "ja": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels?hl=ja",
      "ko": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels?hl=ko",
      "pl": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels?hl=pl",
      "pt-BR": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels?hl=pt-br",
      "ru": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels?hl=ru",
      "es-419": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels?hl=es-419",
      "th": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels?hl=th",
      "tr": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels?hl=tr",
      "vi": "https://developers.google.com/google-ads/api/docs/api-policy/access-levels?hl=vi"
    }
  },
  "openGraph": {
    "title": "Access Levels and Permissible Use | Google Ads API | Google for Developers",
    "type": "website",
    "siteName": "Google for Developers",
    "url": "/google-ads/api/docs/api-policy/access-levels",
    "images": [
      "https://www.gstatic.com/devrel-devsite/prod/v25f01968170374b7bd062a383d0367da1beee7ed413abaee67eec4296f4ba687/developers/images/opengraph/teal.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image"
  },
  "icons": {
    "shortcut": [
      {
        "url": "/assets/cloned/images/e7c917a58e28.png"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/67acd9bf21e9.png"
      }
    ]
  },
  "manifest": "/assets/cloned/manifest/936046b79bcd.json"
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1,
  "themeColor": "#009688"
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Article\",\n    \n    \"headline\": \"Access Levels and Permissible Use\"\n  }" }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"BreadcrumbList\",\n    \"itemListElement\": [{\n      \"@type\": \"ListItem\",\n      \"position\": 1,\n      \"name\": \"Google Ads API\",\n      \"item\": \"", "/google-ads/api\"\n    },{\n      \"@type\": \"ListItem\",\n      \"position\": 2,\n      \"name\": \"Access Levels and Permissible Use\",\n      \"item\": \"", "/google-ads/api/docs/api-policy/access-levels\"\n    }]\n  }"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="h-full block text-foreground [font-family:Roboto,_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-base font-normal not-italic leading-6 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
