import Illustration from "../svgs/svg-illustration";
import Icon from "../svgs/svg-icon";
import CardGridItem from "../components/card-grid-item";
import Icon6 from "../svgs/svg-icon6";
import Icon7 from "../svgs/svg-icon7";
import Logo, { type LogoData } from "../components/logo";
import CardGridItem2 from "../components/card-grid-item2";
import Icon17 from "../svgs/svg-icon17";
import Icon18 from "../svgs/svg-icon18";
import { CardGridItem_styles, Logo_styles } from "../_styles";
import { cards as cardsContent, cards2 as cards2Content } from "../content";
const Logo_data: LogoData[] = [
    { href: "/industries/ecommerce", icon: <>
              <path d="M15.0001 8C15.0001 9.65685 13.6569 11 12.0001 11C10.3432 11 9.00008 9.65685 9.00008 8M4.88288 5.87524L4.13288 17.8752C4.06092 19.0266 4.97534 20 6.12899 20H17.8712C19.0248 20 19.9392 19.0266 19.8673 17.8752L19.1173 5.87524C19.0514 4.82117 18.1773 4 17.1212 4H6.87899C5.82286 4 4.94876 4.82117 4.88288 5.87524Z" stroke="white" style={{ stroke: "white", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" />
              </>, label: "E-Commerce & Retail" },
    { href: "/industries/agencies", icon: <>
              <path d="M3 11H21V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V11Z" stroke="white" style={{ stroke: "white", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 11V4C13 3.44772 13.4477 3 14 3H18C18.5523 3 19 3.44772 19 4V11" stroke="white" style={{ stroke: "white", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.0039 7H15.0039" stroke="white" style={{ stroke: "white", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.00391 11V6.20156C5.00391 5.74742 5.15847 5.3068 5.44217 4.95217L6.69156 3.39043C6.88898 3.14366 7.18788 3 7.50391 3C7.81994 3 8.11883 3.14366 8.31625 3.39043L9.56564 4.95217C9.84934 5.3068 10.0039 5.74742 10.0039 6.20156V11" stroke="white" style={{ stroke: "white", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </>, label: "Agencies" },
    { href: "/industries/mobile-apps", icon: <>
              <path d="M8 10V12M8 12V14M8 12H10M8 12H6M6 6H18C20.2091 6 22 7.79086 22 10V14C22 16.2091 20.2091 18 18 18H6C3.79086 18 2 16.2091 2 14V10C2 7.79086 3.79086 6 6 6Z" stroke="white" style={{ stroke: "white", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.875 13.5C13.875 13.9832 14.2668 14.375 14.75 14.375C15.2332 14.375 15.625 13.9832 15.625 13.5C15.625 13.0168 15.2332 12.625 14.75 12.625C14.2668 12.625 13.875 13.0168 13.875 13.5ZM16.875 10.5C16.875 10.9832 17.2668 11.375 17.75 11.375C18.2332 11.375 18.625 10.9832 18.625 10.5C18.625 10.0168 18.2332 9.625 17.75 9.625C17.2668 9.625 16.875 10.0168 16.875 10.5Z" fill="white" stroke="white" style={{ fill: "white", fillOpacity: "1", stroke: "white", strokeOpacity: "1" }} strokeWidth="0.75" strokeLinecap="square" />
              </>, label: "Mobile Apps & Gaming" },
    { href: "/industries/b2b-saas", icon: <>
              <path d="M21 12.25V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V18C3 19.1046 3.89543 20 5 20H12" stroke="white" style={{ stroke: "white", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.875 8.75C5.875 9.23325 6.26675 9.625 6.75 9.625C7.23325 9.625 7.625 9.23325 7.625 8.75C7.625 8.26675 7.23325 7.875 6.75 7.875C6.26675 7.875 5.875 8.26675 5.875 8.75ZM9.375 8.75C9.375 9.23325 9.76675 9.625 10.25 9.625C10.7332 9.625 11.125 9.23325 11.125 8.75C11.125 8.26675 10.7332 7.875 10.25 7.875C9.76675 7.875 9.375 8.26675 9.375 8.75ZM12.875 8.75C12.875 9.23325 13.2668 9.625 13.75 9.625C14.2332 9.625 14.625 9.23325 14.625 8.75C14.625 8.26675 14.2332 7.875 13.75 7.875C13.2668 7.875 12.875 8.26675 12.875 8.75Z" fill="white" stroke="white" style={{ fill: "white", fillOpacity: "1", stroke: "white", strokeOpacity: "1" }} strokeWidth="0.75" strokeLinecap="square" />
              <path d="M15.5 15.5L22 17.5L19 19L17.5 22L15.5 15.5Z" stroke="white" style={{ stroke: "white", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
              </>, label: "B2B & SaaS" },
    { href: "/industries/info-education-community", icon: <>
              <path d="M8.74775 15.4838V17.25C8.74775 17.8023 9.19547 18.25 9.74775 18.25H14.2501C14.8024 18.25 15.2501 17.8023 15.2501 17.25V15.4838M8.74775 15.4838C8.33524 15.2765 7.94523 15.031 7.58239 14.7519C5.85882 13.4264 4.74805 11.3433 4.74805 9.00089C4.74805 4.99633 7.99438 1.75 11.9989 1.75C16.0035 1.75 19.2498 4.99633 19.2498 9.00089C19.2498 11.3433 18.139 13.4264 16.4155 14.7519C16.0526 15.031 15.6626 15.2765 15.2501 15.4838M8.74775 15.4838H15.2501M9.74982 21.25H14.2498" stroke="white" style={{ stroke: "white", strokeOpacity: "1" }} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </>, label: "Info, Education & Community" },
    { href: "/industries/freelancers-creators", icon: <>
              <path d="M8.75 11C10.683 11 12.25 9.433 12.25 7.5C12.25 5.567 10.683 4 8.75 4C6.817 4 5.25 5.567 5.25 7.5C5.25 9.433 6.817 11 8.75 11Z" stroke="white" style={{ stroke: "white", strokeOpacity: "1" }} strokeWidth="2" />
              <path d="M2 20C2 16.6863 4.68629 14 8 14H8.5" stroke="white" style={{ stroke: "white", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11 20L12.6892 14.0879C12.8732 13.444 13.4617 13 14.1315 13H20.5417C21.2725 13 21.8001 13.6995 21.5994 14.4022L20.2072 19.2747C20.0846 19.704 19.6922 20 19.2457 20H11ZM11 20H7" stroke="white" style={{ stroke: "white", strokeOpacity: "1" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </>, label: "Freelancers & Creators" }
];
/** Top navigation bar. */
export default function Navbar({ cards = cardsContent, logos = Logo_data, cards2 = cards2Content } = {}) {
  return (
    <div className="h-18 block sticky top-0 z-100 text-color-001 bg-clr-0 [backdrop-filter:blur(24px)] max-md:bg-clr-1 max-md:[backdrop-filter:initial] before:content-['_'] before:table before:w-0 before:h-0 before:text-color-001 before:text-base before:leading-6 before:tracking-[-0.18px] after:content-['_'] after:table after:w-0 after:h-0 after:text-color-001 after:text-base after:leading-6 after:tracking-[-0.18px]" role="banner">
      <div className="flex max-w-360 px-10 justify-between items-center mx-auto max-lg:relative max-lg:z-5 max-lg:px-2">
        <div className="w-full h-18 flex relative p-4 justify-between items-center gap-9 max-lg:py-3">
          <a className="h-10 block relative float-left p-1 rounded-[10px] justify-center items-center text-color-009 cursor-pointer max-lg:z-5" data-component="link" aria-label="home" href="/">
            <div className="h-8 block hover:opacity-[0.803307] focus:opacity-[0.996849]">
              <div className="flex justify-center items-center before:content-['_'] before:table before:w-0 before:h-0 before:text-color-009 before:text-base before:leading-6 before:tracking-[-0.18px] after:content-['_'] after:table after:w-0 after:h-0 after:text-color-009 after:text-base after:leading-6 after:tracking-[-0.18px]">
                <Illustration />
              </div>
            </div>
            <div className="w-px h-px block absolute -m-px">
              Foreplay
            </div>
          </a>
          <nav className="block float-right flex-1 max-lg:hidden" data-component="nav" role="navigation">
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-3">
                <div className="block z-900 text-left">
                  <div className="flex relative py-1.5 pr-1.5 pl-2.5 rounded-[10px] justify-start items-center gap-1 align-top text-color-006 whitespace-nowrap text-nowrap cursor-pointer hover:border-color-003 hover:text-color-003 hover:outline-color-003 hover:[text-decoration-color:var(--color-003)] focus:border-color-006 focus:outline-color-006 focus:[text-decoration-color:var(--color-006)]" data-component="button" aria-controls="w-dropdown-list-0" aria-expanded="false" aria-haspopup="menu" id="w-dropdown-toggle-0" role="button">
                    <div className="block text-[0.9375rem] leading-5 hover:border-color-006 hover:text-color-006 hover:outline-color-006 hover:[text-decoration-color:var(--color-006)] focus:border-color-006 focus:text-color-006 focus:outline-color-006 focus:[text-decoration-color:var(--color-006)]">
                      Product
                    </div>
                    <div className="w-5 h-5 block">
                      <div className="flex justify-center items-center before:content-['_'] before:table before:w-0 before:h-0 before:text-color-006 before:text-base before:leading-6 before:tracking-[-0.18px] before:text-left max-lg:before:text-color-002 max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-color-006 after:text-base after:leading-6 after:tracking-[-0.18px] after:text-left max-lg:after:text-color-002 max-lg:after:w-auto max-lg:after:h-auto" data-ditto-id="motion-div">
                        <Icon />
                      </div>
                    </div>
                  </div>
                  <nav className="w-300 h-[22.6875rem] block absolute top-18 left-0 opacity-0 min-w-full -mt-[0.3125rem] transform-[matrix(0.96,0,0,0.96,0,-8)] origin-[600px_181.5px] pointer-events-none max-lg:hidden" aria-hidden="true" aria-labelledby="w-dropdown-toggle-0" id="w-dropdown-list-0">
                    <div className="border border-solid border-color-008 block rounded-[28px] overflow-hidden bg-background pointer-events-none">
                      <div className="flex justify-between grid-cols-[1fr_1fr] grid-rows-[auto_auto] [grid-auto-columns:1fr] pointer-events-none">
                        <div className="w-full grid flex-1 grid-cols-[83.3906px_83.4062px_83.3906px_83.4062px_83.4062px_83.3906px_83.4062px_83.3906px_83.4062px_83.4062px] [grid-auto-columns:1fr] pointer-events-none 2xl:grid-cols-[99.3906px_99.4062px_99.3906px_99.4062px_99.4062px_99.3906px_99.4062px_99.3906px_99.4062px_99.4062px]">
                          {cards.map((d, i) => <CardGridItem key={d.variant} d={d} styles={CardGridItem_styles[i]} />)}
                        </div>
                        <div className="w-91 flex max-w-91 flex-col shrink-0 pointer-events-none max-lg:hidden">
                          <div className="h-[22.5625rem] min-h-51 border-l border-solid border-l-color-008 flex pt-20 px-6 flex-col justify-start items-center flex-1 gap-5 pointer-events-none">
                            <div className="flex relative z-2 max-w-50 flex-col justify-start items-center gap-1 text-center pointer-events-none">
                              <div className="block items-center text-color-002 pointer-events-none">
                                <div className="flex justify-start items-center gap-[0.3125rem] whitespace-nowrap text-nowrap pointer-events-none">
                                  <div className="w-5 h-5 block pointer-events-none">
                                    <div className="flex justify-center items-center pointer-events-none before:content-['_'] before:table before:w-0 before:h-0 before:text-color-002 before:text-base before:leading-6 before:tracking-[-0.18px] before:text-center max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-color-002 after:text-base after:leading-6 after:tracking-[-0.18px] after:text-center max-lg:after:w-auto max-lg:after:h-auto">
                                      <Icon6 />
                                    </div>
                                  </div>
                                  <div className="block text-sm font-medium leading-5 tracking-[-0.09px] pointer-events-none">
                                    What is Foreplay?
                                  </div>
                                </div>
                              </div>
                            </div>
                            <a className="w-full h-37.5 block relative max-w-60 rounded-[10px] justify-center items-center overflow-hidden text-primary cursor-pointer pointer-events-none" data-ditto-id="menu-trigger-open-lightbox" data-component="link" aria-haspopup="dialog" aria-label="open lightbox" href="#">
                              <div className="w-60 h-37.5 flex relative z-3 justify-center items-center overflow-hidden text-color-002 pointer-events-none">
                                <video className="w-60 h-37.5 block absolute -top-37.5 -left-60 -z-100 min-w-0 my-37.5 mx-60 overflow-clip object-cover bg-cover [background-position:50%_50%] pointer-events-none" style={{ backgroundImage: "url(\"/assets/cloned/images/04a6aa94d3d9.jpg\")" }} autoPlay id="0a49ffe0-7e63-111d-d8ae-e4ef2a546b58-video" loop muted playsInline>
                                  <source className="inline text-clr-2 [font-family:'Times_New_Roman'] leading-4.5 tracking-[normal] text-start" src="/assets/cloned/videos/250058184c3d.mp4" />
                                  <source className="inline text-clr-2 [font-family:'Times_New_Roman'] leading-4.5 tracking-[normal] text-start" src="/assets/cloned/videos/c028f99f53fd.webm" />
                                </video>
                                <div className="w-12.5 h-12.5 flex rounded-[100px] justify-center items-center bg-color-006 [backdrop-filter:blur(10px)] pointer-events-none">
                                  <div className="w-5 h-5 block pointer-events-none before:content-['_'] before:table before:w-0 before:h-0 before:text-color-002 before:text-base before:leading-6 before:tracking-[-0.18px] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-color-002 after:text-base after:leading-6 after:tracking-[-0.18px] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
                                    <Icon7 />
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="block z-900 text-left">
                  <div className="flex relative py-1.5 pr-1.5 pl-2.5 rounded-[10px] justify-start items-center gap-1 align-top text-color-006 whitespace-nowrap text-nowrap cursor-pointer hover:border-color-003 hover:text-color-003 hover:outline-color-003 hover:[text-decoration-color:var(--color-003)] focus:border-color-006 focus:outline-color-006 focus:[text-decoration-color:var(--color-006)]" data-component="button" aria-controls="w-dropdown-list-1" aria-expanded="false" aria-haspopup="menu" id="w-dropdown-toggle-1" role="button">
                    <div className="block text-[0.9375rem] leading-5 hover:border-color-006 hover:text-color-006 hover:outline-color-006 hover:[text-decoration-color:var(--color-006)] focus:border-color-006 focus:text-color-006 focus:outline-color-006 focus:[text-decoration-color:var(--color-006)]">
                      Solutions
                    </div>
                    <div className="w-5 h-5 block">
                      <div className="flex justify-center items-center before:content-['_'] before:table before:w-0 before:h-0 before:text-color-006 before:text-base before:leading-6 before:tracking-[-0.18px] before:text-left max-lg:before:text-color-002 max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-color-006 after:text-base after:leading-6 after:tracking-[-0.18px] after:text-left max-lg:after:text-color-002 max-lg:after:w-auto max-lg:after:h-auto" data-ditto-id="motion-div-7">
                        <Icon />
                      </div>
                    </div>
                  </div>
                  <nav className="w-300 h-58.5 block absolute top-18 left-0 opacity-0 min-w-full -mt-[0.3125rem] transform-[matrix(0.96,0,0,0.96,0,-8)] origin-[600px_117px] pointer-events-none max-lg:hidden" aria-hidden="true" aria-labelledby="w-dropdown-toggle-1" id="w-dropdown-list-1">
                    <div className="border border-solid border-color-008 block rounded-[28px] overflow-hidden bg-background pointer-events-none">
                      <div className="grid justify-between grid-cols-[99.8281px_99.8281px_99.8438px_99.8281px_99.8281px_99.8438px_99.8281px_99.8281px_99.8438px_99.8281px_99.8281px_99.8438px] [grid-auto-columns:1fr] pointer-events-none 2xl:grid-cols-[113.156px_113.172px_113.156px_113.172px_113.172px_113.156px_113.172px_113.172px_113.156px_113.172px_113.172px_113.156px]">
                        <div className="flex pt-4 pb-5 px-4 flex-col justify-start items-start gap-4 col-start-[span_12] col-end-[span_12] row-start-[span_1] row-end-[span_1] pointer-events-none" id="w-node-e28f6933-880f-1861-e726-40b46ef45100-77db8ed6">
                          <div className="w-full flex mb-2 p-2 rounded-md justify-start items-center text-color-003 pointer-events-none">
                            <div className="block text-xs [font-weight:550] leading-4 tracking-[2px] uppercase pointer-events-none">
                              {"Foreplay is For; "}
                            </div>
                          </div>
                          <ul className="grid self-stretch gap-3 grid-cols-[282.5px_282.5px_282.5px_282.5px] [grid-auto-columns:1fr] [list-style-type:disc] list-outside pointer-events-none 2xl:grid-cols-[322.484px_322.5px_322.5px_322.5px]" role="list">
                            {logos.map((d, i) => <Logo key={i} d={d} styles={Logo_styles[i]} />)}
                            <li className="flex justify-start items-center flex-1 gap-3 [list-style-type:none] pointer-events-none" />
                            <li className="flex justify-start items-center flex-1 gap-3 [list-style-type:none] pointer-events-none" />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="block z-900 text-left">
                  <div className="flex relative py-1.5 pr-1.5 pl-2.5 rounded-[10px] justify-start items-center gap-1 align-top text-color-006 whitespace-nowrap text-nowrap cursor-pointer hover:border-color-003 hover:text-color-003 hover:outline-color-003 hover:[text-decoration-color:var(--color-003)] focus:border-color-006 focus:outline-color-006 focus:[text-decoration-color:var(--color-006)]" data-component="button" aria-controls="w-dropdown-list-2" aria-expanded="false" aria-haspopup="menu" id="w-dropdown-toggle-2" role="button">
                    <div className="block text-[0.9375rem] leading-5 hover:border-color-006 hover:text-color-006 hover:outline-color-006 hover:[text-decoration-color:var(--color-006)] focus:border-color-006 focus:text-color-006 focus:outline-color-006 focus:[text-decoration-color:var(--color-006)]">
                      Resources
                    </div>
                    <div className="w-5 h-5 block">
                      <div className="flex justify-center items-center before:content-['_'] before:table before:w-0 before:h-0 before:text-color-006 before:text-base before:leading-6 before:tracking-[-0.18px] before:text-left max-lg:before:text-color-002 max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-color-006 after:text-base after:leading-6 after:tracking-[-0.18px] after:text-left max-lg:after:text-color-002 max-lg:after:w-auto max-lg:after:h-auto" data-ditto-id="motion-div-8">
                        <Icon />
                      </div>
                    </div>
                  </div>
                  <nav className="w-300 h-[20.4375rem] block absolute top-18 left-0 opacity-0 min-w-full -mt-[0.3125rem] transform-[matrix(0.96,0,0,0.96,0,-8)] origin-[600px_163.5px] pointer-events-none max-lg:hidden" aria-hidden="true" aria-labelledby="w-dropdown-toggle-2" id="w-dropdown-list-2">
                    <div className="border border-solid border-color-008 block rounded-[28px] overflow-hidden bg-background pointer-events-none">
                      <div className="w-full grid justify-between grid-cols-[99.8281px_99.8281px_99.8438px_99.8281px_99.8281px_99.8438px_99.8281px_99.8281px_99.8438px_99.8281px_99.8281px_99.8438px] [grid-auto-columns:1fr] pointer-events-none 2xl:grid-cols-[113.156px_113.172px_113.156px_113.172px_113.172px_113.156px_113.172px_113.172px_113.156px_113.172px_113.172px_113.156px]">
                        {cards2.map((d) => <CardGridItem2 key={d.variant} d={d} />)}
                      </div>
                    </div>
                  </nav>
                </div>
                <a className="h-8 block max-w-full py-1.5 px-2.5 rounded-[10px] justify-center items-center text-color-006 cursor-pointer hover:border-color-003 hover:text-color-003 hover:outline-color-003 hover:[text-decoration-color:var(--color-003)] focus:border-color-006 focus:shadow-[var(--surface)_0px_0px_0px_2.75353px] focus:[text-decoration-color:var(--color-006)]" data-component="link" href="/pricing">
                  <div className="block text-[0.9375rem] leading-5 hover:border-color-006 hover:text-color-006 hover:outline-color-006 hover:[text-decoration-color:var(--color-006)] focus:border-color-006 focus:text-color-006 focus:outline-color-006 focus:[text-decoration-color:var(--color-006)]">
                    Pricing
                  </div>
                </a>
                <a className="h-8 block max-w-full py-1.5 px-2.5 rounded-[10px] justify-center items-center text-color-006 cursor-pointer hover:border-color-003 hover:text-color-003 hover:outline-color-003 hover:[text-decoration-color:var(--color-003)] focus:border-color-006 focus:shadow-[var(--surface)_0px_0px_0px_2.75391px] focus:[text-decoration-color:var(--color-006)]" data-component="link" href="/book-demo">
                  <div className="block text-[0.9375rem] leading-5 whitespace-nowrap hover:border-color-006 hover:text-color-006 hover:outline-color-006 hover:[text-decoration-color:var(--color-006)] focus:border-color-006 focus:text-color-006 focus:outline-color-006 focus:[text-decoration-color:var(--color-006)]">
                    Book a Demo
                  </div>
                </a>
              </div>
              <div className="flex justify-end items-center gap-2">
                <a className="h-8 block max-w-full py-1.5 px-2.5 rounded-[10px] justify-center items-center text-color-006 cursor-pointer hover:border-color-003 hover:text-color-003 hover:outline-color-003 hover:[text-decoration-color:var(--color-003)] focus:border-color-006 focus:shadow-[var(--surface)_0px_0px_0px_2.75353px] focus:[text-decoration-color:var(--color-006)]" data-component="link" href="https://app.foreplay.co/login?_gl=1*l74cws*_gcl_au*MTc3NTEzNDM3Mi4xNzQ0MDc1MDI0LjcwMDEwOTkyMi4xNzQ2NTY3NzU3LjE3NDY1Njc3NTc.*_ga*MjAyODAyNTY1Mi4xNzM2Mjg1MDU5*_ga_2VLRZB1H92*czE3NDcwOTgyMzAkbzE3NSRnMSR0MTc0NzA5ODgwMyRqNTkkbDAkaDA.">
                  <div className="block text-[0.9375rem] leading-5 whitespace-nowrap hover:border-color-006 hover:text-color-006 hover:outline-color-006 hover:[text-decoration-color:var(--color-006)] focus:border-color-006 focus:text-color-006 focus:outline-color-006 focus:[text-decoration-color:var(--color-006)]">
                    Sign in
                  </div>
                </a>
                <a className="h-10 flex relative z-5 max-w-full p-2 rounded-[10px] justify-center items-center text-color-005 font-semibold bg-color-002 cursor-pointer hover:bg-clr-7 focus:bg-clr-22 focus:shadow-[var(--clr-23)_0px_0px_0px_1.74789px,var(--color-003)_0px_0px_0px_2.62183px]" data-component="link" href="https://app.foreplay.co/sign-up">
                  <div className="block relative z-2 px-1.5">
                    <div className="block text-[0.9375rem] [font-weight:550] leading-5 whitespace-nowrap">
                      Start free trial
                    </div>
                  </div>
                  <div className="flex relative z-2 opacity-68 -ml-1 justify-center items-center">
                    <div className="w-6 h-6 flex justify-center items-center">
                      <div className="flex justify-center items-center before:content-['_'] before:table before:w-0 before:h-0 before:text-color-005 before:text-base before:font-semibold before:leading-6 before:tracking-[-0.18px] max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-color-005 after:text-base after:font-semibold after:leading-6 after:tracking-[-0.18px] max-lg:after:w-auto max-lg:after:h-auto">
                        <Icon17 />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </nav>
          <div className="hidden relative float-right min-w-0 p-4.5 text-[1.5rem] cursor-pointer max-lg:block max-lg:p-3 max-lg:rounded-lg max-lg:text-color-002" aria-controls="w-nav-overlay-0" aria-expanded="false" aria-haspopup="menu" aria-label="menu" role="button">
            <div className="w-5 block max-lg:h-5">
              <div className="flex justify-center items-center before:content-['_'] before:table before:text-color-001 before:text-2xl before:leading-6 before:tracking-[-0.18px] max-lg:before:w-0 max-lg:before:h-0 max-lg:before:text-color-002 after:content-['_'] after:table after:text-color-001 after:text-2xl after:leading-6 after:tracking-[-0.18px] max-lg:after:w-0 max-lg:after:h-0 max-lg:after:text-color-002">
                <Icon18 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
