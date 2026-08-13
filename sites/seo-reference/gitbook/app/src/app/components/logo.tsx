import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  ariaLabel: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <button className={cn("flex items-center shrink-0 gap-2 overflow-hidden align-middle leading-[1.3125rem] text-center whitespace-nowrap text-nowrap shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px] cursor-pointer max-w-full max-lg:hidden 2xl:hidden hover:bg-clr-7 hover:border-clr-8 hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]", styles.className)} data-component="button" aria-label={d.ariaLabel} aria-pressed="false" type="button">
      <svg className="w-4.5 h-4.5 block overflow-hidden align-middle max-lg:hidden 2xl:hidden focus:outline-clr-18 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
    </button>
  );
}
