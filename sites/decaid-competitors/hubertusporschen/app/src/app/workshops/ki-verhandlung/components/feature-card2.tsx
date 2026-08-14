export type FeatureCard2Data = {
  text: string;
  text2: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard2({ d }: { d: FeatureCard2Data }) {
  return (
    <div className="border-t border-solid border-t-border grid py-[1.8625rem] items-start gap-y-2 gap-x-10 grid-cols-[180px_1fr] max-md:py-7 max-md:grid-cols-1 2xl:hidden">
      <div className="block 2xl:hidden">
        <div className="block mb-[0.4rem] text-color-011 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.76px] uppercase max-md:mb-1.5 max-md:leading-[1.125rem] 2xl:hidden">
          {d.text}
        </div>
        {" "}
        <div className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] leading-[1.0625rem] tracking-[1.4px] uppercase max-md:leading-4 2xl:hidden">
          {d.text2}
        </div>
        {" "}
      </div>
      {" "}
      <div className="block 2xl:hidden">
        <h3 className="block mb-2 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-xl font-semibold leading-[1.5625rem] 2xl:hidden" data-component="heading">
          {d.title}
        </h3>
        {" "}
        <p className="block text-muted-foreground text-[0.9375rem] leading-[1.5625rem] 2xl:hidden">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
