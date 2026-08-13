import Logo from "../components/logo";
import ListRow5, { type ListRow5Data } from "../components/list-row5";
import ListRow6, { type ListRow6Data } from "../components/list-row6";
import ListRow7 from "../components/list-row7";
import ListRow8 from "../components/list-row8";
import { Logo_styles, ListRow5_styles, ListRow6_styles, ListRow7_styles, ListRow8_styles } from "../_styles";
import { logos as logosContent, listRow7Data as listRow7DataContent, listRow8Data as listRow8DataContent } from "../content";
const ListRow5_data: ListRow5Data[] = [
    { id: "menu-item-23162", href: "/tag/microsoft-advertising/", label: "Microsoft Advertising Updates" },
    { href: "/google-ads-updates/2026-08/", label: "Google Ads Updates (August 2026)" },
    { href: "/performance-max-updates/2026-08/", label: "Performance Max Updates (August 2026)" },
    { href: "/google-merchant-center-updates/2026-08/", label: "Google Merchant Center Updates (August 2026)" },
    { href: "/google-ads-policy-updates/2026-08/", label: "Google Ads Policy Updates (August 2026)" },
    { href: "/youtube-ads-updates/2026-08/", label: "YouTube Ads Updates (August 2026)" }
];
const ListRow6_data: ListRow6Data[] = [
    { id: "menu-item-17628", href: "/newsletter/", label: "Newsletter" },
    { id: "menu-item-17623", href: "/ppc-updates-calendar/", label: "PPC Updates Calendar" },
    { id: "menu-item-20156", href: "/ppc-news-today/", label: "PPC News Today" },
    { id: "menu-item-17624", href: "/tag/ecommerce-advertising/", label: "E-Commerce News" },
    { id: "menu-item-17625", href: "/tag/lead-generation-advertising/", label: "Lead-Generation News" },
    { id: "menu-item-17629", href: "/blog/consent-mode-ultimate-guide/", label: "Consent Mode" },
    { id: "menu-item-18120", href: "/blog/google-marketing-live/", label: "Google Marketing Live" }
];
/** Site footer. */
export default function Footer({ logos = logosContent, listRow5Data = ListRow5_data, listRow6Data = ListRow6_data, listRow7Data = listRow7DataContent, listRow8Data = listRow8DataContent } = {}) {
  return (
    <footer className="block shrink-0">
      <div className="block py-20 bg-border max-lg:py-10">
        <div className="block max-w-305 mx-7.5 px-5 max-md:max-w-none max-md:mx-0 md:max-lg:max-w-180 md:max-lg:mx-6 2xl:max-w-430 2xl:mx-25">
          <div className="flex justify-between items-stretch text-start max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:[justify-content:initial]">
            <div className="flex max-w-70 pr-10 justify-start items-start flex-1 max-lg:max-w-none max-lg:pr-0 2xl:max-w-110">
              <div className="w-full flex flex-col items-start max-lg:items-center">
                <div className="block">
                  <a className="block text-2xl font-bold leading-9 tracking-[-1.8px] cursor-pointer" data-component="link" href="/">
                    {" "}
                    <img className="w-50 h-[3.1875rem] block max-w-75 overflow-clip align-middle" data-component="image" alt="PPC News Feed" src="/assets/cloned/images/4286f3461754.png" />
                    {" "}
                  </a>
                  {" "}
                </div>
                <div className="block mt-6 text-muted text-xs font-semibold leading-4.5 max-lg:mt-4">
                  {" PPC News Feed is your hub for the freshest and most relevant updates in the ever-evolving world of Pay-Per-Click advertising. Our mission is simple: gathering the latest PPC news in one place, ensuring you're always in the loop."}
                  <br className="inline" />
                  <br className="inline" />
                  Some links on this site may be affiliate links. If you make a purchase through them, we may earn a commission at no extra cost to you. We only recommend products and services we trust and find valuable. Thank you for your support.
                  <br className="inline" />
                  <br className="inline" />
                  {" "}
                  <div className="flex flex-col items-center gap-2.5 text-center max-lg:[text-align:inherit]">
                    <div className="flex">
                      {logos.map((d, i) => <Logo key={i} d={d} styles={Logo_styles[i]} />)}
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-2 text-color-008 text-[1.0625rem] leading-[1.625rem]">
                      <span className="flex gap-[0.1875rem] text-base leading-4">
                        <span className="block text-color-002" aria-hidden="true">
                          ★
                        </span>
                        <span className="block text-color-002" aria-hidden="true">
                          ★
                        </span>
                        <span className="block text-color-002" aria-hidden="true">
                          ★
                        </span>
                        <span className="block text-color-002" aria-hidden="true">
                          ★
                        </span>
                        <span className="block text-color-002" aria-hidden="true">
                          ★
                        </span>
                      </span>
                      {" "}
                      <span className="block">
                        Loved by 7000+ PPC experts
                      </span>
                    </div>
                  </div>
                </div>
                <div className="block mt-6 max-lg:mt-4">
                  <div className="block">
                    <div className="flex -mx-[0.225rem] flex-wrap justify-start">
                      <div className="flex px-[0.225rem]">
                        <a className="flex items-center grow leading-4 text-center cursor-pointer max-lg:[text-align:inherit] hover:border-clr-29 hover:text-clr-29 hover:outline-clr-29 hover:[text-decoration-color:var(--clr-29)]" data-component="link" aria-label="RSS" href="/feed/" rel="nofollow noopener" target="_blank">
                          {" "}
                          <i className="flex justify-center items-center [font-family:powerkit-icons] text-xl leading-5 before:content-[''] before:block before:w-4 before:h-5 before:text-foreground before:text-xl before:leading-5 before:text-center hover:border-foreground hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)] focus:border-foreground focus:text-foreground focus:outline-foreground focus:[text-decoration-color:var(--foreground)]" />
                          {" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex max-w-full justify-center items-start flex-1 max-lg:mt-6">
              <div className="w-full flex flex-col items-center">
                <nav className="w-full grid justify-end gap-5 grid-cols-[350px_240px_240px] max-lg:gap-10 max-lg:grid-cols-1" data-component="nav">
                  <div className="flex flex-col">
                    <span className="block mb-4 text-[1.5rem] font-extrabold tracking-[-0.6px]">
                      Latest Updates
                    </span>
                    <ul className="flex flex-col flex-wrap justify-start [list-style-type:none] list-outside max-lg:justify-center max-lg:[flex-direction:initial]">
                      {listRow5Data.map((d, i) => <ListRow5 key={i} d={d} styles={ListRow5_styles[i]} />)}
                    </ul>
                  </div>
                  <div className="flex flex-col">
                    <span className="block mb-4 text-[1.5rem] font-extrabold tracking-[-0.6px]">
                      Shortcuts
                    </span>
                    <ul className="flex flex-col flex-wrap justify-start [list-style-type:none] list-outside max-lg:justify-center max-lg:[flex-direction:initial]">
                      {listRow6Data.map((d, i) => <ListRow6 key={i} d={d} styles={ListRow6_styles[i]} />)}
                    </ul>
                  </div>
                  <div className="flex flex-col">
                    <span className="block mb-4 text-[1.5rem] font-extrabold tracking-[-0.6px]">
                      About
                    </span>
                    <ul className="flex flex-col flex-wrap justify-start [list-style-type:none] list-outside max-lg:justify-center max-lg:[flex-direction:initial]">
                      {listRow7Data.map((d, i) => <ListRow7 key={i} d={d} styles={ListRow7_styles[i]} />)}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block bg-border">
        <div className="block max-w-305 mx-7.5 px-5 max-md:max-w-none max-md:mx-0 md:max-lg:max-w-180 md:max-lg:mx-6 2xl:max-w-430 2xl:mx-25">
          <div className="border-t border-solid border-t-surface flex py-6 justify-between items-stretch text-start max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:[justify-content:initial]">
            <div className="flex max-w-full pr-10 justify-start items-start flex-1 max-lg:pr-0">
              <div className="w-full flex flex-col items-start max-lg:items-center">
                <nav className="w-full block justify-end gap-5 grid-cols-[350px_240px_240px] max-lg:gap-10 max-lg:grid-cols-[auto]" data-component="nav">
                  <div className="flex flex-col">
                    <ul className="flex flex-wrap justify-start [list-style-type:none] list-outside max-lg:justify-center" id="menu-legal-1">
                      {listRow8Data.map((d, i) => <ListRow8 key={i} d={d} styles={ListRow8_styles[i]} />)}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="flex max-w-full pl-5 justify-center items-start flex-1 max-lg:mt-6 max-lg:pl-0 2xl:pl-10">
              <div className="w-full flex flex-col items-end max-lg:items-center">
                <div className="block text-muted-foreground text-xs font-semibold leading-4.5">
                  {" © 2026 PPC News Feed. All rights reserved."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
