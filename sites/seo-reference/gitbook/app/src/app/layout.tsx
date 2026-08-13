import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "GEO guide: How to optimize your docs for AI search and LLM ingestion | Guides | GitBook Documentation",
  "description": "Learn how to optimize documentation for generative engine optimization (GEO), SEO, and LLM ingestion — all powered by GitBook’s AI-ready docs.",
  "robots": "index, follow",
  "alternates": {
    "canonical": "/docs/guides/seo-and-llm-optimization/geo-guide"
  },
  "openGraph": {
    "title": "GEO guide: How to optimize your docs for AI search and LLM ingestion | Guides | GitBook Documentation",
    "description": "Learn how to optimize documentation for generative engine optimization (GEO), SEO, and LLM ingestion — all powered by GitBook’s AI-ready docs.",
    "images": [
      "https://gitbook.com/docs/~gitbook/image?url=https%3A%2F%2F4045551102-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Forganizations%252Fd8f63b60-89ae-11e7-8574-5927d48c4877%252Fsites%252Fsite_p4Xo4%252Fsocialpreview%252Fd5EKATKk828mNHJwRpc8%252FGitBook.jpg%3Falt%3Dmedia%26token%3Dc084d4cb-7e4f-47fe-93f6-cc992d56a958&width=1200&height=630&sign=781073a1&sv=2"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "GEO guide: How to optimize your docs for AI search and LLM ingestion | Guides | GitBook Documentation",
    "description": "Learn how to optimize documentation for generative engine optimization (GEO), SEO, and LLM ingestion — all powered by GitBook’s AI-ready docs.",
    "images": [
      "https://gitbook.com/docs/~gitbook/image?url=https%3A%2F%2F4045551102-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Forganizations%252Fd8f63b60-89ae-11e7-8574-5927d48c4877%252Fsites%252Fsite_p4Xo4%252Fsocialpreview%252Fd5EKATKk828mNHJwRpc8%252FGitBook.jpg%3Falt%3Dmedia%26token%3Dc084d4cb-7e4f-47fe-93f6-cc992d56a958&width=1200&height=630&sign=781073a1&sv=2"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/c433ff20f982.png",
        "type": "image/png",
        "media": "(prefers-color-scheme: light)"
      },
      {
        "url": "/assets/cloned/images/c433ff20f982.png",
        "type": "image/png",
        "media": "(prefers-color-scheme: dark)"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/1014774e9cb2.png",
        "type": "image/png",
        "media": "(prefers-color-scheme: light)"
      },
      {
        "url": "/assets/cloned/images/1014774e9cb2.png",
        "type": "image/png",
        "media": "(prefers-color-scheme: dark)"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1,
  "colorScheme": "light dark"
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <body className="block text-foreground [font-family:CustomFont\_content,_sans-serif] text-base font-normal not-italic leading-6.5 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background 2xl:box-content 2xl:m-2 2xl:text-clr-0 2xl:[font-family:'Times_New_Roman'] 2xl:leading-4.5 2xl:bg-[initial]">
        {children}
      </body>
    </html>
  );
}
