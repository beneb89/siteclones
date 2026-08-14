export type FeatureCard4Data = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard4({ d }: { d: FeatureCard4Data }) {
  return (
    <div className="border-b border-solid border-b-border flex pb-5 gap-4 2xl:hidden">
      <div className="block pt-1 shrink-0 text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-xs font-semibold leading-[1.25rem] tracking-[1.44px] max-md:leading-[1.1875rem] 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <div className="block 2xl:hidden">
        <h3 className="block mb-1 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-lg font-medium leading-[1.4375rem] tracking-[-0.18px] 2xl:hidden" data-component="heading">
          {d.title}
        </h3>
        {" "}
        <p className="block text-muted-foreground text-[0.9375rem] leading-6 2xl:hidden">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
