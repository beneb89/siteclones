export type FeatureCard5Data = {
  text: string;
  title: string;
  description: string;
  href: string;
  label: string;
};
/** A feature card. */
export default function FeatureCard5({ d }: { d: FeatureCard5Data }) {
  return (
    <article className="border-l-2 border-solid border-l-primary block p-6 bg-color-002 2xl:hidden">
      <div className="block mb-2 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[2px] max-md:leading-4 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <h3 className="block mb-[0.4rem] [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] font-semibold max-md:mb-1.5 max-md:text-[1.0625rem] max-md:leading-[1.6875rem] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block mb-3 text-muted-foreground text-sm leading-[1.25rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <a className="border-b border-solid border-b-primary inline pb-0.5 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.4px] uppercase cursor-pointer max-md:leading-4 2xl:hidden" data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </article>
  );
}
