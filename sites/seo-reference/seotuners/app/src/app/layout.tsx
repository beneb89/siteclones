import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Best Practices for Generative Engine Optimization (GEO) 2026",
  "description": "GEO best practices for 2026 to earn AI citations: entity coverage, schema, answer blocks, internal links, and proof signals for AI Overviews and ChatGPT.",
  "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  "alternates": {
    "canonical": "/blog/generative-engine-optimization/generative-engine-optimization-best-practices/"
  },
  "openGraph": {
    "title": "Best Practices for Generative Engine Optimization (GEO) 2026",
    "description": "GEO best practices for 2026 to earn AI citations: entity coverage, schema, answer blocks, internal links, and proof signals for AI Overviews and ChatGPT.",
    "type": "article",
    "siteName": "SeoTuners",
    "url": "/blog/generative-engine-optimization/generative-engine-optimization-best-practices/",
    "images": [
      "https://seotuners.com/wp-content/uploads/2026/01/How-To-Evaluate-an-SEO-Company-in-2026-scaled.jpg"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "site": "@seotuner",
    "creator": "@seotuner"
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en-US"}>
      <body className="block text-foreground [font-family:arboria,_sans-serif] text-lg font-normal not-italic leading-[2rem] tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
