import type { ReactNode } from "react";
import type { Logo4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo4Data = {
  viewBox: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo4({ d, styles }: { d: Logo4Data; styles: Logo4Styles }) {
  return (
    <div className={cn("block absolute shrink-0 max-lg:hidden 2xl:hidden", styles.className)} aria-hidden="true">
      <div className="block max-lg:hidden 2xl:hidden">
        <svg className={cn("block overflow-hidden max-lg:hidden 2xl:hidden", styles.className2)} data-component="icon" height="100%" viewBox={d.viewBox} width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon}</svg>
      </div>
    </div>
  );
}
