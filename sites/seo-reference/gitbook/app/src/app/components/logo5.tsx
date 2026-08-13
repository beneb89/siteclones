import type { ReactNode } from "react";
import type { Logo5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo5Data = {
  ariaLabel: string;
  href: string;
  viewBox?: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo5({ d, styles }: { d: Logo5Data; styles: Logo5Styles }) {
  return (
    <a className="h-12 flex p-3 rounded-3xl items-center shrink-0 gap-2 overflow-hidden align-middle text-muted-foreground font-semibold leading-6 whitespace-nowrap text-nowrap shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px] cursor-pointer max-w-full 2xl:hidden hover:bg-clr-7 hover:border-clr-8 hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]" data-component="link" aria-label={d.ariaLabel} href={d.href} target="self">
      <svg className={cn("w-6 h-6 block shrink-0 align-middle 2xl:hidden focus:outline-clr-18 focus:[outline-style:auto] focus:outline-[5px]", styles.className)} data-component="icon" fill="currentColor" viewBox={d.viewBox}>{d.icon}</svg>
    </a>
  );
}
