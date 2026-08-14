export type FeatureCard2Data = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard2({ d }: { d: FeatureCard2Data }) {
  return (
    <div className="border-t-[3px] border-solid border-t-accent block p-[1.8625rem] bg-surface-2 max-md:p-7 2xl:hidden">
      <h3 className="block mb-[0.6625rem] text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.1875rem] font-medium leading-[1.4375rem] tracking-[-0.19px] max-md:mb-2.5 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-[0.9375rem] leading-[1.5625rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
