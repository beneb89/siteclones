export type FeatureCard2Data = {
  text: string;
  text2: string;
  title: string;
  description: string;
  description2: string;
};
/** A feature card. */
export default function FeatureCard2({ d }: { d: FeatureCard2Data }) {
  return (
    <article className="border-t-[3px] border-solid border-t-primary block py-9 px-8 bg-surface-2 2xl:hidden">
      <div className="block mb-3 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-5xl font-medium italic leading-12 2xl:hidden">
        {d.text}
      </div>
      <div className="block mb-2 text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.8px] uppercase max-md:leading-4 2xl:hidden">
        {d.text2}
      </div>
      <h3 className="block mb-[14.9px] text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.375rem] font-semibold leading-[1.75rem] max-md:mb-3.5 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      <p className="block text-muted-foreground text-[0.9375rem] leading-6 2xl:hidden">
        {d.description}
        <em className="inline italic 2xl:hidden">
          {d.description2}
        </em>
      </p>
    </article>
  );
}
