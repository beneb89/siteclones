import type { ReactNode } from "react";
import type { Logo6Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo6Data = {
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
export default function Logo6({ d, styles }: { d: Logo6Data; styles: Logo6Styles }) {
  return (
    <div className="block max-w-24 text-primary h-8 w-auto" aria-label={d.ariaLabel} role="img">
      <svg className={cn("h-8 block overflow-hidden align-middle", styles.className)} data-component="image" viewBox={d.viewBox} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" fill={d.fill} id={d.id} version={d.version} x={d.x} y={d.y} enable-background={d.enablebackground}>{d.icon}</svg>
    </div>
  );
}
