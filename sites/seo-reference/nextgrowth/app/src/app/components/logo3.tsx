import type { ReactNode } from "react";
import type { Logo3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo3Data = {
  ariaLabel: string;
  href: string;
  height: string;
  viewBox: string;
  width: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo3({ d, styles }: { d: Logo3Data; styles: Logo3Styles }) {
  return (
    <a className={cn("w-[2.3375rem] h-[2.3375rem] flex rounded-[10px] justify-center items-center text-color-001 bg-foreground cursor-pointer", styles.className)} data-component="link" aria-label={d.ariaLabel} href={d.href} rel="noopener noreferrer" target="_self">
      <span className="flex self-center hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)] focus:border-color-001 focus:text-color-001 focus:outline-color-001 focus:[text-decoration-color:var(--color-001)]">
        <svg className={cn("h-[1.1875rem] block overflow-hidden", styles.className2)} data-component="icon" fill="currentColor" height={d.height} viewBox={d.viewBox} width={d.width} xmlns="http://www.w3.org/2000/svg" version="1.1">{d.icon}</svg>
      </span>
    </a>
  );
}
