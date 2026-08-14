import "./globals.css";
import "./ditto-chrome.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Prof. Klemens Skibicki: Speaker für Digitalisierung & Wandel",
  "description": "Prof. Dr. Klemens Skibicki alias #Profski macht den digitalen Wandel verständlich → Buchen Sie motivierende Keynotes, Workshops und Strategieberatung!",
  "robots": "index,follow",
  "alternates": {
    "canonical": "https://profski.com/"
  },
  "openGraph": {
    "title": "Prof. Klemens Skibicki: Speaker für Digitalisierung & Wandel",
    "description": "Prof. Dr. Klemens Skibicki alias #Profski macht den digitalen Wandel verständlich → Buchen Sie motivierende Keynotes, Workshops und Strategieberatung!",
    "type": "website",
    "siteName": "PROFSKI GmbH",
    "url": "https://profski.com/",
    "images": [
      "https://profski.com/site/assets/files/1/2024-rewe-sge-tagung-online-110-upload-tmp.1200x630.jpg"
    ]
  },
  "icons": {
    "shortcut": [
      {
        "url": "/assets/cloned/images/9b8b07d8ba2b.png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/9bc5ecf0bae3.png",
        "sizes": "196x196"
      }
    ],
    "icon": [
      {
        "url": "/assets/cloned/images/776cfb4b7faa.png",
        "sizes": "128x128"
      },
      {
        "url": "/assets/cloned/images/17c35f043f33.png",
        "sizes": "192x192"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/bba6ac7e1440.png",
        "sizes": "152x152"
      },
      {
        "url": "/assets/cloned/images/ad42663fcbb1.png",
        "sizes": "180x180"
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
    <html lang={"de"}>
      <body className="cn0">
        {children}
        <footer className="block relative pt-10 text-background bg-accent">
          <div className="flex max-w-full px-[3.8rem] flex-wrap justify-between items-center max-lg:px-10 max-lg:flex-col max-lg:text-center">
            <div className="block pb-10 shrink-0">
              <a className="h-37 flex -ml-6 p-6 justify-center shrink-0 cursor-pointer" href="/" title="Startseite">
                <img className="w-full h-25 min-h-25 block max-w-62.5 overflow-clip object-contain align-middle" alt="Logo PROFSKI GmbH" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
              </a>
            </div>
            {" "}
            <div className="w-[9.9375rem] block ml-8 pb-10 shrink-0 max-md:w-[9.0625rem] max-lg:ml-0">
              <p className="block -mt-[0.2875rem] -mb-1.5 max-md:mt-[-4.1px] max-md:-mb-[0.3375rem]">
                {" PROFSKI GmbH"}
                <br className="inline" />
                {" Moltkestr. 67-69"}
                <br className="inline" />
                {" 50674 Köln"}
                <br className="inline" />
                {" "}
              </p>
              {" "}
            </div>
            {" "}
            <div className="block ml-8 pb-10 shrink-0 max-lg:ml-0">
              <a className="border-b-2 border-solid border-b-clr-0 inline-block -mb-0.5 whitespace-nowrap text-nowrap [direction:rtl] cursor-pointer" data-ditto-id="style-a" href="#" title="E-Mail schreiben">
                moc.iksforp@ofni
              </a>
              <br className="inline" />
              {" "}
            </div>
            {" "}
            <div className="w-41 flex ml-8 pb-10 shrink-0 max-md:w-[9.525rem] max-lg:ml-0">
              <a className="flex p-2 rounded-full cursor-pointer" href="https://www.linkedin.com/in/skibicki/" target="_blank">
                <i className="block italic leading-0">
                  {" "}
                  <svg className="w-auto h-8 inline overflow-hidden max-md:h-[1.8125rem]" data-ditto-id="style-ebene-1-2" id="Ebene_1" viewBox="0 0 500 500" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px" version="1.1" enable-background="new 0 0 500 500" fill="currentColor">
                    <g>
                      <path fill="#FFFFFF" d="M142.8,94.6c0,23.8-17.6,43.1-46.5,43.1c-27.2,0-44.8-19.3-44.8-43.1c0-24.4,18.1-43.1,45.9-43.1\n\t\tC125.2,51.5,142.2,70.2,142.8,94.6z M53.8,448.9V171.7H140v277.2H53.8z" />
                      <path fill="#FFFFFF" d="M191.5,260.2c0-34.6-1.1-63.5-2.3-88.4h74.8l4,38.5h1.7c11.3-18.1,39.1-44.8,85.6-44.8\n\t\tc56.7,0,99.2,38,99.2,119.6v163.8h-86.2V295.3c0-35.7-12.5-60.1-43.7-60.1c-23.8,0-38,16.4-44.2,32.3c-2.3,5.7-2.8,13.6-2.8,21.5\n\t\tv159.9h-86.2V260.2z" />
                    </g>
                  </svg>
                  {" "}
                </i>
              </a>
              {" "}
              <a className="flex ml-2.5 p-2 rounded-full cursor-pointer max-md:ml-[0.5625rem]" href="https://www.facebook.com/profski.klemens/?locale=de_DE" target="_blank">
                <i className="block italic leading-0">
                  <svg className="w-8 h-8 inline overflow-hidden max-md:w-[1.8125rem] max-md:h-[1.8125rem]" data-ditto-id="style-svg" height="28.533" viewBox="0 0 14.808 28.533" width="14.808" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <path id="Social_Media_Icon_FB" data-name="Social Media Icon FB" d="M56.747,63.812V50.8h4.368l.656-5.073H56.747V42.487c0-1.469.405-2.475,2.512-2.475h2.679V35.481a35.884,35.884,0,0,0-3.916-.2c-3.87,0-6.524,2.363-6.524,6.706v3.74H47.13V50.8h4.377V63.812Z" transform="translate(-47.13 -35.279)" fill="#fff" />
                  </svg>
                  {" "}
                </i>
              </a>
              {" "}
              <a className="flex ml-2.5 p-2 rounded-full cursor-pointer max-md:ml-[0.5625rem]" href="https://www.instagram.com/klemensskibicki_profski/?hl=de" target="_blank">
                <i className="block italic leading-0">
                  <svg className="w-8 h-8 inline overflow-hidden max-md:w-[1.8125rem] max-md:h-[1.8125rem]" data-ditto-id="style-social-media-icon-insta-2" height="27.587" id="Social_Media_Icon_Insta" viewBox="0 0 28.953 27.587" width="28.953" xmlns="http://www.w3.org/2000/svg" data-name="Social Media Icon Insta" fill="currentColor">
                    <path id="Pfad_149" data-name="Pfad 149" d="M52.221,58.9H41.132A8.932,8.932,0,0,1,32.2,49.966V40.223a8.932,8.932,0,0,1,8.932-8.913h11.09a8.932,8.932,0,0,1,8.932,8.932v9.743A8.932,8.932,0,0,1,52.221,58.9ZM41.132,33.29A6.941,6.941,0,0,0,34.2,40.223v9.761a6.941,6.941,0,0,0,6.933,6.933h11.09a6.941,6.941,0,0,0,6.933-6.933V40.223a6.941,6.941,0,0,0-6.933-6.933Z" transform="translate(-32.2 -31.31)" fill="#fff" />
                    <path id="Pfad_150" data-name="Pfad 150" d="M57.694,62.928a7.934,7.934,0,1,1,7.934-7.934,7.934,7.934,0,0,1-7.934,7.934Zm0-13.889a5.954,5.954,0,1,0,5.954,5.954A5.954,5.954,0,0,0,57.694,49.04Z" transform="translate(-43.225 -41.199)" fill="#fff" />
                    <path id="Pfad_151" data-name="Pfad 151" d="M90.937,44.935a1.645,1.645,0,1,1-.483-1.164A1.649,1.649,0,0,1,90.937,44.935Z" transform="translate(-67.008 -38.832)" fill="#fff" />
                  </svg>
                  {" "}
                </i>
              </a>
              {" "}
            </div>
            {" "}
            <div className="w-78.5 block ml-8 pb-10 shrink-0 max-md:w-71.5 max-lg:ml-0">
              <p className="flex -mt-[0.2875rem] -mb-1.5 uppercase max-md:mt-[-4.1px] max-md:-mb-[0.3375rem]">
                <a className="block py-2 pr-6 cursor-pointer" href="/impressum">
                  <span className="border-b-2 border-solid border-b-clr-0 inline -mb-0.5" data-ditto-id="style-span">
                    Impressum
                  </span>
                </a>
                {" "}
                <a className="border-l-2 border-solid border-l-background block py-2 pl-6 cursor-pointer" href="/datenschutz">
                  <span className="border-b-2 border-solid border-b-clr-0 inline -mb-0.5" data-ditto-id="style-span-2">
                    Datenschutz
                  </span>
                </a>
                {" "}
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </footer>
        <div className="block text-color-001 text-[0.9375rem] leading-[1.3125rem]">
          {" "}
          <div className="w-12 h-12 block fixed bottom-10 left-10 z-99999999 pointer-events-none max-lg:left-[0.9375rem] 2xl:[pointer-events:initial]" aria-label="Cookie-Zustimmung ändern" role="complementary">
            <button className="w-12 h-full min-h-[2.5625rem] block absolute top-0 left-0 opacity-0 max-w-full justify-center items-center text-color-002 leading-[0.9375rem] text-center shadow-[var(--clr-1)_0px_0px_6px_1px] cursor-pointer pointer-events-none 2xl:rounded-[0%] 2xl:[animation-name:ccm-icon-show--link] 2xl:[animation-duration:1s] 2xl:[animation-timing-function:cubic-bezier(0.5,_0,_0.5,_1.5)] 2xl:[animation-fill-mode:forwards] 2xl:opacity-[initial] 2xl:[pointer-events:initial]" data-ditto-id="style-cookie-zustimmung-ndern" aria-haspopup="dialog" aria-label="Cookie-Zustimmung ändern" title="Cookie-Zustimmung ändern" type="button">
              <img className="w-12 h-12 block overflow-clip aspect-[auto_48/48] align-middle pointer-events-none 2xl:[pointer-events:initial]" alt="Cookie-Zustimmung ändern" height="48" src="/assets/cloned/svg/35ba39f4cbb4.svg" width="48" />
              {" "}
            </button>
            {" "}
          </div>
          {" "}
        </div>
      </body>
    </html>
  );
}
