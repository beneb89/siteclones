export type FeatureCard2Data = {
  text: string;
  title: string;
  description: string;
  text2: string;
};
/** A feature card. */
export default function FeatureCard2({ d }: { d: FeatureCard2Data }) {
  return (
    <article className="border-l-[3px] border-solid border-l-primary flex py-8 px-[1.8625rem] flex-col bg-surface-2 max-md:px-7 2xl:hidden">
      <div className="block mb-3 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[2px] uppercase max-md:leading-4 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <h3 className="block mb-2 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-xl font-medium leading-6.5 tracking-[-0.2px] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block mb-3 grow text-muted-foreground text-sm leading-[1.375rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <div className="border-t border-solid border-t-border block pt-[0.6625rem] text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] leading-[1.0625rem] tracking-[1px] max-md:pt-2.5 max-md:leading-4 2xl:hidden">
        {d.text2}
      </div>
      {" "}
    </article>
  );
}
