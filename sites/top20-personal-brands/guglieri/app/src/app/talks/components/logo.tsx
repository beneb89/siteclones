import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  viewBox: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("hidden", styles.className)} aria-hidden="true">
      <div className="hidden 2xl:block">
        <svg className={cn("hidden 2xl:block 2xl:overflow-hidden", styles.className2)} height="100%" viewBox={d.viewBox} width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon}</svg>
      </div>
    </div>
  );
}
