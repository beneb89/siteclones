import type { FeatureCard4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCard4Data = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard4({ d, styles }: { d: FeatureCard4Data; styles: FeatureCard4Styles }) {
  return (
    <div className={cn("block", styles.className)}>
      <h3 className="block mt-8 mb-3 text-color-003 [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] text-xl font-semibold leading-7" data-component="heading">
        {d.title}
      </h3>
      <p className="block mb-5">
        {d.description}
      </p>
    </div>
  );
}
