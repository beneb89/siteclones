import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("w-[3.3125rem] h-[3.1875rem] block absolute left-[2.1875rem] transform-[none] max-md:w-[14.3125rem] max-md:h-29.5 max-md:origin-[114.5px_59px] md:max-lg:origin-[26.5px_25.5px]", styles.className)}>
      <h1 className="box-content h-full block absolute top-0 inset-x-0 text-color-002 [font-family:'Newsreader_Display_Light_Italic'] text-[3.1875rem] leading-[3.1875rem] tracking-[-0.51px] text-left max-md:text-[1.75rem] max-md:leading-7 max-md:tracking-[-0.28px] max-md:text-center" data-component="heading">
        {d.title}
        <br className="box-content inline" />
      </h1>
    </div>
  );
}
