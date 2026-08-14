export type FeatureCard3Data = {
  text: string;
  title: string;
  title2: string;
  description: string;
  text2: string;
};
/** A feature card. */
export default function FeatureCard3({ d }: { d: FeatureCard3Data }) {
  return (
    <article className="border-l-[3px] border-solid border-l-primary block p-8 bg-surface-2 2xl:hidden">
      <div className="block mb-2 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[2px] max-md:leading-4 2xl:hidden">
        {d.text}
      </div>
      <h3 className="block mb-2.5 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-xl font-semibold leading-6.5 2xl:hidden" data-component="heading">
        {d.title}
        <em className="inline text-muted-foreground font-medium italic 2xl:hidden">
          {d.title2}
        </em>
      </h3>
      <p className="block mb-2.5 text-muted-foreground text-[0.9375rem] leading-[1.5625rem] 2xl:hidden">
        {d.description}
      </p>
      <div className="border-t border-solid border-t-border block mt-3.5 pt-3 text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] leading-[1.0625rem] tracking-[1.4px] uppercase max-md:leading-4 2xl:hidden">
        {d.text2}
      </div>
    </article>
  );
}
