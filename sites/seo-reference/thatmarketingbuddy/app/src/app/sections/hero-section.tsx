import Icon4 from "../svgs/svg-icon4";
import Icon5 from "../svgs/svg-icon5";
/** Hero section — the page's lead block. */
export default function HeroSection() {
  return (
    <section className="block relative overflow-hidden" style={{ backgroundImage: "linear-gradient(to right bottom, var(--foreground) 0%, var(--foreground) 50%, var(--clr-5) 100%)" }}>
      <div className="h-full block absolute top-0 inset-x-0 overflow-hidden">
        <img className="w-320 h-[31.3125rem] block absolute overflow-clip aspect-[auto_1280/501] align-middle pointer-events-none max-md:w-[23.4375rem] max-md:h-108.5 max-md:aspect-[auto_375/434] md:max-lg:w-192 md:max-lg:h-88.5 md:max-lg:aspect-[auto_768/354] 2xl:w-480 2xl:aspect-[auto_1920/501]" height="501" src="/assets/cloned/images/4e050c212795.png" width="1280" alt="" />
      </div>
      <div className="block relative z-10 mx-auto py-16 px-5 max-w-5xl max-lg:py-12">
        <div className="flex mb-8 items-center gap-1.5 text-color-003 text-xs leading-4 tracking-[0.6px] uppercase">
          <a className="block [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] cursor-pointer hover:border-color-002 hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)]" data-component="link" href="/software">
            Software
          </a>
          <span className="block text-color-004 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace]">
            /
          </span>
          <span className="block [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace]">
            Seo Apis
          </span>
          <span className="block text-color-004 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace]">
            /
          </span>
          <span className="block tracking-[normal] normal-case">
            <div className="inline-block relative">
              <button className="border border-solid border-surface-4 inline-flex py-1.5 px-3 rounded-full items-center gap-1.5 text-background text-sm font-medium leading-5 text-center bg-surface cursor-default hover:bg-surface-4" data-component="button">
                DataForSEO
                <Icon4 />
              </button>
            </div>
          </span>
        </div>
        <div className="flex items-start gap-12 max-lg:block max-lg:[align-items:initial] max-lg:gap-[initial]">
          <div className="w-134 block min-w-0 flex-1 max-md:w-[20.9375rem] md:max-lg:w-182">
            <div className="flex mb-4 items-center gap-4">
              <div className="flex p-2 rounded-2xl justify-center items-center shrink-0 bg-background shadow-[var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-6)_0px_10px_15px_-3px,var(--clr-6)_0px_4px_6px_-4px] w-16 h-16 max-lg:p-1.5 max-lg:rounded-xl max-lg:w-12 max-lg:h-12">
                <img className="w-auto h-12 block max-w-full overflow-clip object-contain align-middle max-lg:h-9" data-component="image" alt="DataForSEO" src="/assets/cloned/images/e8a547719322.png" />
              </div>
              <h1 className="block text-background text-4xl font-black leading-[2.8125rem] tracking-[-0.9px] max-lg:text-2xl max-lg:leading-7.5 max-lg:tracking-[-0.6px]" data-component="heading">
                DataForSEO Review 2026: API-First Data Platform for SEO Tool Builders
              </h1>
            </div>
            <p className="block mb-4 text-muted-foreground text-lg leading-7 max-lg:text-sm max-lg:leading-5">
              API-first SEO data platform for developers building SEO tools and software solutions
            </p>
            <div className="flex mt-5 flex-wrap items-center gap-y-1.5 gap-x-4 text-color-003 text-sm leading-5 max-lg:text-xs max-lg:leading-4">
              <span className="block">
                <strong className="inline text-background font-bold">
                  From $50
                </strong>
                {" starting"}
              </span>
              <span className="block">
                No free plan
              </span>
            </div>
            <div className="block mt-5">
              <a className="h-10 inline-flex py-2.5 px-5 rounded-full items-center gap-2 text-color-001 text-sm font-semibold leading-5 bg-background cursor-pointer hover:bg-color-005" data-component="button" href={"/go/dataforseo?pos=software-hero&src=software-dataforseo"} rel="nofollow sponsored noopener" target="_blank">
                Visit Website
                <Icon5 />
              </a>
            </div>
          </div>
          <div className="block mt-2 shrink-0 w-[25rem] max-lg:hidden">
            <img className="w-full h-56.5 border border-solid border-surface block max-w-full rounded-xl overflow-clip align-middle shadow-[var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-7)_0px_25px_50px_-12px]" data-component="image" alt="DataForSEO homepage screenshot" src="/assets/cloned/images/6386bf2907c4.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
