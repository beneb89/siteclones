import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type FeatureCard2Data = {
  href: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard2({ d, styles }: { d: FeatureCard2Data; styles: FeatureCard2Styles }) {
  return (
    <div className={cn("hidden 2xl:h-[2.4375rem] 2xl:block 2xl:relative 2xl:shrink-0", styles.className)}>
      <a className={cn("hidden 2xl:h-[2.4375rem] 2xl:block 2xl:relative 2xl:text-primary 2xl:cursor-pointer", styles.className2)} href={d.href} rel="noopener">
        <div className={cn("hidden 2xl:h-full 2xl:flex 2xl:absolute 2xl:top-0 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap", styles.className3)}>
          <h1 className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:'Raveo_Variable_Variable',_sans-serif] 2xl:text-[2rem] 2xl:[font-weight:1000] 2xl:leading-[2.375rem] 2xl:tracking-[-0.64px] 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
            {d.title}
          </h1>
        </div>
      </a>
    </div>
  );
}
