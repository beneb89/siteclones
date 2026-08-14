export type FeatureCardData = {
  text: string;
  title: string;
  title2: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <article className="border-t-[3px] border-solid border-t-accent border-r border-r-color-003 border-b border-b-color-003 border-l border-l-color-003 flex p-8 flex-col gap-[14.9px] bg-color-002 max-md:gap-3.5 2xl:hidden">
      <div className="block text-accent [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-5xl italic leading-12 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <h3 className="block text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.375rem] font-semibold leading-[1.625rem] tracking-[-0.22px] 2xl:hidden" data-component="heading">
        {d.title}
        <em className="inline text-muted-foreground font-medium italic 2xl:hidden">
          {d.title2}
        </em>
        {" "}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-[0.9375rem] leading-6 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </article>
  );
}
