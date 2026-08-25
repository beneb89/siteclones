import "./globals.css";
import "./ditto-chrome.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Home - Double Your Freelancing",
  "description": "Free Email Course:",
  "robots": "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Home - Double Your Freelancing",
    "description": "Free Email Course:",
    "type": "website",
    "siteName": "Double Your Freelancing",
    "url": "/"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Home - Double Your Freelancing",
    "description": "Free Email Course:"
  },
  "icons": {
    "icon": [
      {
        "url": "https://doubleyourfreelancing.com/wp-content/uploads/2022/05/cropped-Favicon-1-32x32.png",
        "sizes": "32x32"
      },
      {
        "url": "https://doubleyourfreelancing.com/wp-content/uploads/2022/05/cropped-Favicon-1-192x192.png",
        "sizes": "192x192"
      }
    ],
    "apple": [
      {
        "url": "https://doubleyourfreelancing.com/wp-content/uploads/2022/05/cropped-Favicon-1-180x180.png"
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
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":[\"Person\",\"Organization\"],\"@id\":\"", "/#person\",\"name\":\"Zach Swinehart\",\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"", "/#logo\",\"url\":\"", "/wp-content/uploads/2023/03/dyf_logo_square.png\",\"contentUrl\":\"", "/wp-content/uploads/2023/03/dyf_logo_square.png\",\"caption\":\"Double Your Freelancing\",\"inLanguage\":\"en-US\",\"width\":\"800\",\"height\":\"800\"},\"image\":{\"@type\":\"ImageObject\",\"@id\":\"", "/#logo\",\"url\":\"", "/wp-content/uploads/2023/03/dyf_logo_square.png\",\"contentUrl\":\"", "/wp-content/uploads/2023/03/dyf_logo_square.png\",\"caption\":\"Double Your Freelancing\",\"inLanguage\":\"en-US\",\"width\":\"800\",\"height\":\"800\"}},{\"@type\":\"WebSite\",\"@id\":\"", "/#website\",\"url\":\"", "\",\"name\":\"Double Your Freelancing\",\"alternateName\":\"DYF\",\"publisher\":{\"@id\":\"", "/#person\"},\"inLanguage\":\"en-US\",\"potentialAction\":{\"@type\":\"SearchAction\",\"target\":\"", "/?s={search_term_string}\",\"query-input\":\"required name=search_term_string\"}},{\"@type\":\"ImageObject\",\"@id\":\"", "/wp-content/uploads/2021/11/mixergy.svg\",\"url\":\"", "/wp-content/uploads/2021/11/mixergy.svg\",\"width\":\"200\",\"height\":\"200\",\"inLanguage\":\"en-US\"},{\"@type\":\"WebPage\",\"@id\":\"", "/#webpage\",\"url\":\"", "/\",\"name\":\"Home - Double Your Freelancing\",\"datePublished\":\"2023-01-26T09:00:39+02:00\",\"dateModified\":\"2024-12-26T17:15:52+02:00\",\"about\":{\"@id\":\"", "/#person\"},\"isPartOf\":{\"@id\":\"", "/#website\"},\"primaryImageOfPage\":{\"@id\":\"", "/wp-content/uploads/2021/11/mixergy.svg\"},\"inLanguage\":\"en-US\"},{\"@type\":\"Person\",\"@id\":\"", "/author/reliableadmin/\",\"name\":\"Admin Admin\",\"url\":\"", "/author/reliableadmin/\",\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://secure.gravatar.com/avatar/e841db591b9906cc7112834359754e0957c0fd059357dd7156450f091aca6bb5?s=96&amp;d=mm&amp;r=g\",\"url\":\"https://secure.gravatar.com/avatar/e841db591b9906cc7112834359754e0957c0fd059357dd7156450f091aca6bb5?s=96&amp;d=mm&amp;r=g\",\"caption\":\"Admin Admin\",\"inLanguage\":\"en-US\"}},{\"@type\":\"Article\",\"headline\":\"Home - Double Your Freelancing\",\"datePublished\":\"2023-01-26T09:00:39+02:00\",\"dateModified\":\"2024-12-26T17:15:52+02:00\",\"author\":{\"@id\":\"", "/author/reliableadmin/\",\"name\":\"Admin Admin\"},\"publisher\":{\"@id\":\"", "/#person\"},\"description\":\"Free Email Course:\",\"name\":\"Home - Double Your Freelancing\",\"@id\":\"", "/#richSnippet\",\"isPartOf\":{\"@id\":\"", "/#webpage\"},\"image\":{\"@id\":\"", "/wp-content/uploads/2021/11/mixergy.svg\"},\"inLanguage\":\"en-US\",\"mainEntityOfPage\":{\"@id\":\"", "/#webpage\"}}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="cn0">
        {children}
        <div className="h-[54.925rem] block absolute top-0 inset-x-0 -z-1 max-h-[1e+06px] transform-[matrix(1,0,0,1,0,-878.812)] max-md:h-[59.5625rem] max-md:transform-[matrix(1,0,0,1,0,-953.031)] md:max-lg:h-256 md:max-lg:transform-[matrix(1,0,0,1,0,-1024)] 2xl:hidden">
          <div className="h-full block max-h-[1e+06px] 2xl:hidden" id="tve_tcb2_blank">
            <div className="h-full block max-h-[1e+06px] 2xl:hidden">
              <div className="h-full block max-h-[1e+06px] 2xl:hidden">
                <div className="h-full block max-h-[1e+06px] 2xl:hidden after:content-[''] after:block after:w-full after:h-0 2xl:after:hidden" id="tve_editor">
                  <div className="h-full min-h-screen block max-h-[1e+06px] pt-px pb-25 px-px 2xl:hidden">
                    <div className="h-[54.925rem] min-h-2.5 block fixed top-0 inset-x-0 z-0 max-w-full max-h-[1e+06px] overflow-hidden 2xl:hidden">
                      <div className="h-[57.425rem] block absolute -top-5 -right-20 -left-5 max-h-[1e+06px] overflow-hidden [background-size:auto,_cover] [background-position:50%_50%,_50%_50%] [background-repeat:no-repeat,_no-repeat] [background-clip:padding-box,_padding-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [filter:grayscale(0)_brightness(1)_contrast(1)_blur(7px)_sepia(0)_invert(0)_saturate(1)_hue-rotate(0deg)] [-webkit-background-clip:padding-box,_padding-box] max-md:h-[62.0625rem] md:max-lg:h-266 2xl:hidden" style={{ backgroundImage: "linear-gradient(var(--clr-0), var(--clr-0)), url(\"/assets/cloned/images/176da722992e.jpg\")" }} />
                      {" "}
                      <div className="w-full h-200 min-h-2.5 inline-block relative clear-both z-1 max-h-[1e+06px] align-middle max-md:h-203 md:max-lg:h-256 2xl:hidden" />
                      {" "}
                    </div>
                    <div className="block relative z-4 max-h-[1e+06px] pt-15 pb-5 px-15 max-lg:pt-5 max-lg:px-5 2xl:hidden">
                      <div className="w-319.5 h-full block absolute top-0 left-0 max-h-[1e+06px] overflow-hidden max-md:w-[23.3125rem] md:max-lg:w-191.5 2xl:hidden" />
                      {" "}
                      <div className="h-[36.3625rem] min-h-129.5 block relative z-1 max-w-335 max-h-[1e+06px] max-md:h-[43.5rem] md:max-lg:h-[34.475rem] 2xl:hidden">
                        <div className="h-full min-h-2.5 block relative max-w-250 max-h-[1e+06px] mx-auto pt-15 pb-10 px-15 max-md:pt-7.5 max-md:pb-2.5 max-md:px-5 md:max-lg:pt-10 md:max-lg:pb-5 md:max-lg:px-10 2xl:hidden">
                          <div className="w-250 h-full block absolute top-0 left-0 max-h-[1e+06px] overflow-hidden bg-color-003 [background-clip:padding-box] [-webkit-background-clip:padding-box] max-md:w-[20.8125rem] md:max-lg:w-181.5 2xl:hidden" />
                          {" "}
                          <div className="w-full h-full min-h-2.5 inline-block relative clear-both z-1 max-h-[1e+06px] align-middle text-center max-md:text-left 2xl:hidden">
                            <div className="block max-h-[1e+06px] p-px [overflow-wrap:break-word] 2xl:hidden">
                              <h1 className="block max-h-[1e+06px] text-[3.6875rem] font-bold leading-[3.6875rem] max-md:text-4xl max-md:leading-9 md:max-lg:text-[2.5rem] md:max-lg:leading-10 2xl:hidden">
                                <em className="inline-block relative max-h-[1e+06px] 2xl:hidden" data-ditto-id="style-em-5">
                                  Double
                                </em>
                                {" your rates."}
                              </h1>
                            </div>
                            <div className="block max-h-[1e+06px] mt-7.5 mb-[0.9375rem] p-px [overflow-wrap:break-word] 2xl:hidden">
                              <p className="block max-h-[1e+06px] 2xl:hidden">
                                {"This free 9-lesson course gives you a "}
                                <strong className="inline max-h-[1e+06px] font-bold 2xl:hidden">
                                  <span className="inline max-h-[1e+06px] text-color-007 2xl:hidden">
                                    personalized plan of action
                                  </span>
                                </strong>
                                {" that covers..."}
                              </p>
                            </div>
                            <div className="block max-h-[1e+06px] p-px 2xl:hidden">
                              <ul className="block max-h-[1e+06px] [list-style-type:none] list-outside 2xl:hidden">
                                <li className="flex max-h-[1e+06px] mb-5 justify-center items-start content-start [word-break:break-word] 2xl:hidden">
                                  <div className="block relative z-1 max-h-[1e+06px] 2xl:hidden">
                                    <div className="box-content table max-h-[1e+06px] pt-[0.1875rem] pr-1.5 pb-px pl-px leading-0 max-md:text-center 2xl:hidden">
                                      <svg className="box-content w-4.5 h-4.5 inline-block max-h-[1e+06px] overflow-hidden align-middle text-color-007 leading-4.5 2xl:hidden" viewBox="0 0 448 512" data-id="icon-check-double-light" data-name="" fill="currentColor">
                                        <path d="M444.96 159l-12.16-11c-2.03-2.67-4.72-4-8.11-4s-6.08 1.33-8.11 4L131.77 428 31.42 329c-2.03-2.67-4.72-4-8.11-4s-6.08 1.33-8.11 4L3.04 340C1.01 342.67 0 345.67 0 349s1.01 6 3.04 8l120.62 119c2.69 2.67 5.57 4 8.62 4s5.92-1.33 8.62-4l304.07-300c2.03-2 3.04-4.67 3.04-8s-1.02-6.33-3.05-9zM127.17 284.03c2.65 2.65 5.48 3.97 8.47 3.97s5.82-1.32 8.47-3.97L365.01 63.8c1.99-2 2.99-4.65 2.99-7.96s-1-6.29-2.99-8.94l-11.96-10.93c-1.99-2.65-4.64-3.97-7.97-3.97s-5.98 1.32-7.97 3.97L135.14 236.34l-72.25-72.03c-1.99-2.65-4.64-3.97-7.97-3.97s-5.98 1.32-7.97 3.97l-11.96 10.93C33 177.89 32 180.87 32 184.18s1 5.96 2.99 7.95l92.18 91.9z" />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="block z-0 max-h-[1e+06px] leading-[1.4375rem] 2xl:hidden">
                                    How to reframe the way you present yourself to clients
                                  </span>
                                </li>
                                <li className="flex max-h-[1e+06px] mb-5 justify-center items-start content-start [word-break:break-word] 2xl:hidden">
                                  <div className="block relative z-1 max-h-[1e+06px] 2xl:hidden">
                                    <div className="box-content table max-h-[1e+06px] pt-[0.1875rem] pr-1.5 pb-px pl-px leading-0 max-md:text-center 2xl:hidden">
                                      <svg className="box-content w-4.5 h-4.5 inline-block max-h-[1e+06px] overflow-hidden align-middle text-color-007 leading-4.5 2xl:hidden" viewBox="0 0 448 512" data-id="icon-check-double-light" data-name="" fill="currentColor">
                                        <path d="M444.96 159l-12.16-11c-2.03-2.67-4.72-4-8.11-4s-6.08 1.33-8.11 4L131.77 428 31.42 329c-2.03-2.67-4.72-4-8.11-4s-6.08 1.33-8.11 4L3.04 340C1.01 342.67 0 345.67 0 349s1.01 6 3.04 8l120.62 119c2.69 2.67 5.57 4 8.62 4s5.92-1.33 8.62-4l304.07-300c2.03-2 3.04-4.67 3.04-8s-1.02-6.33-3.05-9zM127.17 284.03c2.65 2.65 5.48 3.97 8.47 3.97s5.82-1.32 8.47-3.97L365.01 63.8c1.99-2 2.99-4.65 2.99-7.96s-1-6.29-2.99-8.94l-11.96-10.93c-1.99-2.65-4.64-3.97-7.97-3.97s-5.98 1.32-7.97 3.97L135.14 236.34l-72.25-72.03c-1.99-2.65-4.64-3.97-7.97-3.97s-5.98 1.32-7.97 3.97l-11.96 10.93C33 177.89 32 180.87 32 184.18s1 5.96 2.99 7.95l92.18 91.9z" />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="block z-0 max-h-[1e+06px] leading-[1.4375rem] 2xl:hidden">
                                    How to clearly communicate the value you produce
                                  </span>
                                </li>
                                <li className="flex max-h-[1e+06px] mb-5 justify-center items-start content-start [word-break:break-word] 2xl:hidden">
                                  <div className="block relative z-1 max-h-[1e+06px] 2xl:hidden">
                                    <div className="box-content table max-h-[1e+06px] pt-[0.1875rem] pr-1.5 pb-px pl-px leading-0 max-md:text-center 2xl:hidden">
                                      <svg className="box-content w-4.5 h-4.5 inline-block max-h-[1e+06px] overflow-hidden align-middle text-color-007 leading-4.5 2xl:hidden" viewBox="0 0 448 512" data-id="icon-check-double-light" data-name="" fill="currentColor">
                                        <path d="M444.96 159l-12.16-11c-2.03-2.67-4.72-4-8.11-4s-6.08 1.33-8.11 4L131.77 428 31.42 329c-2.03-2.67-4.72-4-8.11-4s-6.08 1.33-8.11 4L3.04 340C1.01 342.67 0 345.67 0 349s1.01 6 3.04 8l120.62 119c2.69 2.67 5.57 4 8.62 4s5.92-1.33 8.62-4l304.07-300c2.03-2 3.04-4.67 3.04-8s-1.02-6.33-3.05-9zM127.17 284.03c2.65 2.65 5.48 3.97 8.47 3.97s5.82-1.32 8.47-3.97L365.01 63.8c1.99-2 2.99-4.65 2.99-7.96s-1-6.29-2.99-8.94l-11.96-10.93c-1.99-2.65-4.64-3.97-7.97-3.97s-5.98 1.32-7.97 3.97L135.14 236.34l-72.25-72.03c-1.99-2.65-4.64-3.97-7.97-3.97s-5.98 1.32-7.97 3.97l-11.96 10.93C33 177.89 32 180.87 32 184.18s1 5.96 2.99 7.95l92.18 91.9z" />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="block z-0 max-h-[1e+06px] leading-[1.4375rem] 2xl:hidden">
                                    The questions you need to ask potential clients
                                    <br className="inline max-h-[1e+06px] 2xl:hidden" />
                                  </span>
                                </li>
                                <li className="flex max-h-[1e+06px] mb-5 justify-center items-start content-start [word-break:break-word] 2xl:hidden">
                                  <div className="block relative z-1 max-h-[1e+06px] 2xl:hidden">
                                    <div className="box-content block max-h-[1e+06px] pt-[0.1875rem] pr-1.5 pb-px pl-px leading-0 max-md:text-center 2xl:hidden">
                                      <svg className="box-content w-4.5 h-4.5 inline-block max-h-[1e+06px] overflow-hidden align-middle text-color-007 leading-4.5 2xl:hidden" viewBox="0 0 448 512" data-id="icon-check-double-light" data-name="" fill="currentColor">
                                        <path d="M444.96 159l-12.16-11c-2.03-2.67-4.72-4-8.11-4s-6.08 1.33-8.11 4L131.77 428 31.42 329c-2.03-2.67-4.72-4-8.11-4s-6.08 1.33-8.11 4L3.04 340C1.01 342.67 0 345.67 0 349s1.01 6 3.04 8l120.62 119c2.69 2.67 5.57 4 8.62 4s5.92-1.33 8.62-4l304.07-300c2.03-2 3.04-4.67 3.04-8s-1.02-6.33-3.05-9zM127.17 284.03c2.65 2.65 5.48 3.97 8.47 3.97s5.82-1.32 8.47-3.97L365.01 63.8c1.99-2 2.99-4.65 2.99-7.96s-1-6.29-2.99-8.94l-11.96-10.93c-1.99-2.65-4.64-3.97-7.97-3.97s-5.98 1.32-7.97 3.97L135.14 236.34l-72.25-72.03c-1.99-2.65-4.64-3.97-7.97-3.97s-5.98 1.32-7.97 3.97l-11.96 10.93C33 177.89 32 180.87 32 184.18s1 5.96 2.99 7.95l92.18 91.9z" />
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="block z-0 max-h-[1e+06px] leading-[1.4375rem] 2xl:hidden">
                                    A framework for pitching on value and winning deals
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="block relative max-w-150 max-h-[1e+06px] mx-35 p-px max-lg:max-w-full max-lg:mx-0 2xl:hidden after:content-[''] after:block after:absolute after:top-0 after:right-150 after:bottom-[10.5875rem] after:left-0 after:w-0 after:h-0 max-md:after:right-[18.3125rem] max-md:after:bottom-[11.2125rem] md:max-lg:after:right-161.5 2xl:after:hidden" id="lg-lemxbrxy">
                              {" "}
                              <div className="block max-h-[1e+06px] 2xl:hidden after:content-[''] after:block after:w-full after:h-0 2xl:after:hidden">
                                <form className="block max-h-[1e+06px] mb-[1.8rem] 2xl:hidden">
                                  <div className="block max-h-[1e+06px] text-color-010 [font-family:Roboto,_sans-serif] 2xl:hidden">
                                    <div className="flex relative z-1 max-h-[1e+06px] mb-2.5 2xl:hidden">
                                      <input className="w-full h-[3.8125rem] block max-w-full max-h-[1e+06px] py-4.5 px-3.5 rounded-[5px] flex-1 overflow-clip text-color-018 [font-family:'Cera_Pro'] text-[1.0625rem] leading-[1.5625rem] text-left bg-surface-4 cursor-text max-md:my-[0.3125rem] max-md:rounded-[3px] max-md:[text-align:inherit] 2xl:hidden" data-ditto-id="style-input" name="email" placeholder="Your BEST email..." type="email" value="" />
                                    </div>
                                    <div className="table relative z-1 min-w-full max-w-full max-h-[1e+06px] mt-5 2xl:hidden">
                                      <a className="w-full h-[3.6rem] inline-flex max-h-[1e+06px] p-4.5 flex-row-reverse items-center overflow-hidden text-background leading-[1.375rem] bg-primary cursor-pointer max-md:text-center 2xl:hidden" href="#">
                                        <span className="block relative max-h-[1e+06px] pl-[0.9375rem] leading-0 2xl:hidden before:content-[''] before:hidden before:absolute before:-inset-y-25 before:left-2.5 before:w-px before:bg-clr-1 2xl:before:hidden">
                                          {" "}
                                          <div className="box-content table max-h-[1e+06px] 2xl:hidden">
                                            <svg className="box-content w-auto h-4.5 inline-block max-h-[1e+06px] overflow-hidden align-middle leading-4.5 2xl:hidden" viewBox="0 0 24 24" data-id="icon-trending_flat-duotone" data-name="" fill="currentColor">
                                              <path fill="none" d="M0 0h24v24H0V0z" />
                                              <path d="M22 12l-4-4v3H3v2h15v3l4-4z" />
                                            </svg>
                                          </div>
                                          {" "}
                                        </span>
                                        {" "}
                                        <span className="block relative max-h-[1e+06px] flex-1 2xl:hidden before:content-[''] before:hidden before:absolute before:-inset-y-25 before:left-2.5 before:w-px before:bg-clr-1 2xl:before:hidden">
                                          <span className="block max-h-[1e+06px] [font-family:'Cera_Pro'] text-[0.875rem] tracking-[2px] uppercase 2xl:hidden">
                                            <strong className="inline max-h-[1e+06px] font-bold 2xl:hidden">
                                              Get Started
                                            </strong>
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              {" "}
                            </div>
                          </div>
                          {" "}
                        </div>
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="box-content w-12 h-12 table relative z-9 max-h-[1e+06px] my-5 mx-auto p-3.5 rounded-[176px] overflow-hidden text-background text-5xl leading-0 text-center bg-no-repeat cursor-pointer 2xl:hidden" style={{ backgroundImage: "linear-gradient(var(--clr-2), var(--clr-2))" }}>
                      <svg className="box-content w-12 h-12 inline-block max-h-[1e+06px] overflow-hidden align-middle leading-12 2xl:hidden" viewBox="0 0 448 512" data-id="icon-arrow-down-solid" data-name="" fill="currentColor">
                        <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" />
                      </svg>
                    </div>
                    {" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="w-px h-px hidden absolute max-h-[1e+06px] -m-px overflow-hidden [clip-path:inset(50%)]" id="a11y-speak-intro-text">
          Notifications
        </p>
        <div className="block max-h-[1e+06px]">
          <div className="block max-h-[1e+06px]">
            <div className="block max-h-[1e+06px]" id="tve_tcb2_blank">
              <div className="block max-h-[1e+06px]" />
            </div>
          </div>
        </div>
        <div className="block max-h-[1e+06px]">
          <div className="block max-h-[1e+06px]">
            <div className="block max-h-[1e+06px]" id="tve_tcb2_blank">
              <div className="block max-h-[1e+06px]" />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
