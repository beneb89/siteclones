export type FeatureCardData = {
  text: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <div className="border-t-[3px] border-solid border-t-accent block p-[1.8625rem] bg-background max-md:p-7 2xl:hidden">
      <div className="block mb-2 text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.98px] max-md:leading-[1.125rem] 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <h3 className="block text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.1875rem] font-medium leading-[1.5rem] tracking-[-0.19px] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
    </div>
  );
}
