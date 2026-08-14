import "./globals.css";
import "./ditto-chrome.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Cegos Integrata GmbH – International führender Seminaranbieter",
  "description": "Die Cegos Integrata GmbH ist der führende europäische Full Service-Anbieter für Qualifizierungsprojekte & Qualifizierungsprozesse.",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Cegos Integrata GmbH – International führender Seminaranbieter",
    "description": "Die Cegos Integrata GmbH ist der führende europäische Full Service-Anbieter für Qualifizierungsprojekte & Qualifizierungsprozesse.",
    "type": "website",
    "images": [
      "https://static.integrata-cegos.de/wp-content/uploads/2023/04/13103636/LOGO_CEGOS-INTEGRATA_140px.jpg"
    ]
  },
  "icons": {
    "apple": [
      {
        "url": "/assets/cloned/images/5e2e3f0c6a24.png",
        "sizes": "57x57"
      },
      {
        "url": "/assets/cloned/images/21b096f62b91.png",
        "sizes": "72x72"
      },
      {
        "url": "/assets/cloned/images/0d9573e5a5ae.png",
        "sizes": "76x76"
      },
      {
        "url": "/assets/cloned/images/b3aa5fbc4994.png",
        "sizes": "114x114"
      },
      {
        "url": "/assets/cloned/images/affe24616e5b.png",
        "sizes": "120x120"
      },
      {
        "url": "/assets/cloned/images/ad0775b38fa0.png",
        "sizes": "144x144"
      },
      {
        "url": "/assets/cloned/images/1f4b6375f5d5.png",
        "sizes": "152x152"
      },
      {
        "url": "/assets/cloned/images/d8f67b6771fa.png",
        "sizes": "180x180"
      }
    ],
    "icon": [
      {
        "url": "/assets/cloned/images/1015d8c50ba3.png",
        "type": "image/png",
        "sizes": "16x16"
      },
      {
        "url": "/assets/cloned/images/f0594c1509e7.png",
        "type": "image/png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/4b86ed2e3ab1.png",
        "type": "image/png",
        "sizes": "96x96"
      },
      {
        "url": "/assets/cloned/images/b98ee1e04f3c.png",
        "type": "image/png",
        "sizes": "192x192"
      },
      {
        "url": "/assets/cloned/images/ad7de1f68110.png",
        "type": "image/png",
        "sizes": "512x512"
      }
    ]
  },
  "manifest": "/assets/cloned/manifest/3d26093d49c1.json"
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"de"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{ \"@context\": \"https://schema.org\", \"@type\": \"Organization\", \"url\": \"", "\", \"logo\": \"", "/assets/media/img/logo-baseline-4b2e8388.png\", \"contactPoint\": [ { \"@type\": \"ContactPoint\", \"telephone\": \"+33 1 55 00 95 95\", \"contactType\": \"customer service\", \"areaServed\": [\"FR\",\"DZ\",\"BE\",\"BJ\",\"BF\",\"BI\",\"CM\",\"CA\",\"KM\",\"CD\",\"CG\",\"CI\",\"DJ\",\"GF\",\"PF\",\"TF\",\"GA\",\"GN\",\"HT\",\"LU\",\"MG\",\"ML\",\"MQ\",\"MC\",\"MA\",\"NE\",\"RE\",\"RW\",\"SN\",\"SC\",\"CH\",\"TG\",\"VU\"] }, { \"@type\": \"ContactPoint\", \"telephone\": \"+33 1 55 00 95 99\", \"contactType\": \"customer service\", \"areaServed\": [\"FR\"] }, { \"@type\": \"ContactPoint\", \"telephone\": \"+49 711 62010 - 100\", \"contactType\": \"customer service\", \"areaServed\": \"DE\" }, { \"@type\": \"ContactPoint\", \"telephone\": \"+39 2 80672 673\", \"contactType\": \"customer service\", \"areaServed\": \"IT\" }, { \"@type\": \"ContactPoint\", \"telephone\": \"+351 213 191 960\", \"contactType\": \"customer service\", \"areaServed\": \"PT\" }, { \"@type\": \"ContactPoint\", \"telephone\": \"+34 91 270 50 00\", \"contactType\": \"customer service\", \"areaServed\": \"ES\" } ] }"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{ \"@context\": \"http://schema.org\", \"@type\": \"WebSite\", \"url\": \"", "\", \"name\": \"Cegos Integrata\", \"potentialAction\": { \"@type\": \"SearchAction\", \"target\": \"", "/suche?q={search_term_string}\", \"query-input\": \"required name=search_term_string\" } }"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="cn0">
        {children}
        <div className="box-content w-320 h-20 block fixed top-0 left-0 z-999 py-[2.1875rem] bg-foreground transform-[matrix(1,0,0,1,0,-150)] max-lg:hidden">
          <div className="box-content block relative max-w-[72.8125rem] mx-[37.5px] px-5 2xl:mx-[357.5px] after:content-[''] after:table after:w-0 after:h-0 max-lg:after:w-auto max-lg:after:h-auto">
            <form className="box-content block">
              <div className="box-content flex mx-[-7.5px] flex-wrap justify-between items-center">
                <div className="block max-w-[55%] px-[0.9375rem] basis-[55%]">
                  <div className="box-content block relative">
                    <input className="w-full h-10 border border-solid border-border inline-block py-[0.6875rem] pr-4.5 pl-[2.8125rem] overflow-clip leading-4 bg-background cursor-text" data-ditto-id="style-input-3" name="q" placeholder="Suche nach Stichwort" type="search" />
                  </div>
                </div>
                {" && config('laravel-theme-inter.CEGOS_COUNTRY') != 'neves') "}
                <div className="block max-w-[33%] px-[0.9375rem] basis-1/3">
                  <div className="box-content block relative">
                    <input className="w-full h-10 border border-solid border-border inline-block py-[0.6875rem] pr-4.5 pl-[2.8125rem] overflow-clip leading-4 bg-background cursor-text" data-ditto-id="style-input-4" name="datesrange" placeholder="Suche nach Datum" type="text" />
                  </div>
                </div>
                <div className="block max-w-[12%] px-[0.9375rem] basis-[12%]">
                  <button className="border border-solid border-clr-0 inline-block py-[0.5625rem] px-4.5 rounded-[40px] align-middle font-semibold leading-[1.125rem] text-center bg-background cursor-default" type="submit">
                    Suchen
                  </button>
                </div>
              </div>
            </form>
            <button className="w-6 h-6 block absolute -top-[2.1875rem] left-[76.5625rem] p-3 text-color-003 text-lg leading-[1.3125rem] text-center cursor-pointer" aria-label="Schließen" type="submit" />
          </div>
        </div>
        <a className="box-content hidden text-primary cursor-pointer" href="#popupCustom" id="btnPopupCustom">
          Display warning
        </a>
      </body>
    </html>
  );
}
