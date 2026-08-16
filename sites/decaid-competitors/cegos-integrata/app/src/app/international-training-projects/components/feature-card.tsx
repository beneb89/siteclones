import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  title: string;
  text: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("flex p-4 rounded-[10px] flex-col justify-center items-center aspect-square", styles.className)}>
      <h2 className="block [font-family:Ryker,_sans-serif,_sans-serif] text-2xl font-bold leading-[2.1875rem] max-md:text-[1.0625rem] max-md:leading-[1.5625rem] md:max-lg:text-[1.3125rem] md:max-lg:leading-[1.875rem]" data-component="heading">
        {d.title}
      </h2>
      <span className="block">
        {d.text}
      </span>
    </div>
  );
}
