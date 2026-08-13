import Navbar from "./sections/navbar";
import Header from "./sections/header";
import HeroSection from "./sections/hero-section";
import Icon7 from "./svgs/svg-icon7";

export default function Page() {
  return (
    <>
      <div className="contents">
        <div className="h-[3133.1px] min-h-screen flex flex-col max-md:h-[4493.5px] md:max-lg:h-[251.6875rem] 2xl:h-[195.9125rem]">
          <Navbar />
          {" "}
          <main className="block grow shrink-0">
            <div className="h-full min-h-screen block overflow-x-clip text-color-001 bg-color-007 max-lg:bg-background">
              <Header />
              <HeroSection />
              {" "}
              <div className="border-t border-solid border-t-border hidden fixed bottom-0 inset-x-0 z-40 py-3 px-4 justify-between items-center gap-4 bg-background max-lg:h-[4.1875rem] max-lg:flex">
                <div className="grid gap-px max-lg:min-w-0 max-lg:grid-cols-1">
                  <strong className="block min-w-0 text-[1.1875rem] font-medium leading-[1.4375rem] tracking-[-0.38px]">
                    $49
                  </strong>
                  {" "}
                  <span className="block min-w-0 text-muted [font-family:'IBM_Plex_Mono',_SFMono-Regular,_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase whitespace-nowrap">
                    billed monthly · cancel anytime
                  </span>
                </div>
                {" "}
                <a className="h-10.5 inline-flex px-4 rounded-xs items-center shrink-0 gap-1.5 text-color-002 text-sm font-medium leading-4.5 bg-primary cursor-pointer max-lg:flex" href={"/checkout/membership?offerKey=monthly_49_no_trial&source=guide%3Arail%3Amonthly&redirect_url=%2Fguides%2Fbuild-your-own-ai-seo-specialist-with-gumloop"}>
                  {"Go Pro "}
                  <Icon7 />
                </a>
              </div>
            </div>
          </main>
          {" "}
        </div>
        {" "}
        <div className="w-px h-px block absolute top-0 overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]" aria-atomic="true" aria-live="assertive" id="svelte-announcer" />
        {" "}
      </div>
      {" "}
    </>
  );
}
