export type FeatureCardData = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <article className="border-l-[3px] border-solid border-l-primary block py-8 px-[1.8625rem] bg-surface-2 max-md:px-7 2xl:hidden">
      <div className="block mb-[0.6625rem] text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.8px] uppercase max-md:mb-2.5 max-md:leading-4 2xl:hidden">
        {d.text}
      </div>
      <h3 className="block mb-[0.6625rem] [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-xl font-semibold leading-6.5 max-md:mb-2.5 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      <p className="block text-muted-foreground text-[0.9375rem] leading-[1.5625rem] 2xl:hidden">
        {d.description}
      </p>
    </article>
  );
}
