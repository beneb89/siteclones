import type { ReactNode } from "react";
import type { Logo7Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo7Data = {
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
export default function Logo7({ d, styles }: { d: Logo7Data; styles: Logo7Styles }) {
  return (
    <div className="block max-w-24 text-accent h-8 w-auto" aria-label={d.ariaLabel} role="img">
      <svg className={cn("h-8 block overflow-hidden align-middle", styles.className)} data-component="image" viewBox={d.viewBox} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" fill={d.fill} id={d.id} version={d.version} x={d.x} y={d.y} enable-background={d.enablebackground}>{d.icon}</svg>
    </div>
  );
}
