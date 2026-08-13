import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  ariaLabel: string;
  href: string;
  viewBox: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <a className="h-10 flex mr-2.5 mb-2.5 overflow-hidden text-accent text-sm leading-10 cursor-pointer hover:border-muted-foreground hover:text-muted-foreground hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)]" data-component="link" aria-label={d.ariaLabel} href={d.href} rel="nofollow" target="_blank">
      <span className={cn("flex rounded-[5px] items-center overflow-hidden pointer-events-none", styles.className)}>
        <span className={cn("flex min-w-10 justify-center items-center text-background pointer-events-none", styles.className2)}>
          <svg className="w-auto h-5 block mx-2.5 overflow-hidden pointer-events-none focus:outline-clr-9 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" viewBox={d.viewBox} xmlns="http://www.w3.org/2000/svg" fill="currentColor">{d.icon}</svg>
        </span>
      </span>
    </a>
  );
}
