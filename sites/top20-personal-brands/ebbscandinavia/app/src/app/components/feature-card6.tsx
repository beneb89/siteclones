import type { FeatureCard6Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCard6Data = {
  title: string;
};
/** A feature card. */
export default function FeatureCard6({ d, styles }: { d: FeatureCard6Data; styles: FeatureCard6Styles }) {
  return (
    <div className={cn("hidden 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap", styles.className)}>
      <h6 className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-[1.375rem]">
        {d.title}
      </h6>
    </div>
  );
}
