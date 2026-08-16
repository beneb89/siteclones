export type FeatureCardData = {
  description: string;
  title: string;
  description2: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <article className="h-[17.75rem] min-h-70 border border-solid border-border grid min-w-0 p-7 rounded-[28px] content-between overflow-hidden bg-background grid-cols-[minmax(0,_1fr)] max-md:h-[18.85rem] max-md:rounded-[22px] max-md:min-h-0 md:max-lg:h-70 2xl:h-[286.3px]">
      <div className="grid min-w-0 [align-content:start] gap-4 grid-cols-1">
        <p className="border border-solid border-primary flex mb-1 py-[0.4375rem] px-2.5 rounded-[999px] items-center text-color-007 text-xs [font-weight:750] leading-3 whitespace-nowrap text-nowrap bg-surface-6">
          {d.description}
        </p>
        <h3 className="block text-[1.6875rem] [font-weight:710] leading-[1.75rem] [overflow-wrap:break-word] text-balance max-md:text-2xl max-md:leading-[1.5625rem] md:max-lg:text-[2rem] md:max-lg:leading-[2.1875rem] 2xl:text-[1.75rem] 2xl:leading-[1.8125rem]" data-component="heading">
          {d.title}
        </h3>
        <p className="block mt-3 text-muted-foreground text-[1.0625rem] leading-[1.5rem]">
          {d.description2}
        </p>
      </div>
    </article>
  );
}
