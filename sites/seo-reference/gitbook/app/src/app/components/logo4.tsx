import type { ReactNode } from "react";
import type { Logo4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo4Data = {
  ariachecked: string;
  ariaLabel: string;
  ariapressed: string;
  viewBox: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo4({ d, styles }: { d: Logo4Data; styles: Logo4Styles }) {
  return (
    <button className={cn("flex min-w-0 p-1.5 rounded-3xl items-center shrink-0 gap-2 overflow-hidden align-middle text-sm leading-[1.3125rem] text-center whitespace-nowrap text-nowrap shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px] cursor-pointer max-w-full max-lg:h-[2.0625rem] 2xl:hidden", styles.className)} aria-checked={d.ariachecked} aria-label={d.ariaLabel} aria-pressed={d.ariapressed} role="radio" type="button">
      <svg className="w-3.5 h-3.5 block min-w-0 m-[3.5px] shrink-0 align-middle 2xl:hidden" fill="currentColor" viewBox={d.viewBox}>{d.icon}</svg>
    </button>
  );
}
