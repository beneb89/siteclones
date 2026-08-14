export type FeatureCard2Data = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard2({ d }: { d: FeatureCard2Data }) {
  return (
    <div className="flex py-5 px-6 items-start gap-5 bg-surface-2 2xl:hidden">
      <div className="block mt-0.5 shrink-0 text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.8125rem] font-semibold leading-[1.375rem] max-md:leading-[1.3125rem] 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <div className="h-full block 2xl:hidden">
        <h3 className="block mb-1 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] font-medium max-md:text-[1.0625rem] max-md:leading-[1.6875rem] 2xl:hidden" data-component="heading">
          {d.title}
        </h3>
        {" "}
        <p className="block text-muted-foreground text-sm leading-[1.375rem] 2xl:hidden">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
