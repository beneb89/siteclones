import type { ReactNode } from "react";
import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  text: string;
  fill: string;
  stroke?: string;
  strokeWidth?: string;
  icon: ReactNode;
  title: string;
  description: string;
  ariaLabel?: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className={cn("border-2 border-solid border-border block relative rounded-[18px] overflow-hidden max-md:col-start-[span_12]", styles.className)}>
      <span className={cn("h-[0.9375rem] block absolute top-4.5 right-5 opacity-70 [font-family:SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[0.5px]", styles.className2)}>
        {d.text}
      </span>
      {" "}
      <svg className={cn("w-auto inline mb-4 overflow-hidden align-middle", styles.className3)} data-component="icon" fill={d.fill} stroke={d.stroke} viewBox="0 0 24 24" strokeWidth={d.strokeWidth} aria-label={d.ariaLabel}>{d.icon}</svg>
      {" "}
      <h3 className={cn("block mb-2 [font-family:'League_Spartan',_sans-serif] font-bold uppercase", styles.className4)} data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className={cn("block", styles.className5)}>
        {d.description}
      </p>
      {" "}
    </div>
  );
}
