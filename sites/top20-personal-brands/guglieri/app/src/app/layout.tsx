import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Work by Claudio guglieri",
  "description": "Guglieri.com represents the work of Claudio Guglieri.",
  "robots": "max-image-preview:large",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Work by Claudio guglieri",
    "description": "Guglieri.com represents the work of Claudio Guglieri.",
    "type": "website",
    "url": "/",
    "images": [
      "https://framerusercontent.com/images/UbrFnuLwkBjVytdTVjU93iJwiJI.webp"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Work by Claudio guglieri",
    "description": "Guglieri.com represents the work of Claudio Guglieri.",
    "images": [
      "https://framerusercontent.com/images/UbrFnuLwkBjVytdTVjU93iJwiJI.webp"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/34f51a591ede.webp",
        "media": "(prefers-color-scheme: light)"
      },
      {
        "url": "/assets/cloned/images/34f51a591ede.webp",
        "media": "(prefers-color-scheme: dark)"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/4c7c458a51b0.png"
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
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
