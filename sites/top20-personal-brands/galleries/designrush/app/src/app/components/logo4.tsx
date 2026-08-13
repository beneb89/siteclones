import type { ReactNode } from "react";
import type { Logo4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo4Data = {
  ariaLabel: string;
  href: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo4({ d, styles }: { d: Logo4Data; styles: Logo4Styles }) {
  return (
    <li className="flex">
      <a className="flex cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" aria-label={d.ariaLabel} href={d.href} rel="nofollow" target="_blank">
        <svg className={cn("w-5 h-5 block overflow-hidden", styles.className)} data-component="icon" height="20" width="20" fill="currentColor">{d.icon}</svg>
      </a>
    </li>
  );
}
