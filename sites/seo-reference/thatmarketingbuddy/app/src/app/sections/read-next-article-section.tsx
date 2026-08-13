/** Read Next Article section. */
export default function ReadNextArticleSection() {
  return (
    <section className="border-b border-solid border-b-color-005 block mb-10 pb-10">
      <p className="block mb-4 text-muted-foreground [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase">
        Read Next
      </p>
      <div className="grid gap-4 grid-cols-2 max-md:grid-cols-1">
        <a className="h-25 border border-solid border-border flex p-4 rounded-xl gap-4 cursor-pointer hover:border-muted-foreground" data-component="link" href="/blog/how-to-do-keyword-research">
          <div className="flex mt-1 shrink-0">
            <img className="border-2 border-solid border-background block max-w-full rounded-lg overflow-clip align-middle bg-background w-7 h-7" data-component="image" alt="" src="/assets/cloned/images/2464ca61aa0a.png" />
          </div>
          <div className="block">
            <span className="inline text-muted-foreground [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[0.5px] uppercase">
              Article
            </span>
            <p className="block mt-0.5 text-color-001 text-sm font-bold leading-5">
              How to Do Keyword Research in 2026: Step-by-Step Guide
            </p>
          </div>
        </a>
        <a className="h-25 border border-solid border-border flex p-4 rounded-xl gap-4 cursor-pointer hover:border-muted-foreground" data-component="link" href="/blog/semrush-api-pricing">
          <div className="flex mt-1 shrink-0">
            <img className="border-2 border-solid border-background block max-w-full rounded-lg overflow-clip align-middle bg-background w-7 h-7" data-component="image" alt="" src="/assets/cloned/images/2464ca61aa0a.png" />
          </div>
          <div className="block">
            <span className="inline text-muted-foreground [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[0.5px] uppercase">
              Article
            </span>
            <p className="block mt-0.5 text-color-001 text-sm font-bold leading-5">
              Semrush API Pricing: What Developers Pay in 2026
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
