export type FeatureCardData = {
  text: string;
  text2: string;
  title: string;
  title2: string;
  description: string;
  href: string;
  label: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <article className="border-t-[3px] border-solid border-t-primary flex py-10 px-8 flex-col bg-surface-2 2xl:hidden">
      <div className="block mb-[14.9px] text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[2px] uppercase max-md:mb-3.5 max-md:leading-4 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <div className="block mb-[14.9px] text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[3.5rem] italic leading-14 tracking-[-1.12px] max-md:mb-3.5 2xl:hidden">
        {d.text2}
      </div>
      {" "}
      <h3 className="block mb-[14.9px] [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.625rem] font-semibold leading-[1.9375rem] tracking-[-0.38px] max-md:mb-3.5 max-md:text-2xl max-md:leading-[1.8125rem] max-md:tracking-[-0.36px] 2xl:hidden" data-component="heading">
        {d.title}
        <em className="inline text-muted-foreground font-medium italic 2xl:hidden">
          {d.title2}
        </em>
      </h3>
      {" "}
      <p className="block mb-4.5 grow text-muted-foreground text-[0.9375rem] leading-[1.5625rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <div className="block 2xl:hidden">
        <a className="border-b border-solid border-b-primary inline pb-1 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.54px] uppercase cursor-pointer max-md:leading-[1.125rem] 2xl:hidden" data-component="link" href={d.href}>
          {d.label}
        </a>
      </div>
      {" "}
    </article>
  );
}
