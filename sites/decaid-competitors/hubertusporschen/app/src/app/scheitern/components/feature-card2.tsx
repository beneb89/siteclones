import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard2Data = {
  title: string;
  title2: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard2({ d, styles }: { d: FeatureCard2Data; styles: FeatureCard2Styles }) {
  return (
    <li className={cn("list-item relative py-8 pl-24 2xl:hidden", styles.className)}>
      <h3 className="block mb-[0.6625rem] [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.625rem] font-medium leading-[2rem] tracking-[-0.38px] max-md:mb-2.5 max-md:text-2xl max-md:leading-7.5 max-md:tracking-[-0.36px] 2xl:hidden" data-component="heading">
        {d.title}
        <em className="inline text-muted-foreground font-normal italic 2xl:hidden">
          {d.title2}
        </em>
      </h3>
      <p className="w-full max-w-155 block text-muted-foreground text-base leading-[1.625rem] max-md:[font-size:inherit] 2xl:hidden">
        {d.description}
      </p>
    </li>
  );
}
