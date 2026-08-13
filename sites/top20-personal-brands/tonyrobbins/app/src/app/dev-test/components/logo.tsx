import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  ariaLabel: string;
  height: string;
  width: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <button className={cn("block text-center cursor-default", styles.className)} data-component="button" aria-label={d.ariaLabel} disabled>
      <svg className={cn("block overflow-hidden align-middle", styles.className2)} data-component="icon" fill="currentColor" height={d.height} stroke="currentColor" viewBox="0 0 24 24" width={d.width} xmlns="http://www.w3.org/2000/svg" strokeWidth="0">{d.icon}</svg>
    </button>
  );
}
