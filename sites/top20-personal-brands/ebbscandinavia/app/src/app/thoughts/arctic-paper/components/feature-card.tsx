import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type FeatureCardData = {
  href: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("hidden 2xl:block 2xl:relative 2xl:shrink-0", styles.className)}>
      <a className="hidden 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:gap-0.5 2xl:text-primary 2xl:cursor-pointer" href={d.href}>
        <div className="hidden 2xl:w-1 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap">
          <h6 className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-[1.375rem]">
            [
          </h6>
        </div>
        <div className={cn("hidden 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap", styles.className2)}>
          <h6 className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-[1.375rem]">
            {d.title}
          </h6>
        </div>
        <div className="hidden 2xl:w-1 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap">
          <h6 className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-[1.375rem]">
            ]
          </h6>
        </div>
      </a>
    </div>
  );
}
