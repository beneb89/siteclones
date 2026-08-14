export type FeatureCard2Data = {
  title: string;
  text: string;
};
/** A feature card. */
export default function FeatureCard2({ d }: { d: FeatureCard2Data }) {
  return (
    <div className="border-b border-solid border-b-border block">
      <button className="w-full flex py-6.5 px-1 justify-between items-center gap-6 text-[0.8125rem] leading-[1.0625rem] text-left cursor-pointer" data-component="button" aria-expanded="false" type="button">
        <h3 className="block text-lg font-semibold leading-[1.5625rem] tracking-[-0.18px] max-lg:text-base max-lg:leading-[1.375rem] max-lg:tracking-[-0.16px]" data-component="heading">
          {d.title}
        </h3>
        <span className="w-5.5 h-5.5 block relative shrink-0 before:content-[''] before:block before:absolute before:inset-y-2.5 before:inset-x-0 before:w-5.5 before:h-0.5 before:bg-primary before:rounded-tl-xs after:content-[''] after:block after:absolute after:inset-y-0 after:inset-x-2.5 after:w-0.5 after:h-5.5 after:bg-primary after:rounded-tl-xs" />
      </button>
      {" "}
      <div className="block max-h-0 overflow-hidden">
        <div className="block pb-7 px-1 text-muted-foreground leading-[1.75rem] max-lg:text-[0.9375rem] max-lg:leading-[1.625rem]">
          {d.text}
        </div>
      </div>
      {" "}
    </div>
  );
}
