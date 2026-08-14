export type FeatureCard3Data = {
  text: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard3({ d }: { d: FeatureCard3Data }) {
  return (
    <div className="block p-6 bg-background 2xl:hidden">
      <div className="block mb-[0.4rem] text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.6px] uppercase max-md:mb-1.5 max-md:leading-4 2xl:hidden">
        {d.text}
      </div>
      <h3 className="block [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-base font-medium leading-[1.3125rem] max-md:[font-size:inherit] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
    </div>
  );
}
