import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  ariaLabel: string;
  href: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <a className={cn("block text-muted cursor-pointer hover:text-foreground hover:[text-decoration-color:var(--foreground)]", styles.className)} data-component="link" aria-label={d.ariaLabel} href={d.href} rel="noopener noreferrer" target="_blank">
      <svg className="block overflow-hidden align-middle text-color-006 h-5 w-5 hover:text-background hover:[text-decoration-color:var(--background)] focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="currentColor" viewBox="0 0 24 24">{d.icon}</svg>
    </a>
  );
}
