import Navbar from "./sections/navbar";
import Navbar2 from "./sections/navbar2";
import HeroSection from "./sections/hero-section";
import DataforseoRightForSection from "./sections/dataforseo-right-for-section";
import ProductGridSection from "./sections/product-grid-section";
import FeatureGridSection from "./sections/feature-grid-section";
import DataforseoEasyToSection from "./sections/dataforseo-easy-to-section";
import HowMuchDoesSection from "./sections/how-much-does-section";
import WhatReviewersSaySection from "./sections/what-reviewers-say-section";
import DoesDataforseoFitSection from "./sections/does-dataforseo-fit-section";
import WhatWrongWithSection from "./sections/what-wrong-with-section";
import CtaSection from "./sections/cta-section";
import CtaSection2 from "./sections/cta-section2";
import MoreOnDataforseoSection from "./sections/more-on-dataforseo-section";
import ReadNextArticleSection from "./sections/read-next-article-section";
import JoonasRotkoAuthorSection from "./sections/joonas-rotko-author-section";
import PricingCheckedDailySection from "./sections/pricing-checked-daily-section";
import CtaSection3 from "./sections/cta-section3";
import Footer from "./sections/footer";
import Icon from "./svgs/svg-icon";
import ListRow, { type ListRowData } from "./components/list-row";
import Icon6 from "./svgs/svg-icon6";
import Tile4, { type Tile4Data } from "./components/tile4";
import { ListRow_styles, Tile4_styles } from "./_styles";

const ListRow_data: ListRowData[] = [
    { href: "#verdict", label: "The Verdict" },
    { href: "#who-its-for", label: "Who It's For" },
    { href: "#features", label: "Features" },
    { href: "#ux-support", label: "UX & Support" },
    { href: "#pricing", label: "Pricing" },
    { href: "#ratings", label: "Ratings" },
    { href: "#ai-stack", label: "AI & Tech" },
    { href: "#downsides", label: "Downsides" },
    { href: "#faq", label: "FAQ" }
];
const Tile4_data: Tile4Data[] = [
    { text: "Cost Predictability", text2: "7/10" },
    { text: "Who Is This For", text2: "7/10" },
    { text: "Migration & Lock-in", text2: "8/10" }
];

