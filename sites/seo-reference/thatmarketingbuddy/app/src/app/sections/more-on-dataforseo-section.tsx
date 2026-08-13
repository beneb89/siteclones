import Icon7 from "../svgs/svg-icon7";
/** More On Dataforseo section. */
export default function MoreOnDataforseoSection() {
  return (
    <section className="border-b border-solid border-b-color-005 block mb-10 pb-10">
      <p className="block mb-4 text-muted-foreground [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase">
        More on DataForSEO
      </p>
      <div className="grid gap-3 grid-cols-3 max-md:grid-cols-1">
        <a className="border border-solid border-border flex p-4 rounded-xl items-start gap-3 cursor-pointer hover:border-muted-foreground" data-component="link" href="/pricing/dataforseo">
          <img className="block max-w-full mt-0.5 rounded-sm shrink-0 overflow-clip align-middle w-6 h-6" data-component="image" alt="DataForSEO logo" src="/assets/cloned/images/e8a547719322.png" />
          <div className="block flex-1">
            <p className="block text-color-001 text-sm font-bold leading-5">
              Pricing Breakdown
            </p>
            <p className="block mt-0.5 text-muted-foreground text-xs leading-4">
              All plans, tiers, and hidden costs
            </p>
          </div>
          <Icon7 />
        </a>
        <a className="border border-solid border-border flex p-4 rounded-xl items-start gap-3 cursor-pointer hover:border-muted-foreground" data-component="link" href="/best/seo-apis">
          <div className="h-full block flex-1">
            <p className="block text-color-001 text-sm font-bold leading-5">
              14 Best SEO APIs for Programmatic Use in 2026
            </p>
            <p className="block mt-0.5 text-muted-foreground text-xs leading-4">
              Top picks by category
            </p>
          </div>
          <Icon7 />
        </a>
      </div>
    </section>
  );
}
