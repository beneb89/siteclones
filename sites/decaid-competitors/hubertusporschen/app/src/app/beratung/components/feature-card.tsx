export type FeatureCardData = {
  text: string;
  title: string;
  description: string;
  description2: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <div className="border-t-[3px] border-solid border-t-accent block p-8 bg-surface-2">
      <div className="block mb-2 text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.98px] max-md:leading-[1.125rem]">
        {d.text}
      </div>
      {" "}
      <h3 className="block mb-3 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.375rem] font-medium leading-[1.625rem] tracking-[-0.22px]" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block mb-4 text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1.0625rem] tracking-[1.4px] uppercase max-md:leading-4">
        {d.description}
      </p>
      {" "}
      <p className="block text-muted-foreground text-[0.9375rem] leading-[1.5625rem]">
        {d.description2}
      </p>
      {" "}
    </div>
  );
}
