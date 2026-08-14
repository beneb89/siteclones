export type FeatureCardData = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <div className="box-content block min-w-0 basis-1/4 [word-break:break-word] [overflow-wrap:break-word] max-lg:grow max-lg:basis-full">
      <h3 className="box-content block [font-family:-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Roboto,_Helvetica,_Arial,_sans-serif] text-[1.625rem] [font-weight:750] leading-[1.8125rem] tracking-[-1.02px] text-pretty max-lg:text-[1.375rem] max-lg:leading-[1.5rem] max-lg:tracking-[-0.86px] 2xl:text-3xl 2xl:leading-[2.0625rem] 2xl:tracking-[-1.18px]" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="box-content block mt-5 leading-[2.3125rem] text-pretty max-md:leading-[1.9375rem] md:max-lg:leading-[2.125rem]">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
