import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard2Data = {
  description: string;
  title: string;
  description2: string;
};
/** A feature card. */
export default function FeatureCard2({ d, styles }: { d: FeatureCard2Data; styles: FeatureCard2Styles }) {
  return (
    <article className={cn("min-h-60 border border-solid border-border grid min-w-0 p-7 rounded-[28px] content-between overflow-hidden text-left bg-background grid-cols-[minmax(0,_1fr)] max-md:rounded-[22px]", styles.className)}>
      <div className="grid min-w-0 [align-content:start] gap-4 grid-cols-1">
        <p className="border border-solid border-primary flex mb-1 py-[0.4375rem] px-2.5 rounded-[999px] items-center text-color-007 text-xs [font-weight:750] leading-3 whitespace-nowrap text-nowrap bg-surface-6">
          {d.description}
        </p>
        <h3 className="block text-3xl [font-weight:710] leading-[2.0625rem] [overflow-wrap:break-word] text-balance max-md:text-2xl max-md:leading-[1.5625rem] md:max-lg:text-[2rem] md:max-lg:leading-[2.1875rem] 2xl:text-[1.9375rem] 2xl:leading-[2.125rem]" data-component="heading">
          {d.title}
        </h3>
        <p className="block mt-3 text-muted-foreground text-[1.0625rem] leading-[1.5rem]">
          {d.description2}
        </p>
      </div>
    </article>
  );
}
