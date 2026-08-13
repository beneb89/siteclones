import type { ReactNode } from "react";
import type { Logo2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo2Data = {
  viewBox: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className={cn("block absolute shrink-0 2xl:hidden", styles.className)} aria-hidden="true">
      <div className="block 2xl:hidden">
        <svg className={cn("w-auto block overflow-hidden 2xl:hidden", styles.className2)} data-component="icon" height="100%" viewBox={d.viewBox} width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon}</svg>
      </div>
    </div>
  );
}
