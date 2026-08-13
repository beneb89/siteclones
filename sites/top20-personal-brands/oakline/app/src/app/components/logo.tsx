import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  viewBox: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("block relative shrink-0 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:gap-2.5", styles.className)}>
      <div className={cn("block absolute shrink-0 max-lg:relative", styles.className2)} aria-hidden="true">
        <div className={cn("block", styles.className3)}>
          <svg className={cn("w-auto block overflow-hidden", styles.className4)} data-component="image" height="100%" viewBox={d.viewBox} width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon}</svg>
        </div>
      </div>
    </div>
  );
}
