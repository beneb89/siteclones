import type { FeatureCard6Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type FeatureCard6Data = {
  href: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard6({ d, styles }: { d: FeatureCard6Data; styles: FeatureCard6Styles }) {
  return (
    <div className={cn("h-6 block absolute top-2.5 shrink-0 2xl:hidden", styles.className)}>
      <a className="h-6 flex relative justify-center items-center content-center gap-0.5 text-primary cursor-pointer 2xl:hidden" data-component="link" href={d.href}>
        <div className="w-1 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden">
          <h6 className="block text-color-001 [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-base leading-[1.375rem] 2xl:hidden" data-component="heading">
            [
          </h6>
        </div>
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden", styles.className2)}>
          <h6 className="block text-color-001 [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-base leading-[1.375rem] 2xl:hidden" data-component="heading">
            {d.title}
          </h6>
        </div>
        <div className="w-1 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden">
          <h6 className="block text-color-001 [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-base leading-[1.375rem] 2xl:hidden" data-component="heading">
            ]
          </h6>
        </div>
      </a>
    </div>
  );
}
