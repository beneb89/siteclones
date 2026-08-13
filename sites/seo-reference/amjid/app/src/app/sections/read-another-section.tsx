/** Read Another section. */
export default function ReadAnotherSection() {
  return (
    <section className="border-t border-solid border-t-border block relative py-24 px-12 overflow-hidden text-center max-lg:py-16 max-md:px-4 md:max-lg:px-[30.7px]" data-ditto-id="style-section-2" aria-labelledby="post-cta-title">
      <div className="block relative z-1 max-w-225 mx-auto">
        <div className="inline-flex mb-3 justify-center items-center gap-3 text-primary [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-xs leading-[1.1875rem] tracking-[2.37px] uppercase max-lg:text-[0.6875rem] max-lg:leading-[1.125rem] max-md:tracking-[2.2px] md:max-lg:tracking-[2.27px] 2xl:tracking-[2.4px] before:content-[''] before:hidden before:w-6 before:h-px before:bg-primary before:opacity-60">
          More
        </div>
        {" "}
        <h2 className="block my-4 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[3.5rem] leading-[5.625rem] tracking-[-1.12px] text-balance max-md:text-[2.5rem] max-md:leading-16 max-md:tracking-[-0.8px] md:max-lg:text-[2.9375rem] md:max-lg:leading-[4.75rem] md:max-lg:tracking-[-0.95px]" data-component="heading" id="post-cta-title">
          {"Read "}
          <em className="inline text-primary italic">
            another
          </em>
          .
        </h2>
        {" "}
        <div className="flex flex-wrap justify-center gap-3">
          <a className="h-[3.025rem] min-h-11 border border-solid border-clr-0 flex py-3 px-8 rounded-[999px] justify-center items-center gap-2 text-background text-sm font-semibold leading-[1.375rem] whitespace-nowrap text-nowrap bg-foreground cursor-pointer max-md:h-[46.9px] max-md:text-[0.8125rem] max-md:leading-[1.3125rem] md:max-lg:h-12 hover:bg-clr-5 hover:shadow-[var(--clr-6)_0px_11.8488px_31.5968px_-7.8992px] hover:transform-[matrix(1,0,0,1,0,-4)] focus:bg-clr-10 focus:shadow-[var(--clr-11)_0px_0.14409px_0.384239px_-0.0960598px]" data-component="button" href="/insights">
            Back to insights
          </a>
          {" "}
          <a className="h-[3.025rem] min-h-11 border border-solid border-accent flex py-3 px-8 rounded-[999px] justify-center items-center gap-2 text-sm font-semibold leading-[1.375rem] whitespace-nowrap text-nowrap cursor-pointer max-md:h-[46.9px] max-md:text-[0.8125rem] max-md:leading-[1.3125rem] md:max-lg:h-12 hover:bg-border hover:border-foreground hover:transform-[matrix(1,0,0,1,0,-4)] focus:bg-clr-8 focus:border-clr-9" data-component="button" href="/case-studies">
            See case studies
          </a>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
  );
}
