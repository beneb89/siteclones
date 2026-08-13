import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard2Data = {
  href: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard2({ d, styles }: { d: FeatureCard2Data; styles: FeatureCard2Styles }) {
  return (
    <div className={cn("h-[2.4375rem] block relative shrink-0 2xl:hidden", styles.className)}>
      <a className={cn("h-[2.4375rem] block relative text-primary cursor-pointer 2xl:hidden", styles.className2)} data-component="link" href={d.href} rel="noopener">
        <div className={cn("h-[2.4rem] flex absolute left-0 flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:h-[1.8rem] 2xl:hidden", styles.className3)}>
          <h1 className="h-full block text-color-001 [font-family:'Raveo_Variable_Variable',_sans-serif] text-[2rem] [font-weight:1000] leading-[2.375rem] tracking-[-0.64px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-2xl max-lg:leading-[1.8125rem] max-lg:tracking-[-0.48px] 2xl:hidden" data-component="heading" dir="auto">
            {d.title}
          </h1>
        </div>
      </a>
    </div>
  );
}
