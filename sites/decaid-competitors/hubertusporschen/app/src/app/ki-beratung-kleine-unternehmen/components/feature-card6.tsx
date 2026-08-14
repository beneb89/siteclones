export type FeatureCard6Data = {
  text: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard6({ d }: { d: FeatureCard6Data }) {
  return (
    <div className="block p-5 bg-background 2xl:hidden">
      <div className="block mb-[0.4rem] text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.6px] uppercase max-md:mb-1.5 max-md:leading-4 2xl:hidden">
        {d.text}
      </div>
      <h3 className="block [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-base font-medium leading-[1.25rem] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
    </div>
  );
}
