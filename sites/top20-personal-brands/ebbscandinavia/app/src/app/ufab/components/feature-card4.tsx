import type { FeatureCard4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard4Data = {
  title: string;
  title2: string;
};
/** A feature card. */
export default function FeatureCard4({ d, styles }: { d: FeatureCard4Data; styles: FeatureCard4Styles }) {
  return (
    <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-4 max-lg:flex-col max-lg:gap-2">
      <div className={cn("flex relative justify-start items-end content-end grow shrink-0 basis-0 gap-3 max-lg:gap-2 max-lg:grow-[initial] max-lg:basis-[initial]", styles.className)}>
        <div className={cn("flex relative opacity-40 flex-col justify-start shrink-0", styles.className2)}>
          <h4 className="block text-background [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-4xl font-medium leading-9 tracking-[-0.72px] max-lg:text-[2rem] max-lg:leading-8 max-lg:tracking-[-0.64px] 2xl:text-5xl 2xl:leading-12 2xl:tracking-[-0.96px]" data-component="heading" dir="auto">
            {d.title}
          </h4>
        </div>
      </div>
      <div className={cn("flex relative justify-start items-end content-end grow shrink-0 basis-0 gap-3 max-lg:gap-2 max-lg:grow-[initial] max-lg:basis-[initial]", styles.className3)}>
        <div className={cn("flex relative flex-col justify-start shrink-0", styles.className4)}>
          <h4 className="block text-background [font-family:'Feature_Deck_Web_Light',_'Feature_Deck_Web_Light_Placeholder',_sans-serif] text-4xl font-light leading-[2.5rem] tracking-[-0.72px] max-lg:text-[2rem] max-lg:leading-[2.1875rem] max-lg:tracking-[-0.64px] 2xl:text-5xl 2xl:leading-[3.3125rem] 2xl:tracking-[-0.96px]" data-component="heading" dir="auto">
            {d.title2}
          </h4>
        </div>
      </div>
    </div>
  );
}
