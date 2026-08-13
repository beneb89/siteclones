import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "ai_optimization/llm_mentions/aggregated_metrics/live – DataForSEO API v.3",
  "robots": "max-image-preview:large",
  "alternates": {
    "canonical": "/v3/ai_optimization-llm_mentions-aggregated_metrics-live/"
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/f7cdb1de416d.png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/3d9045b2de48.png",
        "sizes": "192x192"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/d8e1779c9833.png"
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
    <html lang={"en-US"}>
      <body className="flex relative flex-col text-foreground [font-family:Inter,_sans-serif] text-sm font-normal not-italic leading-[1.0625rem] tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background md:max-lg:text-[0.9375rem]">
        {children}
      </body>
    </html>
  );
}
