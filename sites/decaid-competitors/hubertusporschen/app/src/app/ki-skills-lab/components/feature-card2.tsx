export type FeatureCard2Data = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard2({ d }: { d: FeatureCard2Data }) {
  return (
    <div className="border-t-[3px] border-solid border-t-primary block p-8 bg-background 2xl:hidden">
      <div className="block mb-2 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.98px] max-md:leading-[1.125rem] 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <h3 className="block mb-3 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.375rem] font-medium leading-[1.625rem] tracking-[-0.22px] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-[0.9375rem] leading-[1.5625rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
