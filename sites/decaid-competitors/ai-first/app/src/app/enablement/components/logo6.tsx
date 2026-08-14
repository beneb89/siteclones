import type { ReactNode } from "react";
import type { Logo6Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo6Data = {
  ariaLabel: string;
  viewBox: string;
  icon: ReactNode;
  id?: string;
  version?: string;
  x?: string;
  y?: string;
  enablebackground?: string;
};
/** A logo. */
export default function Logo6({ d, styles }: { d: Logo6Data; styles: Logo6Styles }) {
  return (
    <div className="block max-w-18 text-accent h-6 w-auto" aria-label={d.ariaLabel} role="img">
      <svg className={cn("w-full h-full block overflow-hidden align-middle max-md:h-6", styles.className)} viewBox={d.viewBox} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" fill="currentColor" id={d.id} version={d.version} x={d.x} y={d.y} enable-background={d.enablebackground}>{d.icon}</svg>
    </div>
  );
}
