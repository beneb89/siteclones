export type FeatureCardData = {
  style: string;
  title: string;
  description: string;
  href: string;
  target: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <div className="block p-[2.6375rem] rounded-[10px] text-background bg-accent max-md:p-[21.3px] md:max-lg:p-[1.9rem] 2xl:p-[3.5625rem]">
      <div className="flex mb-[1.275rem] items-center gap-[1.275rem] max-md:mb-[16.3px] max-md:gap-[16.3px] md:max-lg:mb-[1.125rem] md:max-lg:gap-[1.125rem] 2xl:mb-[1.4625rem] 2xl:gap-[1.4625rem]">
        <div className="block rounded-full shrink-0 bg-cover [background-position:50%_50%] w-20 h-20 aspect-square" style={d.style} />
        <h3 className="block text-xl font-bold leading-[1.5625rem] max-md:text-base max-md:leading-[1.25rem] md:max-lg:text-lg md:max-lg:leading-[1.4375rem]" data-component="heading">
          {d.title}
        </h3>
      </div>
      <p className="block mb-5 flex-1 max-md:mb-[16.3px] md:max-lg:mb-[1.125rem]">
        {d.description}
        <br className="inline" />
      </p>
      <a className="border border-solid border-foreground inline-flex mt-4 py-[0.5625rem] px-4.5 rounded-[40px] justify-center items-center text-foreground font-semibold leading-[1.125rem] bg-background cursor-pointer max-md:leading-[1rem] md:max-lg:leading-[1.0625rem]" data-component="button" href={d.href} rel="noopener" target={d.target}>
        Learn more
      </a>
    </div>
  );
}
