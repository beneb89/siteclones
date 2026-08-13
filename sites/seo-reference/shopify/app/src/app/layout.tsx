import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Meta Ads Library: 9 Ways To Use It in 2026 - Shopify India",
  "description": "Use the Meta Ad Library to conduct audience research, check up on your competition, and get ideas for your own ad strategies.",
  "robots": "index, follow, max-image-preview:large",
  "alternates": {
    "canonical": "/in/blog/ad-library-facebook",
    "languages": {
      "x-default": "https://www.shopify.com/blog/ad-library-facebook",
      "en-US": "https://www.shopify.com/blog/ad-library-facebook",
      "en-IN": "https://www.shopify.com/in/blog/ad-library-facebook",
      "en": "https://www.shopify.com/blog/ad-library-facebook",
      "en-ca": "https://www.shopify.com/ca/blog/ad-library-facebook",
      "en-gb": "https://www.shopify.com/uk/blog/ad-library-facebook",
      "en-au": "https://www.shopify.com/au/blog/ad-library-facebook",
      "en-id": "https://www.shopify.com/id/blog/ad-library-facebook",
      "en-nz": "https://www.shopify.com/nz/blog/ad-library-facebook",
      "en-za": "https://www.shopify.com/za/blog/ad-library-facebook",
      "en-ng": "https://www.shopify.com/ng/blog/ad-library-facebook",
      "en-ph": "https://www.shopify.com/ph/blog/ad-library-facebook",
      "en-sg": "https://www.shopify.com/sg/blog/ad-library-facebook",
      "en-hk": "https://www.shopify.com/hk/blog/ad-library-facebook",
      "en-ie": "https://www.shopify.com/ie/blog/ad-library-facebook",
      "en-my": "https://www.shopify.com/my/blog/ad-library-facebook",
      "ja": "https://www.shopify.com/jp/blog/ad-library-facebook",
      "de": "https://www.shopify.com/de/blog/facebook-werbebibliothek"
    }
  },
  "openGraph": {
    "title": "Meta Ads Library: 9 Ways To Use It in 2026 - Shopify India",
    "description": "Use the Meta Ad Library to conduct audience research, check up on your competition, and get ideas for your own ad strategies.",
    "type": "website",
    "siteName": "Shopify",
    "url": "/in/blog/ad-library-facebook",
    "images": [
      "https://cdn.shopify.com/b/shopify-brochure2-assets/ab80d5987180506de7d3854e7dc5d335.jpg"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Meta Ads Library: 9 Ways To Use It in 2026 - Shopify India",
    "description": "Use the Meta Ad Library to conduct audience research, check up on your competition, and get ideas for your own ad strategies.",
    "site": "Shopify",
    "images": [
      "https://cdn.shopify.com/b/shopify-brochure2-assets/ab80d5987180506de7d3854e7dc5d335.jpg"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/475221e7aa3d.png",
        "type": "image/png"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/897bc0faa2d5.png"
      },
      {
        "url": "/assets/cloned/images/897bc0faa2d5.png",
        "sizes": "120x120"
      },
      {
        "url": "/assets/cloned/images/85c19792ba6b.png",
        "sizes": "114x114"
      },
      {
        "url": "/assets/cloned/images/99765830ff1b.png",
        "sizes": "72x72"
      },
      {
        "url": "/assets/cloned/images/2777e81af232.png",
        "sizes": "57x57"
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
    <html lang={"en-IN"}>
      <body className="block text-foreground [font-family:Inter-Variable,_Helvetica,_Arial,_sans-serif] text-base font-normal not-italic leading-6 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:'ss03'] list-outside [writing-mode:horizontal-tb] [direction:ltr]">
        {children}
      </body>
    </html>
  );
}
