export type FeatureCard4Data = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard4({ d }: { d: FeatureCard4Data }) {
  return (
    <div className="block p-[1.8625rem] bg-background max-md:p-7 2xl:hidden">
      <div className="block mb-2 text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.98px] max-md:leading-[1.125rem] 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <h3 className="block mb-2 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-lg font-medium leading-[1.375rem] tracking-[-0.18px] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-sm leading-[1.375rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
