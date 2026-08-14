export type FeatureCardData = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <div className="border border-solid border-border block p-[1.8625rem] bg-color-002 max-md:p-7 2xl:hidden">
      <div className="block mb-3 text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.8125rem] font-semibold leading-[1.375rem] max-md:leading-[1.3125rem] 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <h3 className="block mb-2 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-lg font-medium leading-[1.9375rem] max-md:leading-[1.8125rem] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-sm leading-[1.4375rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
