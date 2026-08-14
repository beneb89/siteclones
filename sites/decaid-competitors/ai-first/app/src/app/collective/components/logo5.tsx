import type { ReactNode } from "react";
import type { Logo5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo5Data = {
  ariaLabel: string;
  viewBox: string;
  fill: string;
  icon: ReactNode;
  id?: string;
  version?: string;
  x?: string;
  y?: string;
  enablebackground?: string;
};
/** A logo. */
export default function Logo5({ d, styles }: { d: Logo5Data; styles: Logo5Styles }) {
  return (
    <div className="block max-w-18 text-primary h-6 w-auto" aria-label={d.ariaLabel} role="img">
      <svg className={cn("w-full h-full block overflow-hidden align-middle max-md:h-6", styles.className)} viewBox={d.viewBox} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" fill={d.fill} id={d.id} version={d.version} x={d.x} y={d.y} enable-background={d.enablebackground}>{d.icon}</svg>
    </div>
  );
}
