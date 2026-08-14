export type FeatureCard5Data = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard5({ d }: { d: FeatureCard5Data }) {
  return (
    <article className="block p-8 bg-surface-2 2xl:hidden">
      <div className="block mb-2.5 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.8px] uppercase max-md:leading-4 2xl:hidden">
        {d.text}
      </div>
      <h3 className="block mb-2 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-xl font-semibold leading-6.5 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      <p className="block text-muted-foreground text-[0.9375rem] leading-[1.4375rem] 2xl:hidden">
        {d.description}
      </p>
    </article>
  );
}
