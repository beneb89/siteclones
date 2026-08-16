import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  description: string;
  title: string;
  description2: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <article className={cn("h-[17.8375rem] min-h-60 border border-solid grid min-w-0 p-7 rounded-[28px] content-between overflow-hidden text-left grid-cols-[minmax(0,_1fr)] max-md:h-[20.3125rem] max-md:rounded-[22px] md:max-lg:h-60 2xl:h-72", styles.className)}>
      <div className="grid min-w-0 [align-content:start] gap-4 grid-cols-1">
        <p className={cn("border border-solid flex mb-1 py-[0.4375rem] px-2.5 rounded-[999px] items-center text-xs [font-weight:750] leading-3 whitespace-nowrap text-nowrap", styles.className2)}>
          {d.description}
        </p>
        <h3 className="block text-[1.6875rem] [font-weight:710] leading-[1.8125rem] [overflow-wrap:break-word] text-balance max-md:text-2xl max-md:leading-[1.5625rem] md:max-lg:text-[2rem] md:max-lg:leading-[2.1875rem] 2xl:text-[1.8125rem] 2xl:leading-[1.875rem]" data-component="heading">
          {d.title}
        </h3>
        <p className={cn("block mt-3 text-[1.0625rem] leading-[1.5rem]", styles.className3)}>
          {d.description2}
        </p>
      </div>
    </article>
  );
}
