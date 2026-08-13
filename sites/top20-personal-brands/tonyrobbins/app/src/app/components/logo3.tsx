import type { ReactNode } from "react";
import type { Logo3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo3Data = {
  ariaLabel: string;
  height: string;
  width: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo3({ d, styles }: { d: Logo3Data; styles: Logo3Styles }) {
  return (
    <button className={cn("block text-center cursor-default", styles.className)} data-component="button" aria-label={d.ariaLabel} disabled>
      <svg className={cn("block overflow-hidden align-middle", styles.className2)} data-component="icon" fill="currentColor" height={d.height} stroke="currentColor" viewBox="0 0 24 24" width={d.width} xmlns="http://www.w3.org/2000/svg" strokeWidth="0">{d.icon}</svg>
    </button>
  );
}
