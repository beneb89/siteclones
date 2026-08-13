import type { ReactNode } from "react";
import type { Logo2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo2Data = {
  ariachecked: string;
  ariaLabel: string;
  ariapressed: string;
  viewBox: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <button className={cn("flex p-1.5 rounded-3xl items-center shrink-0 gap-2 overflow-hidden align-middle text-sm leading-[1.3125rem] text-center whitespace-nowrap text-nowrap shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px] cursor-pointer max-w-full max-lg:hidden 2xl:hidden hover:bg-clr-7 hover:border-clr-8 hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]", styles.className)} data-component="button" aria-checked={d.ariachecked} aria-label={d.ariaLabel} aria-pressed={d.ariapressed} role="radio" type="button">
      <svg className="w-3.5 h-3.5 block m-[3.5px] shrink-0 align-middle max-lg:hidden 2xl:hidden focus:outline-clr-18 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="currentColor" viewBox={d.viewBox}>{d.icon}</svg>
    </button>
  );
}
