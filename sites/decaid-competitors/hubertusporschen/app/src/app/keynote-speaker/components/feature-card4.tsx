export type FeatureCard4Data = {
  text: string;
  title: string;
  description: string;
  href: string;
  label: string;
};
/** A feature card. */
export default function FeatureCard4({ d }: { d: FeatureCard4Data }) {
  return (
    <div className="border border-solid border-border flex py-9 px-8 flex-col bg-color-002 2xl:hidden">
      <div className="block mb-[14.9px] text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1.0625rem] tracking-[2px] uppercase max-md:mb-3.5 max-md:leading-4 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <h3 className="block mb-[0.6625rem] text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.375rem] font-semibold leading-[1.625rem] max-md:mb-2.5 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-[0.9375rem] leading-[1.5rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <div className="border-t border-solid border-t-border block pt-4.5 text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1.0625rem] tracking-[1.8px] uppercase max-md:leading-4 2xl:hidden">
        <a className="inline cursor-pointer 2xl:hidden" data-component="link" href={d.href}>
          {d.label}
        </a>
      </div>
      {" "}
    </div>
  );
}
