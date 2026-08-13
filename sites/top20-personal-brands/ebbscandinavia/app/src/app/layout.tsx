import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Ebb Scandinavia",
  "description": "An independent transformation studio uniting business with creativity to design futures worth fighting for.",
  "robots": "max-image-preview:large",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Ebb Scandinavia",
    "description": "An independent transformation studio uniting business with creativity to design futures worth fighting for.",
    "type": "website",
    "url": "/",
    "images": [
      "https://framerusercontent.com/images/7PAhlU5kKAgRlZPHvSw2tZ4g28.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Ebb Scandinavia",
    "description": "An independent transformation studio uniting business with creativity to design futures worth fighting for.",
    "images": [
      "https://framerusercontent.com/images/7PAhlU5kKAgRlZPHvSw2tZ4g28.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/78d342c9d24f.png",
        "media": "(prefers-color-scheme: light)"
      },
      {
        "url": "/assets/cloned/images/78d342c9d24f.png",
        "media": "(prefers-color-scheme: dark)"
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
