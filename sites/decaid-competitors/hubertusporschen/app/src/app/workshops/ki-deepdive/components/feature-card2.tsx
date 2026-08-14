export type FeatureCard2Data = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard2({ d }: { d: FeatureCard2Data }) {
  return (
    <div className="flex items-start gap-6 2xl:hidden">
      <div className="flex mt-1 rounded-full justify-center items-center shrink-0 bg-accent w-8 h-8 2xl:hidden">
        <span className="block text-color-005 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-bold leading-[1.1875rem] max-md:leading-[1.125rem] 2xl:hidden">
          {d.text}
        </span>
        {" "}
      </div>
      {" "}
      <div className="block 2xl:hidden">
        <h3 className="block mb-2 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.1875rem] font-semibold leading-[1.4375rem] 2xl:hidden" data-component="heading">
          {d.title}
        </h3>
        {" "}
        <p className="block text-muted-foreground text-[0.9375rem] leading-[1.5625rem] 2xl:hidden">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
