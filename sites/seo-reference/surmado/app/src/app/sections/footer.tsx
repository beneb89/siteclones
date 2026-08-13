import ListRow7 from "../components/list-row7";
import ListRow8 from "../components/list-row8";
import ListRow9 from "../components/list-row9";
import TextLink, { type TextLinkData } from "../components/text-link";
import Logo, { type LogoData } from "../components/logo";
import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
import { ListRow7_styles, ListRow8_styles, ListRow7_styles2, ListRow7_styles3, ListRow9_styles, TextLink_styles, Logo_styles } from "../_styles";
import { listRow7Data as listRow7DataContent, listRow8Data as listRow8DataContent, listRow7Data2 as listRow7Data2Content, listRow7Data3 as listRow7Data3Content, listRow9Data as listRow9DataContent } from "../content";
const TextLink_data: TextLinkData[] = [
    { href: "/privacy", label2: "Privacy" },
    { href: "/terms", label2: "Terms" },
    { href: "/dpa", label2: "DPA" },
    { href: "/cookies", label2: "Cookies" },
    { href: "/cookies", label2: "Consent Preferences" },
    { href: "/legal/subprocessors", label2: "Sub-processors" },
    { href: "/accessibility", label2: "Accessibility" },
    { href: "/security", label2: "Security" },
    { href: "/llms.txt", label: "Information for AI assistants", label2: "LLMs" }
];
const Logo_data: LogoData[] = [
    { ariaLabel: "LinkedIn", href: "https://linkedin.com/company/surmado", xmlns: "http://www.w3.org/2000/svg", strokeWidth: "2", strokewidth: "1.5", icon: <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
        </> },
    { ariaLabel: "X (formerly Twitter)", href: "https://x.com/surmado", strokeWidth: "1.5", ariahidden: "true", icon: <>
        <path d="M4 4l11.733 16H20L8.267 4H4z" />
        <path d="M4 20l6.768-8" />
        <path d="M20 4l-6.768 8" />
        </> },
    { ariaLabel: "YouTube", href: "https://youtube.com/@surmado", xmlns: "http://www.w3.org/2000/svg", strokeWidth: "2", strokewidth: "1.5", icon: <>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
        </> }
];
/** Site footer. */
export default function Footer({ listRow7Data = listRow7DataContent, listRow8Data = listRow8DataContent, listRow7Data2 = listRow7Data2Content, listRow7Data3 = listRow7Data3Content, listRow9Data = listRow9DataContent, textLinkData = TextLink_data, logos = Logo_data } = {}) {
  return (
    <footer className="border-t border-solid border-t-clr-7 block pt-7 pb-4 shrink-0 text-background bg-foreground max-lg:pt-8 max-lg:pb-5" role="contentinfo">
      <div className="w-full grid max-w-300 mb-4 mx-auto px-10 gap-6 grid-cols-[292.562px_182.859px_182.859px_182.859px_182.859px] text-left max-lg:px-5 max-lg:gap-7.5 max-lg:text-center max-lg:grid-cols-1">
        <div className="block md:max-lg:mb-1 md:max-lg:col-span-full">
          <img className="w-45 h-14.5 inline max-w-full overflow-clip aspect-[auto_180/50] max-md:w-37.5 max-md:h-[3.0625rem]" data-component="image" alt="Surmado: AI for small business" height="50" src="/assets/cloned/svg/623e3daba52e.svg" width="180" />
          <p className="block my-2 text-border text-[0.9375rem] leading-[1.5rem] max-md:leading-[1.625rem] max-md:[font-size:inherit]">
            Your website, handled.
          </p>
          <p className="block my-2 text-border text-[0.9375rem] leading-[1.5rem] max-md:leading-[1.625rem] max-md:[font-size:inherit]">
            Built to show up in Google and AI search.
          </p>
          <div className="block mt-4">
            <a className="h-[42.3px] inline-block text-color-007 leading-0 underline cursor-pointer hover:border-foreground hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]" data-component="link" href="https://peerpush.net/p/surmado" rel="noopener noreferrer" target="_blank">
              <img className="w-[10.3125rem] h-10.5 block max-w-[min(100%,_165px)] overflow-clip aspect-[auto_165/42] max-lg:mx-auto" data-component="image" alt="#1 Product of the Day on PeerPush. View listing on PeerPush." height="42" src="/assets/cloned/images/c19a5fbbcbaf.png" width="165" />
            </a>
          </div>
        </div>
        <nav className="block" data-component="nav" aria-labelledby="footer-marketing">
          <h2 className="w-[5.8125rem] border-b-2 border-solid border-b-color-005 block mb-2.5 pb-2 font-bold leading-[1.375rem] tracking-[0.5px] uppercase [overflow-wrap:break-word] max-md:mx-auto max-md:[word-break:break-word]" data-component="heading" id="footer-marketing">
            Products
          </h2>
          <ul className="block [list-style-type:none] list-outside">
            {listRow7Data.map((d, i) => <ListRow7 key={i} d={d} styles={ListRow7_styles[i]} />)}
          </ul>
        </nav>
        <nav className="block" data-component="nav" aria-labelledby="footer-compare">
          <h2 className="w-[83.5px] border-b-2 border-solid border-b-color-005 block mb-2.5 pb-2 font-bold leading-[1.375rem] tracking-[0.5px] uppercase [overflow-wrap:break-word] max-md:mx-auto max-md:[word-break:break-word]" data-component="heading" id="footer-compare">
            Compare
          </h2>
          <ul className="block [list-style-type:none] list-outside">
            {listRow8Data.map((d, i) => <ListRow8 key={i} d={d} styles={ListRow8_styles[i]} />)}
            <li className="list-item mb-0.5 max-lg:mb-0">
              <a className="h-[31.5px] border-b border-solid border-b-clr-2 inline-flex pt-1 pb-0.5 items-center gap-[0.225rem] text-color-002 text-sm leading-[1.5625rem] cursor-pointer max-lg:h-[2.9125rem] max-lg:min-h-11 max-lg:block max-lg:py-3 max-lg:leading-[1.375rem] hover:border-b-color-005 hover:border-l-clr-17 hover:border-r-clr-17 hover:border-t-clr-17 hover:text-clr-17 hover:outline-clr-17 hover:[text-decoration-color:var(--clr-17)] focus:border-b-clr-25 focus:border-l-clr-26 focus:border-r-clr-26 focus:border-t-clr-26 focus:text-clr-26 focus:outline-clr-26 focus:[text-decoration-color:var(--clr-26)]" data-component="button" href="/compare">
                All comparisons
                <span className="h-full block max-lg:inline hover:border-color-002 hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)] focus:border-color-002 focus:text-color-002 focus:outline-color-002 focus:[text-decoration-color:var(--color-002)]" aria-hidden="true">
                  {" →"}
                </span>
              </a>
            </li>
          </ul>
          <h2 className="w-30.5 border-b-2 border-solid border-b-color-005 block mt-5 mb-2.5 pb-2 font-bold leading-[1.375rem] tracking-[0.5px] uppercase [overflow-wrap:break-word] max-md:mx-auto max-md:[word-break:break-word]" data-component="heading" id="footer-case-studies">
            Case Studies
          </h2>
          <ul className="block [list-style-type:none] list-outside">
            <li className="list-item mb-0.5 max-lg:mb-0">
              <a className="h-[31.5px] border-b border-solid border-b-clr-2 inline-flex pt-1 pb-0.5 items-center text-color-002 text-sm leading-[1.5625rem] cursor-pointer max-lg:min-h-11 max-lg:block max-lg:py-3 max-lg:leading-[1.375rem] max-lg:h-auto hover:border-color-005 hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] focus:border-b-clr-25 focus:border-l-clr-26 focus:border-r-clr-26 focus:border-t-clr-26 focus:text-clr-26 focus:outline-clr-26 focus:[text-decoration-color:var(--clr-26)]" data-component="button" href="/case-study-julia-happy-makeup">
                Julia Happy Makeup
              </a>
            </li>
            <li className="list-item mb-0.5 max-lg:mb-0">
              <a className="h-[31.5px] border-b border-solid border-b-clr-2 inline-flex pt-1 pb-0.5 items-center text-color-002 text-sm leading-[1.5625rem] cursor-pointer max-lg:min-h-11 max-lg:block max-lg:py-3 max-lg:leading-[1.375rem] max-lg:h-auto hover:border-b-color-005 hover:border-l-clr-17 hover:border-r-clr-17 hover:border-t-clr-17 hover:text-clr-17 hover:outline-clr-17 hover:[text-decoration-color:var(--clr-17)] focus:border-b-clr-25 focus:border-l-clr-26 focus:border-r-clr-26 focus:border-t-clr-26 focus:text-clr-26 focus:outline-clr-26 focus:[text-decoration-color:var(--clr-26)]" data-component="button" href="/case-study-central-phoenix-homes">
                Central Phoenix Homes
              </a>
            </li>
            <li className="list-item mb-0.5 max-lg:mb-0">
              <a className="h-[31.5px] border-b border-solid border-b-clr-2 inline-flex pt-1 pb-0.5 items-center gap-[0.225rem] text-color-002 text-sm leading-[1.5625rem] cursor-pointer max-lg:h-[2.9125rem] max-lg:min-h-11 max-lg:block max-lg:py-3 max-lg:leading-[1.375rem] hover:border-b-color-005 hover:border-l-clr-17 hover:border-r-clr-17 hover:border-t-clr-17 hover:text-clr-17 hover:outline-clr-17 hover:[text-decoration-color:var(--clr-17)] focus:border-b-clr-25 focus:border-l-clr-26 focus:border-r-clr-26 focus:border-t-clr-26 focus:text-clr-26 focus:outline-clr-26 focus:[text-decoration-color:var(--clr-26)]" data-component="button" href="/case-studies">
                All case studies
                <span className="h-full block max-lg:inline hover:border-color-002 hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)] focus:border-color-002 focus:text-color-002 focus:outline-color-002 focus:[text-decoration-color:var(--color-002)]" aria-hidden="true">
                  {" →"}
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <nav className="block" data-component="nav" aria-labelledby="footer-resources">
          <h2 className="w-[102.5px] border-b-2 border-solid border-b-color-005 block mb-2.5 pb-2 font-bold leading-[1.375rem] tracking-[0.5px] uppercase [overflow-wrap:break-word] max-md:mx-auto max-md:[word-break:break-word]" data-component="heading" id="footer-resources">
            Resources
          </h2>
          <ul className="block [list-style-type:none] list-outside">
            {listRow7Data2.map((d, i) => <ListRow7 key={i} d={d} styles={ListRow7_styles2[i]} />)}
          </ul>
        </nav>
        <nav className="block" data-component="nav" aria-labelledby="footer-company">
          <h2 className="w-[84.5px] border-b-2 border-solid border-b-color-005 block mb-2.5 pb-2 font-bold leading-[1.375rem] tracking-[0.5px] uppercase [overflow-wrap:break-word] max-md:mx-auto max-md:[word-break:break-word]" data-component="heading" id="footer-company">
            Company
          </h2>
          <ul className="block [list-style-type:none] list-outside">
            {listRow7Data3.map((d, i) => <ListRow7 key={i} d={d} styles={ListRow7_styles3[i]} />)}
          </ul>
        </nav>
      </div>
      <section className="border-t border-solid border-t-clr-8 block max-w-300 mx-auto py-4 px-10 text-center max-lg:px-5" aria-labelledby="footer-ask-ai-heading">
        <h2 className="block mb-2.5 text-color-006 text-sm font-bold leading-[1.1875rem] tracking-[0.5px] uppercase [overflow-wrap:break-word] max-md:[word-break:break-word]" data-component="heading" id="footer-ask-ai-heading">
          Ask your AI about Surmado
        </h2>
        <ul className="flex flex-wrap justify-center gap-2 [list-style-type:none] list-outside">
          {listRow9Data.map((d, i) => <ListRow9 key={i} d={d} styles={ListRow9_styles[i]} />)}
        </ul>
      </section>
      <div className="block max-w-300 mx-auto pt-3 px-10 text-center max-lg:px-5">
        <p className="block my-1 text-color-006 text-sm leading-[1.5625rem]">
          {"Questions? Say hi: "}
          <a className="h-[29.5px] border-b border-solid border-b-clr-2 inline-flex py-0.5 px-1 items-center text-color-003 font-semibold cursor-pointer max-lg:h-[45.5px] max-lg:min-h-11 max-lg:py-2.5 max-lg:px-1.5 hover:border-color-005 hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)]" data-component="button" href="mailto:hi@surmado.com">
            hi@surmado.com
          </a>
        </p>
        <p className="block my-1 text-color-006 text-sm leading-[1.5625rem]">
          {"Secure authentication by "}
          <a className="h-[29.5px] border-b border-solid border-b-clr-2 inline-flex py-0.5 px-1 items-center text-color-003 font-semibold cursor-pointer max-lg:h-[45.5px] max-lg:min-h-11 max-lg:py-2.5 max-lg:px-1.5 hover:border-color-005 hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)]" data-component="button" href="https://clerk.com/" rel="noopener noreferrer" target="_blank">
            Clerk
          </a>
          {" · Payments by "}
          <a className="h-[29.5px] border-b border-solid border-b-clr-2 inline-flex py-0.5 px-1 items-center text-color-003 font-semibold cursor-pointer max-lg:h-[45.5px] max-lg:min-h-11 max-lg:py-2.5 max-lg:px-1.5 hover:border-color-005 hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)]" data-component="button" href="https://stripe.com/" rel="noopener noreferrer" target="_blank">
            Stripe
          </a>
        </p>
        <p className="flex my-1 flex-wrap justify-center gap-y-0.5 gap-x-1.5 text-color-006 text-sm leading-[1.5625rem]">
          {textLinkData.map((d, i) => <TextLink key={i} d={d} styles={TextLink_styles[i]} />)}
        </p>
        <p className="block my-1 text-color-006 text-sm leading-[1.5625rem]">
          © 2026 Surmado, Inc. Delaware C Corporation headquartered in Phoenix, Arizona, with offices in San Diego and Los Angeles.
        </p>
        <div className="flex mt-2 justify-center gap-3">
          {logos.map((d, i) => <Logo key={i} d={d} styles={Logo_styles[i]} />)}
        </div>
        <div className="flex mt-3 justify-center gap-4">
          <a className="h-[2.325rem] border border-solid border-surface flex py-1 px-2 rounded-md items-center gap-1.5 text-color-003 font-semibold cursor-pointer max-lg:h-11 max-lg:min-h-11 hover:border-clr-9 hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:transform-[matrix(1,0,0,1,0,-1.99219)] focus:text-clr-31 focus:outline-clr-31 focus:[text-decoration-color:var(--clr-31)] focus:transform-[matrix(1,0,0,1,0,-0.0329817)]" data-component="link" aria-label="Download Scout on the App Store" href="https://apps.apple.com/us/app/surmado-scout/id6756646583" rel="noopener noreferrer" target="_blank">
            <Icon2 />
            <span className="block">
              App Store
            </span>
          </a>
          <a className="h-[2.325rem] border border-solid border-surface flex py-1 px-2 rounded-md items-center gap-1.5 text-color-003 font-semibold cursor-pointer max-lg:h-11 max-lg:min-h-11 hover:border-clr-9 hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] hover:transform-[matrix(1,0,0,1,0,-1.99215)] focus:text-clr-31 focus:outline-clr-31 focus:[text-decoration-color:var(--clr-31)] focus:transform-[matrix(1,0,0,1,0,-0.0331919)]" data-component="link" aria-label="Get Scout on Google Play" href="https://play.google.com/store/apps/details?id=com.surmado.scout" rel="noopener noreferrer" target="_blank">
            <Icon3 />
            <span className="block">
              Google Play
            </span>
          </a>
        </div>
        <p className="block my-1 text-color-006 text-sm leading-[1.5625rem]">
          {"Powered by "}
          <a className="h-[29.5px] border-b border-solid border-b-clr-2 inline-flex py-0.5 px-1 items-center text-color-003 font-semibold cursor-pointer max-lg:h-[45.5px] max-lg:min-h-11 max-lg:py-2.5 max-lg:px-1.5 hover:border-color-005 hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)]" data-ditto-id="motion-button" data-component="button" href="/sites">
            Surmado Sites
          </a>
        </p>
      </div>
    </footer>
  );
}
