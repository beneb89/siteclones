import Illustration from "../svgs/svg-illustration";
import Icon21 from "../svgs/svg-icon21";
import Icon22 from "../svgs/svg-icon22";
import Icon23 from "../svgs/svg-icon23";
import Logo, { type LogoData } from "../components/logo";
import Logo2 from "../components/logo2";
import Logo3 from "../components/logo3";
import Logo4 from "../components/logo4";
import ListRow2, { type ListRow2Data } from "../components/list-row2";
import ListRow3 from "../components/list-row3";
import ListRow4 from "../components/list-row4";
import ListRow5 from "../components/list-row5";
import Tile2, { type Tile2Data } from "../components/tile2";
import TextLink, { type TextLinkData } from "../components/text-link";
import { ListRow5_meta, ListRow5_meta2, ListRow5_meta3, ListRow5_meta4 } from "../ditto-meta";
import { ListRow2_styles, ListRow3_styles, ListRow4_styles, ListRow3_styles2, ListRow3_styles3, ListRow5_styles, ListRow5_styles2, ListRow5_styles3, ListRow5_styles4, TextLink_styles } from "../_styles";
import { logos as logos2Content, logos2 as logos3Content, logos3 as logos4Content, listRow3Data as listRow3DataContent, listRow4Data as listRow4DataContent, listRow3Data2 as listRow3Data2Content, listRow3Data3 as listRow3Data3Content, listRow5Data as listRow5DataContent, listRow5Data2 as listRow5Data2Content, listRow5Data3 as listRow5Data3Content, listRow5Data4 as listRow5Data4Content } from "../content";
const Logo_data: LogoData[] = [
    { ariaLabel: "Context Studios on LinkedIn", href: "https://www.linkedin.com/company/contextstudios-ai/", fill: "none", height: "24", stroke: "currentColor", width: "24", xmlns: "http://www.w3.org/2000/svg", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", icon: <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
          </> },
    { ariaLabel: "Context Studios on X", href: "https://x.com/_contextstudios", fill: "currentColor", icon: <>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </> },
    { ariaLabel: "Context Studios on GitHub", href: "https://github.com/micker841", fill: "none", height: "24", stroke: "currentColor", width: "24", xmlns: "http://www.w3.org/2000/svg", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", icon: <>
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
          </> },
    { ariaLabel: "Context Studios on Instagram", href: "https://www.instagram.com/_contextstudios/", fill: "none", height: "24", stroke: "currentColor", width: "24", xmlns: "http://www.w3.org/2000/svg", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", icon: <>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </> },
    { ariaLabel: "Context Studios on Facebook", href: "https://www.facebook.com/profile.php?id=61583943863265", fill: "none", height: "24", stroke: "currentColor", width: "24", xmlns: "http://www.w3.org/2000/svg", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", icon: <>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </> }
];
const ListRow2_data: ListRow2Data[] = [
    { href: "/pricing?path=starter", label: "Starter", label2: "from €2,000" },
    { href: "/pricing?path=fastTrack", label: "Fast Track", label2: "from €18,000" },
    { href: "/pricing?path=enterprise", label: "Enterprise", label2: "on request" }
];
const Tile2_data: Tile2Data[] = [
    { text: "What we do", text2: "We design and build AI-native software, automation systems, MVPs, and custom internal tools." },
    { text: "Who we help", text2: "Startups, SMBs, and enterprise teams that need practical AI systems." },
    { text: "Where we work", text2: "Based in Berlin, serving clients across Germany and Europe." },
    { text: "How to start", text2: "Book a 30-minute discovery call to map your workflow and define the next build step." }
];
const TextLink_data: TextLinkData[] = [
    { ariacurrent: "true", href: "/guides/aeo-geo-complete-guide-2026", hrefLang: "en", label: "EN" },
    { href: "/de/guides/aeo-geo-complete-guide-2026", hrefLang: "de", label: "DE" },
    { href: "/it/guides/aeo-geo-complete-guide-2026", hrefLang: "it", label: "IT" },
    { href: "/fr/guides/aeo-geo-complete-guide-2026", hrefLang: "fr", label: "FR" }
];
/** Logo Cloud section. */
export default function LogoCloudSection({ logos = Logo_data, logos2 = logos2Content, logos3 = logos3Content, logos4 = logos4Content, listRow2Data = ListRow2_data, listRow3Data = listRow3DataContent, listRow4Data = listRow4DataContent, listRow3Data2 = listRow3Data2Content, listRow3Data3 = listRow3Data3Content, listRow5Data = listRow5DataContent, listRow5Data2 = listRow5Data2Content, listRow5Data3 = listRow5Data3Content, listRow5Data4 = listRow5Data4Content, tile2Data = Tile2_data, textLinkData = TextLink_data } = {}) {
  return (
    <div className="block [font-family:Inter,_system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Arial,_sans-serif,_Inter,_system-ui,_sans-serif]">
      <footer className="border-t border-solid border-t-surface block relative overflow-hidden text-color-001 bg-clr-13" aria-labelledby="v2-footer-heading">
        <div className="h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="block absolute -top-32 left-[6.4rem] opacity-[0.677043] rounded-full [filter:blur(40px)] pointer-events-none h-[32.5rem] w-[32.5rem] max-md:left-7.5 max-md:opacity-[0.452168] md:max-lg:left-[3.8375rem] md:max-lg:opacity-[0.496523] 2xl:left-[9.6rem] 2xl:opacity-[0.60826] hover:opacity-[0.472378] focus:opacity-[0.467902]" style={{ backgroundImage: "radial-gradient(circle, var(--clr-14), var(--clr-2) 68%)" }} data-ditto-id="motion-div" />
          <div className="block absolute right-[3.2rem] -bottom-40 opacity-[0.615254] rounded-full [filter:blur(40px)] pointer-events-none h-[37.5rem] w-[37.5rem] max-md:right-[0.9375rem] max-md:opacity-[0.718671] md:max-lg:right-[30.7px] md:max-lg:opacity-50 2xl:right-[4.8rem] 2xl:opacity-[0.549254] hover:opacity-[0.509628] focus:opacity-[0.511968]" style={{ backgroundImage: "radial-gradient(circle, var(--clr-15), var(--clr-2) 70%)" }} data-ditto-id="motion-div-2" />
          <Illustration />
        </div>
        <h2 className="w-px h-px block absolute top-0 left-0 -m-px overflow-hidden [font-family:'Space_Grotesk',_system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Arial,_sans-serif,_system-ui,_sans-serif] font-bold leading-[1.125rem] tracking-[-0.4px] whitespace-nowrap text-nowrap [clip-path:inset(50%)]" id="v2-footer-heading">
          Context Studios footer
        </h2>
        <div className="block relative max-w-320 pt-20 pb-9 px-10 mx-auto max-md:pt-16 max-md:px-6">
          <div className="grid gap-16 grid-cols-[320px_1fr] max-lg:gap-12 max-lg:grid-cols-1">
            <div className="flex flex-col gap-5 max-w-sm">
              <a className="w-[220.7px] h-[56.3px] flex items-center gap-2 cursor-pointer hover:opacity-[0.901661] focus:opacity-[0.998415]" data-component="link" href="/">
                <img className="w-[2.5625rem] block max-w-full overflow-clip object-contain aspect-[auto_38/48] align-middle text-clr-2 h-[3.25rem]" data-component="image" alt="Context Studios Icon" height="48" src="/assets/cloned/svg/83e55d960581.svg" width="38" />
                <div className="block shrink-0 bg-clr-3 h-[3.25rem] w-px" />
                <div className="flex flex-col justify-center text-color-003 leading-4 text-left">
                  <span className="block text-lg font-bold leading-[1.4375rem] tracking-[-0.45px]">
                    CONTEXT
                  </span>
                  <span className="block -mt-0.5 text-lg leading-[1.4375rem] tracking-[0.45px]">
                    STUDIOS
                  </span>
                  <span className="block mt-0.5 text-clr-4 text-[0.5625rem] font-medium leading-[0.6875rem] tracking-[0.45px] uppercase whitespace-nowrap text-nowrap">
                    AI-NATIVE DEVELOPMENT STUDIO
                  </span>
                </div>
              </a>
              <p className="block max-w-70 text-color-013 [font-family:'Space_Grotesk',_system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Arial,_sans-serif,_'Space_Grotesk',_system-ui,_sans-serif] text-lg leading-[1.5625rem] tracking-[-0.18px]">
                AI-native software systems for ambitious teams.
              </p>
              <address className="flex flex-col gap-1.5 text-muted text-sm leading-5">
                <span className="flex items-start gap-2">
                  <Icon21 />
                  <span className="block">
                    Context Studios UG (haftungsbeschränkt)
                    <br className="inline" />
                    Kaiser-Friedrich Str. 6, 10585 Berlin
                  </span>
                </span>
                <a className="block cursor-pointer hover:text-color-001 hover:underline" data-component="link" href="tel:+493020096840">
                  +49 30 20096840
                </a>
              </address>
              <div className="flex mt-0.5 flex-col items-start gap-2.5">
                <a className="border border-solid border-surface flex px-4 rounded-[10px] items-center gap-2.5 text-sm font-medium leading-5 bg-clr-16 cursor-pointer h-11 hover:bg-clr-31 hover:border-clr-32" data-component="button" aria-label="Email Context Studios" href="mailto:hello@contextstudios.ai">
                  <Icon22 />
                  hello@contextstudios.ai
                </a>
                <a className="flex px-4.5 rounded-[10px] items-center gap-2.5 text-color-003 text-sm font-semibold leading-5 cursor-pointer h-11 hover:opacity-90" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--clr-17) 0%, var(--clr-18) 50%, var(--clr-19) 100%)" }} data-component="link" href="/contact">
                  <Icon23 />
                  Book a discovery call
                </a>
              </div>
              <ul className="flex mt-1 items-center gap-2.5 [list-style-type:none] list-outside">
                {logos.map((d, i) => <Logo key={i} d={d} />)}
              </ul>
              <ul className="flex mt-4 flex-wrap items-center gap-2.5 [list-style-type:none] list-outside">
                <li className="list-item">
                  <div className="w-28 border border-solid border-surface flex min-w-28 px-3 rounded-[10px] justify-center items-center bg-color-010 h-10" aria-label="DesignRush">
                    <span className="flex flex-col leading-4">
                      <span className="block text-color-013 text-[0.6875rem] font-semibold leading-[0.875rem]">
                        REVIEW US
                      </span>
                      <span className="block text-muted text-[0.5rem] font-medium leading-2.5 tracking-[0.2px] whitespace-nowrap">
                        ON DESIGNRUSH
                      </span>
                      <span className="flex mt-0.5 gap-px">
                        {logos2.map((d, i) => <Logo2 key={i} d={d} />)}
                      </span>
                    </span>
                  </div>
                </li>
                <li className="list-item">
                  <a className="w-28 border border-solid border-surface flex min-w-28 px-3 rounded-[10px] justify-center items-center bg-color-010 cursor-pointer h-10 hover:border-clr-32" data-component="link" aria-label="Clutch company profile" href="https://clutch.co/profile/context-studios-ai-development-studio-berlin" rel="noopener noreferrer" target="_blank">
                    <span className="flex flex-col leading-4">
                      <span className="block text-color-013 text-[0.6875rem] font-semibold leading-[0.875rem] whitespace-nowrap">
                        REVIEW US
                      </span>
                      <span className="block text-muted text-[0.5rem] font-medium leading-2.5 tracking-[0.2px]">
                        ON CLUTCH
                      </span>
                      <span className="flex mt-0.5 gap-px">
                        {logos3.map((d, i) => <Logo3 key={i} d={d} />)}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="list-item">
                  <a className="w-28 border border-solid border-surface flex min-w-28 px-3 rounded-[10px] justify-center items-center bg-color-010 cursor-pointer h-10 hover:border-clr-32" data-component="link" aria-label="GoodFirms company profile" href="https://www.goodfirms.co/company/context-studios" rel="noopener noreferrer" target="_blank">
                    <span className="flex flex-col leading-4">
                      <span className="block text-color-013 text-[0.6875rem] font-semibold leading-[0.875rem] whitespace-nowrap">
                        FEATURED ON
                      </span>
                      <span className="block text-muted text-[0.5rem] font-medium leading-2.5 tracking-[0.2px]">
                        GOODFIRMS
                      </span>
                      <span className="flex mt-0.5 gap-px">
                        {logos4.map((d, i) => <Logo4 key={i} d={d} />)}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <nav className="grid gap-y-8 gap-x-6 grid-cols-5 max-md:grid-cols-2 md:max-lg:grid-cols-3" data-component="nav" aria-label="Footer">
              <section className="flex flex-col gap-3.5" aria-labelledby="v2f-packages">
                <h3 className="block text-color-006 text-[0.6875rem] font-semibold leading-[1.0625rem] tracking-[1.43px] uppercase" data-component="heading" id="v2f-packages">
                  {"Packages & Pricing"}
                </h3>
                <ul className="flex flex-col gap-2.5 [list-style-type:none] list-outside">
                  {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles[i]} />)}
                  <li className="list-item leading-4">
                    <a className="w-[100.7px] min-h-5.5 inline-block relative py-0.5 text-muted text-sm leading-5 cursor-pointer after:content-[''] after:block after:absolute after:top-6 after:right-[100.7px] after:-bottom-px after:left-0 after:w-0 after:h-px after:bg-color-009 hover:text-color-001" data-component="link" href="/pricing">
                      All Packages →
                    </a>
                  </li>
                </ul>
              </section>
              <section className="flex flex-col gap-3.5" aria-labelledby="v2f-services">
                <h3 className="block text-color-006 text-[0.6875rem] font-semibold leading-[1.0625rem] tracking-[1.43px] uppercase" data-component="heading" id="v2f-services">
                  Services
                </h3>
                <ul className="flex flex-col gap-2.5 [list-style-type:none] list-outside">
                  {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} styles={ListRow3_styles[i]} />)}
                </ul>
              </section>
              <section className="flex flex-col gap-3.5" aria-labelledby="v2f-solutions">
                <h3 className="block text-color-006 text-[0.6875rem] font-semibold leading-[1.0625rem] tracking-[1.43px] uppercase" data-component="heading" id="v2f-solutions">
                  Solutions
                </h3>
                <ul className="flex flex-col gap-2.5 [list-style-type:none] list-outside">
                  {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} styles={ListRow4_styles[i]} />)}
                </ul>
              </section>
              <section className="flex flex-col gap-3.5" aria-labelledby="v2f-company">
                <h3 className="block text-color-006 text-[0.6875rem] font-semibold leading-[1.0625rem] tracking-[1.43px] uppercase" data-component="heading" id="v2f-company">
                  Company
                </h3>
                <ul className="flex flex-col gap-2.5 [list-style-type:none] list-outside">
                  {listRow3Data2.map((d, i) => <ListRow3 key={i} d={d} styles={ListRow3_styles2[i]} />)}
                </ul>
              </section>
              <section className="flex flex-col gap-3.5" aria-labelledby="v2f-legal">
                <h3 className="block text-color-006 text-[0.6875rem] font-semibold leading-[1.0625rem] tracking-[1.43px] uppercase" data-component="heading" id="v2f-legal">
                  Legal
                </h3>
                <ul className="flex flex-col gap-2.5 [list-style-type:none] list-outside">
                  {listRow3Data3.map((d, i) => <ListRow3 key={i} d={d} styles={ListRow3_styles3[i]} />)}
                </ul>
              </section>
            </nav>
          </div>
          <div className="border-t border-solid border-t-surface block mt-14 pt-10">
            <div className="block mb-7 text-clr-20 text-[0.6875rem] font-semibold leading-[1.0625rem] tracking-[1.76px] uppercase">
              Explore
            </div>
            <nav className="grid gap-y-9 gap-x-7 grid-cols-4 max-md:grid-cols-1 md:max-lg:grid-cols-2" data-component="nav" aria-label="Explore Context Studios">
              <section className="flex flex-col gap-3.5" aria-labelledby="v2f-forWhom">
                <h3 className="block text-color-006 text-[0.6875rem] font-semibold leading-[1.0625rem] tracking-[1.43px] uppercase" data-component="heading" id="v2f-forWhom">
                  For whom
                </h3>
                <ul className="flex flex-col gap-2.5 [list-style-type:none] list-outside">
                  {listRow5Data.map((d, i) => <ListRow5 key={i} d={d} meta={ListRow5_meta[i]} styles={ListRow5_styles[i]} />)}
                </ul>
              </section>
              <section className="flex flex-col gap-3.5" aria-labelledby="v2f-serviceAreas">
                <h3 className="block text-color-006 text-[0.6875rem] font-semibold leading-[1.0625rem] tracking-[1.43px] uppercase" data-component="heading" id="v2f-serviceAreas">
                  Service Areas
                </h3>
                <ul className="flex flex-col gap-2.5 [list-style-type:none] list-outside">
                  {listRow5Data2.map((d, i) => <ListRow5 key={i} d={d} meta={ListRow5_meta2[i]} styles={ListRow5_styles2[i]} />)}
                </ul>
              </section>
              <section className="flex flex-col gap-3.5" aria-labelledby="v2f-industries">
                <h3 className="block text-color-006 text-[0.6875rem] font-semibold leading-[1.0625rem] tracking-[1.43px] uppercase" data-component="heading" id="v2f-industries">
                  Industries
                </h3>
                <ul className="flex flex-col gap-2.5 [list-style-type:none] list-outside">
                  {listRow5Data3.map((d, i) => <ListRow5 key={i} d={d} meta={ListRow5_meta3[i]} styles={ListRow5_styles3[i]} />)}
                </ul>
              </section>
              <section className="flex flex-col gap-3.5" aria-labelledby="v2f-comparisons">
                <h3 className="block text-color-006 text-[0.6875rem] font-semibold leading-[1.0625rem] tracking-[1.43px] uppercase" data-component="heading" id="v2f-comparisons">
                  Comparisons
                </h3>
                <ul className="flex flex-col gap-2.5 [list-style-type:none] list-outside">
                  {listRow5Data4.map((d, i) => <ListRow5 key={i} d={d} meta={ListRow5_meta4[i]} styles={ListRow5_styles4[i]} />)}
                </ul>
              </section>
            </nav>
          </div>
          <section className="border border-solid border-surface block mt-12 py-7 px-8 rounded-2xl bg-color-010 max-md:px-7" aria-labelledby="v2f-glance">
            <h3 className="block mb-5 [font-family:'Space_Grotesk',_system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Arial,_sans-serif,_'Space_Grotesk',_system-ui,_sans-serif] text-[1.0625rem] font-semibold leading-[1.625rem] tracking-[-0.17px]" data-component="heading" id="v2f-glance">
              Context Studios at a glance
            </h3>
            <dl className="grid gap-y-5 gap-x-12 grid-cols-2 max-md:grid-cols-1">
              {tile2Data.map((d, i) => <Tile2 key={i} d={d} />)}
            </dl>
          </section>
          <div className="border-t border-solid border-t-surface flex mt-12 pt-6 justify-between items-center gap-5 max-md:flex-col max-md:[justify-content:initial] max-md:[align-items:initial]">
            <p className="block text-muted text-[0.8125rem] leading-[1.3125rem]">
              © 2026 Context Studios UG (haftungsbeschränkt). All Rights Reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4.5 max-md:gap-4">
              <button className="block text-muted text-[0.8125rem] leading-[1.25rem] text-center cursor-default hover:text-color-001 hover:[text-decoration-color:var(--color-001)] hover:underline" data-component="button" type="button">
                Manage cookie preferences
              </button>
              <div className="border border-solid border-surface flex p-[0.1875rem] rounded-[9px] items-center gap-1 bg-clr-16" aria-label="Choose language" role="group">
                {textLinkData.map((d, i) => <TextLink key={i} d={d} styles={TextLink_styles[i]} />)}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
