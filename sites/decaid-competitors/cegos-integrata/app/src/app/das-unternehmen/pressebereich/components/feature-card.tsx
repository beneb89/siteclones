export type FeatureCardData = {
  title: string;
  description: string;
  href: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <div className="box-content grid mb-5 p-12.5 items-center gap-[2.6375rem] bg-surface grid-cols-[5.349fr_1fr] max-md:p-[31.3px] max-md:gap-[21.3px] max-md:grid-cols-1 md:max-lg:gap-[1.9rem] 2xl:gap-[3.5625rem]">
      <div className="box-content block">
        <h4 className="box-content block mb-2.5 text-base font-bold leading-5" data-component="heading">
          {d.title}
        </h4>
        <p className="box-content block mb-5 max-md:mb-[16.3px] md:max-lg:mb-[1.125rem]">
          {d.description}
        </p>
      </div>
      <a className="box-content border border-solid border-clr-0 block py-[0.5625rem] px-4.5 rounded-[40px] text-background font-semibold leading-[1.125rem] bg-foreground cursor-pointer max-md:leading-[1rem] md:max-lg:leading-[1.0625rem]" data-component="link" href={d.href} rel="noopener" target="_blank">
        Download
      </a>
    </div>
  );
}
