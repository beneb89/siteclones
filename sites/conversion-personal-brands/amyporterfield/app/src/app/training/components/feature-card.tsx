import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className="box-content block">
      <div className={cn("block absolute", styles.className)}>
        <h2 className={cn("box-content h-full block absolute top-0 inset-x-0 text-color-002 text-[6.875rem] leading-27.5 tracking-[-1.1px] text-center max-md:text-[2.3125rem] max-md:leading-[2.3125rem] max-md:tracking-[-0.37px]", styles.className2)} data-component="heading">
          {d.title}
          <br className="box-content inline" />
        </h2>
      </div>
    </div>
  );
}
