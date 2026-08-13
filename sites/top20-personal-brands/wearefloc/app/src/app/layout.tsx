import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "FLOC* | Web3 Strategic Design Studio",
  "description": "Pioneering Web3 strategic design studio driven by community collaboration. Design the next-generation brands together with expert-led innovation.",
  "robots": "max-image-preview:large",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "FLOC* | Web3 Strategic Design Studio",
    "description": "Pioneering Web3 strategic design studio driven by community collaboration. Design the next-generation brands together with expert-led innovation.",
    "type": "website",
    "url": "/",
    "images": [
      "https://framerusercontent.com/assets/7pnvtgP8CNFGu4txs47MUoRJwOQ.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "FLOC* | Web3 Strategic Design Studio",
    "description": "Pioneering Web3 strategic design studio driven by community collaboration. Design the next-generation brands together with expert-led innovation.",
    "images": [
      "https://framerusercontent.com/assets/7pnvtgP8CNFGu4txs47MUoRJwOQ.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/svg/6a851d93ea1b.svg",
        "media": "(prefers-color-scheme: light)"
      },
      {
        "url": "/assets/cloned/svg/6a851d93ea1b.svg",
        "media": "(prefers-color-scheme: dark)"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/75861329fc16.png"
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
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
