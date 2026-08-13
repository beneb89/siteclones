import type { ReactNode } from "react";
import type { Logo3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo3Data = {
  viewBox: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo3({ d, styles }: { d: Logo3Data; styles: Logo3Styles }) {
  return (
    <div className={cn("hidden", styles.className)} aria-hidden="true">
      <div className="hidden max-lg:block">
        <svg className={cn("hidden max-lg:w-auto max-lg:block max-lg:overflow-hidden", styles.className2)} height="100%" viewBox={d.viewBox} width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon}</svg>
      </div>
    </div>
  );
}
