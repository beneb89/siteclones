export type FeatureCard3Data = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard3({ d }: { d: FeatureCard3Data }) {
  return (
    <div className="border-b border-solid border-b-border grid py-[1.8625rem] items-start gap-[1.8625rem] grid-cols-[60px_1fr] max-md:py-7 max-md:gap-5 max-md:grid-cols-[44px_1fr] 2xl:hidden">
      <div className="block text-accent [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-4xl font-medium italic leading-9 tracking-[-0.72px] 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <div className="block 2xl:hidden">
        <h3 className="block mb-[0.4rem] text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-xl font-semibold leading-[1.5625rem] max-md:mb-1.5 2xl:hidden" data-component="heading">
          {d.title}
        </h3>
        {" "}
        <p className="block text-muted-foreground text-[0.9375rem] leading-[1.4375rem] 2xl:hidden">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
