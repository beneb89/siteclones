import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCard2Data = {
  text: string;
  title: string;
  description: string;
  description2: string;
};
/** A feature card. */
export default function FeatureCard2({ d, styles }: { d: FeatureCard2Data; styles: FeatureCard2Styles }) {
  return (
    <div className="block p-5 rounded-xl bg-foreground">
      <div className="flex mb-2.5 items-center gap-2">
        <span className={cn("block py-0.5 px-2 rounded-full [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[0.5px] uppercase", styles.className)}>
          {d.text}
        </span>
        <h3 className="block text-background text-sm font-bold leading-5" data-component="heading">
          {d.title}
        </h3>
      </div>
      <div className="block">
        <p className="block mb-3 text-color-002 text-sm leading-[1.4375rem]">
          {d.description}
        </p>
        <p className="block text-color-002 text-sm leading-[1.4375rem]">
          {d.description2}
        </p>
      </div>
    </div>
  );
}
