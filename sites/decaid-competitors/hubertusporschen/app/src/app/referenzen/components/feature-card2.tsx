export type FeatureCard2Data = {
  text: string;
  title: string;
  text2: string;
  text3: string;
  text4: string;
};
/** A feature card. */
export default function FeatureCard2({ d }: { d: FeatureCard2Data }) {
  return (
    <div className="block p-6 bg-color-005 2xl:hidden">
      <div className="block mb-2 text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.5625rem] font-semibold leading-[0.9375rem] tracking-[1.8px] uppercase max-md:leading-[0.875rem] 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <h3 className="block mb-2 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] font-medium italic leading-[1.3125rem] tracking-[-0.17px] max-md:text-[1.0625rem] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <div className="block mb-3 text-color-006 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.5625rem] leading-[0.9375rem] tracking-[1.08px] uppercase max-md:leading-[0.875rem] 2xl:hidden">
        {d.text2}
      </div>
      {" "}
      <div className="border-l-2 border-solid border-l-color-026 block pl-3 text-color-038 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-sm italic leading-[1.25rem] 2xl:hidden">
        {d.text3}
        <div className="block mt-[0.4rem] text-color-037 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.5625rem] not-italic leading-[0.8125rem] tracking-[0.85px] uppercase max-md:mt-1.5 2xl:hidden">
          {d.text4}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
