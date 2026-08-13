import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "GitHub - googleanalytics/google-analytics-mcp · GitHub",
  "description": "Contribute to googleanalytics/google-analytics-mcp development by creating an account on GitHub.",
  "openGraph": {
    "title": "GitHub - googleanalytics/google-analytics-mcp",
    "description": "Contribute to googleanalytics/google-analytics-mcp development by creating an account on GitHub.",
    "siteName": "GitHub",
    "url": "/googleanalytics/google-analytics-mcp",
    "images": [
      "https://opengraph.githubassets.com/b2de8ba5952806e8823bc916a3ef06062fd72a1027546638e54d9907da5017a8/googleanalytics/google-analytics-mcp"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "GitHub - googleanalytics/google-analytics-mcp",
    "description": "Contribute to googleanalytics/google-analytics-mcp development by creating an account on GitHub.",
    "site": "@github",
    "images": [
      "https://opengraph.githubassets.com/b2de8ba5952806e8823bc916a3ef06062fd72a1027546638e54d9907da5017a8/googleanalytics/google-analytics-mcp"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/b5e52454b813.png"
      },
      {
        "url": "/assets/cloned/images/cd1a23363efb.png",
        "type": "image/png"
      },
      {
        "url": "/assets/cloned/svg/7fc7cee827bf.svg",
        "type": "image/svg+xml"
      }
    ],
    "other": [
      {
        "url": "/assets/cloned/svg/fb9f92cfe401.svg",
        "rel": "mask-icon",
        "color": "#000000"
      }
    ]
  },
  "manifest": "/assets/cloned/manifest/acee4ae3baa6.json",
  "other": {
    "og:type": "object"
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1,
  "themeColor": "#1e2327",
  "colorScheme": "light dark"
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <body className="min-h-screen block text-foreground [font-family:'Mona_Sans_VF',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Noto_Sans_Backtick_Fix',_'Noto_Sans',_Helvetica,_Arial,_sans-serif,_'Apple_Color_Emoji',_'Segoe_UI_Emoji'] text-sm font-normal not-italic leading-[1.3125rem] tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:break-word] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
