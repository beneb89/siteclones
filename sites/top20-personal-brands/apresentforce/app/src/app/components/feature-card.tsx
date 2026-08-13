import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("hidden max-lg:flex max-lg:relative max-lg:p-2 max-lg:rounded-[199px] max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-2.5 after:content-[''] after:block after:absolute after:inset-0 after:h-6 after:rounded-tl-[199px] 2xl:after:hidden", styles.className)}>
      <div className={cn("hidden max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap", styles.className2)}>
        <h6 className="hidden max-lg:block max-lg:text-color-005 max-lg:[font-family:'ABC_Diatype_Regular',_'ABC_Diatype_Regular_Placeholder',_sans-serif] max-lg:text-[0.625rem] max-lg:leading-2 max-lg:tracking-[1px] max-lg:uppercase">
          {d.title}
        </h6>
      </div>
    </div>
  );
}
