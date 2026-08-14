export type FeatureCard2Data = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard2({ d }: { d: FeatureCard2Data }) {
  return (
    <div className="border border-solid border-border block p-[1.8625rem] bg-background max-md:p-7 2xl:hidden">
      <h4 className="block mb-[0.6625rem] text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.1875rem] font-medium leading-[1.4375rem] tracking-[-0.19px] max-md:mb-2.5 2xl:hidden" data-component="heading">
        {d.title}
      </h4>
      {" "}
      <p className="block text-muted-foreground text-[0.9375rem] leading-6 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
