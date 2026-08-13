import type { ReactNode } from "react";
import type { Logo2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo2Data = {
  style?: string;
  icon: ReactNode;
  text: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className={cn("h-15 flex py-1 px-[0.9375rem] rounded-[5px] items-center gap-5 text-lg font-medium leading-[1.4375rem] cursor-pointer pointer-events-none", styles.className)} style={d.style}>
      <svg className="w-8 h-8 block overflow-hidden pointer-events-none" data-component="icon" height="32" width="32" fill="currentColor">{d.icon}</svg>
      {d.text}
    </div>
  );
}
