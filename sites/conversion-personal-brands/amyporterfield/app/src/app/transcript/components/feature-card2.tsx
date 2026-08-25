import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard2Data = Record<string, never>;
/** A feature card. */
export default function FeatureCard2({ d, styles }: { d: FeatureCard2Data; styles: FeatureCard2Styles }) {
  return (
    <div className={cn("w-90 h-17.5 block absolute top-14.5 transform-[none] max-md:w-74 max-md:h-22.5 max-md:origin-[148px_45px] md:max-lg:origin-[180px_35px]", styles.className)}>
      <h3 className="box-content h-full block absolute top-0 inset-x-0 text-border [font-family:Montserrat] text-lg font-medium leading-[1.375rem] text-left max-md:leading-[1.1875rem] max-md:[font-size:inherit]" data-component="heading">
        <a className="box-content inline cursor-pointer" data-component="link" href="https://www.amyporterfield.com/transcript/609transcript/">
          Transcript: Powerhouse Women Recording
        </a>
      </h3>
    </div>
  );
}
