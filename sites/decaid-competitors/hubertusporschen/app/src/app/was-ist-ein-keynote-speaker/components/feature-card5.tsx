export type FeatureCard5Data = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard5({ d }: { d: FeatureCard5Data }) {
  return (
    <div className="border-t border-solid border-t-surface-8 block pt-4 2xl:hidden">
      <h4 className="block mb-[0.4rem] [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-lg font-medium leading-[1.375rem] max-md:mb-1.5 2xl:hidden" data-component="heading">
        {d.title}
      </h4>
      {" "}
      <p className="block text-color-020 text-sm leading-[1.375rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
