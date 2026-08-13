import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "A Present Force",
  "description": "A Present Force is a female-founded design studio creating brands and websites.",
  "robots": "max-image-preview:large",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "A Present Force",
    "description": "A Present Force is a female-founded design studio creating brands and websites.",
    "type": "website",
    "url": "/",
    "images": [
      "https://framerusercontent.com/assets/f5ieqpdkR1dGxsIk3i1zfzvFGE.gif"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "A Present Force",
    "description": "A Present Force is a female-founded design studio creating brands and websites.",
    "images": [
      "https://framerusercontent.com/assets/f5ieqpdkR1dGxsIk3i1zfzvFGE.gif"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/224eb730e076.png",
        "media": "(prefers-color-scheme: light)"
      },
      {
        "url": "/assets/cloned/images/224eb730e076.png",
        "media": "(prefers-color-scheme: dark)"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/224eb730e076.png"
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
