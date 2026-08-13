import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Sam Altman",
  "description": "Sam Altman",
  "openGraph": {
    "title": "Sam Altman",
    "description": "Sam Altman",
    "type": "website",
    "siteName": "Sam Altman",
    "url": "/",
    "images": [
      "https://phaven-prod.s3.amazonaws.com/files/image_part/asset/3439526/q4Xtf4iMYA_SCrMc8hMfnF_k3UE/large_WhatsApp_Image_2026-02-28_at_15.26.14__4_.jpeg"
    ]
  },
  "icons": {
    "shortcut": [
      {
        "url": "/assets/cloned/images/6bac78d3f3de.ico",
        "type": "image/x-icon"
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
