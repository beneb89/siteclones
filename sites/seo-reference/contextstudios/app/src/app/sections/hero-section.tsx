import Icon5 from "../svgs/svg-icon5";
import Icon6 from "../svgs/svg-icon6";
import Icon7 from "../svgs/svg-icon7";
import Icon8 from "../svgs/svg-icon8";
/** Hero section — the page's lead block. */
export default function HeroSection() {
  return (
    <section className="block relative isolate pt-40 pb-16 overflow-hidden max-md:pt-32 max-md:pb-12">
      <div className="block max-w-320 px-4 mx-auto max-md:max-w-none md:max-lg:max-w-192 2xl:max-w-384">
        <nav className="flex items-center text-muted-foreground text-sm leading-5" data-component="nav" aria-label="Breadcrumb">
          <a className="flex mr-1 items-center cursor-pointer hover:text-foreground" data-component="link" aria-label="Home" href="/">
            <Icon5 />
          </a>
          <div className="flex mr-1 items-center">
            <Icon6 />
            <a className="block cursor-pointer hover:text-foreground" data-component="link" href="/guides">
              Guides
            </a>
          </div>
          <div className="flex items-center">
            <Icon7 />
            <span className="block text-foreground font-medium" aria-current="page">
              {"Answer Engine Optimization (AEO) & GEO: The Complete Guide 2026"}
            </span>
          </div>
        </nav>
        <div className="block mt-8 mx-auto max-w-4xl">
          <h1 className="block mb-4 [font-family:'Space_Grotesk',_system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Arial,_sans-serif,_system-ui,_sans-serif] text-5xl font-bold leading-[2.875rem] tracking-[-1.2px] max-md:text-3xl max-md:leading-[1.8125rem] max-md:tracking-[-0.75px] md:max-lg:text-4xl md:max-lg:leading-[2.125rem] md:max-lg:tracking-[-0.9px]" data-component="heading">
            {"Answer Engine Optimization (AEO) & GEO: The Complete Guide 2026"}
          </h1>
          <p className="block mb-4 text-muted-foreground text-lg leading-7">
            Master AEO and GEO in 2026: Google AI Overviews and AI Mode readiness, ChatGPT Search crawler controls, llms.txt, structured data, citations, and measurement.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground text-sm leading-5">
            <div className="flex items-center gap-2">
              <Icon8 />
              <span className="block">
                Updated: July 23, 2026
              </span>
            </div>
            <span className="block">
              by Context Studios
            </span>
          </div>
        </div>
      </div>
      <div className="h-full block absolute top-0 inset-x-0 -z-10 opacity-30 pointer-events-none" aria-hidden="true">
        <img className="w-full block overflow-clip aspect-[auto_1280/475] align-middle pointer-events-none h-full max-md:aspect-[auto_375/554] md:max-lg:aspect-[auto_768/452] 2xl:aspect-[auto_1920/475]" height="475" src="/assets/cloned/images/0df58bb019e9.png" width="1280" alt="" />
      </div>
    </section>
  );
}
