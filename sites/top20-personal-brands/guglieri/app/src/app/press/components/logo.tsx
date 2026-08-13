import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("w-4.5 h-4.5 block absolute top-3.5 shrink-0", styles.className)} aria-hidden="true">
      <div className="block">
        <svg className="w-auto h-4.5 block overflow-hidden" data-component="icon" height="100%" viewBox="0 0 18 18" width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon}</svg>
      </div>
    </div>
  );
}