export default function Page() {
  return (
    <>
      <div className="block relative text-background bg-clr-0">
        <a className="flex py-2.5 px-10 justify-center items-center gap-2 text-sm font-medium leading-5 text-center bg-clr-1 cursor-pointer" data-component="link" href="/recommendation">
          <span className="block">
            Want a free personalized recommendation for your software stack?
          </span>
          <span className="block font-semibold underline whitespace-nowrap text-nowrap">
            Get yours
            <span className="inline-block ml-1 [translate:2px]" aria-hidden="true">
              →
            </span>
          </span>
        </a>
        <button className="flex absolute top-[clamp(20px,_50%,_calc(100%_-_20px))] right-2 rounded-md justify-center items-center text-clr-2 text-center [translate:0px_-50%] cursor-default h-6 w-6 hover:bg-surface hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)]" data-component="button" aria-label="Dismiss" type="button">
          <Icon />
        </button>
      </div>
      <Navbar />
      <Navbar2 />
      <main className="min-h-screen block bg-background">
        <HeroSection />
        <div className="border-t border-solid border-t-surface block bg-color-001">
          <div className="flex mx-auto py-2.5 px-5 flex-wrap justify-between items-center gap-3 text-color-003 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs leading-4 max-w-5xl">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="block rounded-full bg-color-007 w-1.5 h-1.5" />
                Updated Jul 13, 2026
              </span>
              <span className="block">
                11 tools in SEO APIs
              </span>
            </div>
            <span className="block text-muted">
              Data from Buddy's database
            </span>
          </div>
        </div>
        <div className="block p-8 mx-auto max-w-7xl max-md:px-4 md:max-lg:px-6">
          <div className="w-full grid items-start gap-8 grid-cols-[180px_1fr_260px] max-lg:grid-cols-1">
            <aside className="w-45 h-95.5 block sticky top-24 max-lg:hidden">
              <div className="border border-solid border-border block p-4 rounded-2xl bg-background">
                <div className="block mb-3 text-muted-foreground text-xs font-semibold leading-4 tracking-[0.6px] uppercase">
                  On This Page
                </div>
                <ul className="block [list-style-type:none] list-outside">
                  {ListRow_data.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
                </ul>
              </div>
            </aside>
            <article className="w-178 block min-w-0 max-md:w-[21.4375rem] md:max-lg:w-180">
              <details className="block mb-8 text-muted-foreground text-sm leading-5">
                <summary className="flex items-center gap-1 list-inside cursor-pointer hover:border-muted hover:text-muted hover:outline-muted hover:[text-decoration-color:var(--muted)]">
                  <span className="block italic">
                    This page may contain affiliate links.
                  </span>
                  <Icon6 />
                </summary>
                <p className="border border-solid border-border block mt-2 p-3 rounded-lg text-color-003 text-xs italic leading-4 bg-surface-2">
                  Some links on this page are affiliate links, meaning I may earn a commission if you sign up (at no extra cost to you). This never influences my ratings or recommendations.
                </p>
              </details>
              <DataforseoRightForSection />
              <ProductGridSection />
              <FeatureGridSection />
              <DataforseoEasyToSection />
              <HowMuchDoesSection />
              <WhatReviewersSaySection />
              <DoesDataforseoFitSection />
              <WhatWrongWithSection />
              <CtaSection />
              <CtaSection2 />
              <MoreOnDataforseoSection />
              <ReadNextArticleSection />
              <JoonasRotkoAuthorSection />
              <PricingCheckedDailySection />
            </article>
            <aside className="w-65 h-193 block sticky top-24 max-lg:hidden">
              <div className="block">
                <div className="block p-5 rounded-xl text-background bg-foreground">
                  <div className="flex mb-4 items-center gap-3">
                    <div className="flex p-1.5 rounded-lg justify-center items-center shrink-0 bg-background w-10 h-10">
                      <img className="w-full h-7 block max-w-full overflow-clip object-contain align-middle" data-component="image" alt="DataForSEO logo" src="/assets/cloned/images/e8a547719322.png" />
                    </div>
                    <div className="block">
                      <p className="block text-sm font-bold leading-5">
                        DataForSEO
                      </p>
                      <p className="block text-muted-foreground text-xs leading-4 whitespace-nowrap">
                        From From $50
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-solid border-t-surface block mb-4 pt-4">
                    <span className="inline-block mb-3 py-0.5 px-2 rounded-full text-border [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[0.5px] uppercase bg-surface" data-component="badge">
                      Agent-pluggable tool
                    </span>
                    <div className="flex mb-2 justify-between items-center">
                      <div className="block">
                        <p className="block text-color-005 text-xs font-semibold leading-4">
                          AI you can buy
                        </p>
                        <p className="block text-color-003 text-[0.625rem] leading-[0.9375rem] whitespace-nowrap">
                          does the work for you
                        </p>
                      </div>
                      <span className="block text-clr-14 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xl font-black leading-7">
                        2
                        <span className="inline text-color-003 text-xs leading-4">
                          /10
                        </span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="block">
                        <p className="block text-color-005 text-xs font-semibold leading-4 whitespace-nowrap">
                          AI you can build on
                        </p>
                        <p className="block text-color-003 text-[0.625rem] leading-[0.9375rem]">
                          plugs into your stack
                        </p>
                      </div>
                      <span className="block text-color-006 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xl font-black leading-7">
                        9
                        <span className="inline text-color-003 text-xs leading-4">
                          /10
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-solid border-t-surface block mb-4 pt-4">
                    {Tile4_data.map((d, i) => <Tile4 key={i} d={d} styles={Tile4_styles[i]} />)}
                  </div>
                  <div className="border-t border-solid border-t-surface block pt-3">
                    <p className="block mb-1 text-color-006 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[0.5px] uppercase">
                      Best for
                    </p>
                    <p className="block text-color-002 text-xs leading-4">
                      Comprehensive API coverage
                    </p>
                  </div>
                  <div className="border-t border-solid border-t-surface block mt-3 pt-3">
                    <p className="block mb-1 text-accent [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[0.5px] uppercase">
                      Watch out
                    </p>
                    <p className="block text-color-002 text-xs leading-4">
                      Technical barrier to entry
                    </p>
                  </div>
                  <div className="border-t border-solid border-t-surface block mt-3 pt-3">
                    <div className="block mb-2">
                      <p className="block mb-0.5 text-muted-foreground [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[0.5px] uppercase">
                        For marketers
                      </p>
                      <p className="block text-color-002 text-xs leading-4">
                        Not a tool you use directly. It is the raw data layer other SEO tools and agents are built on, useful only if you (or a developer/AI coding assistant) are building something with it, not if you want a dashboard.
                      </p>
                    </div>
                    <div className="block">
                      <p className="block mb-0.5 text-muted-foreground [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[0.5px] uppercase">
                        For builders
                      </p>
                      <p className="block text-color-002 text-xs leading-4">
                        One of the most complete SEO data APIs available: 11 endpoint categories, five official SDKs (Python, TypeScript, PHP, Java, .NET), an OpenAPI spec, webhooks, a free sandbox, and an official MCP server covering 7+ of those APIs.
                      </p>
                    </div>
                  </div>
                  <a className="block mt-4 py-2.5 px-4 rounded-lg text-color-001 text-sm font-semibold leading-5 text-center bg-background cursor-pointer w-full hover:bg-color-005" data-component="link" href={"/go/dataforseo?pos=software-sidebar&src=software-dataforseo"} rel="nofollow sponsored noopener" target="_blank">
                    Visit Website →
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <div className="border-t border-solid border-t-border hidden fixed bottom-0 inset-x-0 z-50 py-2.5 px-3 bg-background shadow-[var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-6)_0px_-4px_20px_0px] [translate:0px_100%]">
        <div className="flex items-center gap-2">
          <h4 className="block min-w-0 flex-1 overflow-hidden text-color-001 text-sm font-semibold leading-5 whitespace-nowrap text-nowrap max-md:w-[12.4375rem] md:max-lg:w-148">
            DataForSEO
          </h4>
          <a className="block min-w-0 py-2 px-4 rounded-lg shrink-0 text-background text-sm font-medium leading-5 bg-clr-15 cursor-pointer" href={"/go/dataforseo?pos=mobile-cta&src=software-dataforseo"} rel="nofollow sponsored noopener" target="_blank">
            Try Now →
          </a>
          <button className="flex min-w-0 justify-center items-center shrink-0 text-muted-foreground text-xl leading-7 text-center cursor-default w-7 h-7" aria-label="Dismiss">
            ×
          </button>
        </div>
      </div>
      <CtaSection3 />
      <Footer />
      <div className="w-[15.6875rem] h-12 flex fixed bottom-4 left-[63.3125rem] z-50 items-center gap-2 max-md:bottom-20 max-md:left-4 md:max-lg:left-[31.3125rem] 2xl:left-[103.3125rem]">
        <button className="flex py-3 px-4 rounded-full items-center gap-2 text-background text-sm font-medium leading-5 text-center bg-color-001 shadow-[var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-6)_0px_10px_15px_-3px,var(--clr-6)_0px_4px_6px_-4px] cursor-default hover:bg-color-009" data-component="button" aria-label="Open feedback">
          <span className="block text-base leading-6">
            👋
          </span>
          Hey, got 30 seconds?
        </button>
        <button className="border border-solid border-border flex rounded-full justify-center items-center text-muted-foreground text-lg leading-7 text-center bg-background shadow-[var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-6)_0px_1px_3px_0px,var(--clr-6)_0px_1px_2px_-1px] cursor-default w-8 h-8 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)]" data-component="button" aria-label="Dismiss feedback widget">
          ×
        </button>
      </div>
    </>
  );
}
