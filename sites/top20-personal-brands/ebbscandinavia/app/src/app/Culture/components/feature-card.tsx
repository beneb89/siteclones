import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("hidden max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap", styles.className)}>
      <h6 className="hidden max-lg:block max-lg:text-color-001 max-lg:[font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] max-lg:text-base max-lg:leading-[1.375rem]">
        {d.title}
      </h6>
    </div>
  );
}
