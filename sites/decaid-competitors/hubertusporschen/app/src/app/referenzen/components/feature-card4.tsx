export type FeatureCard4Data = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard4({ d }: { d: FeatureCard4Data }) {
  return (
    <div className="block py-[1.8625rem] px-6 bg-background max-md:py-7 2xl:hidden">
      <div className="block mb-2 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.8px] uppercase max-md:leading-4 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <h3 className="block mb-2 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-lg font-medium leading-[1.4375rem] tracking-[-0.18px] 2xl:hidden" data-component="heading">
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
