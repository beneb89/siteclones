import type { ReactNode } from "react";
import type { Logo3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo3Data = {
  ariaLabel: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo3({ d, styles }: { d: Logo3Data; styles: Logo3Styles }) {
  return (
    <button className={cn("flex min-w-0 items-center shrink-0 gap-2 overflow-hidden align-middle leading-[1.3125rem] text-center whitespace-nowrap text-nowrap shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px] cursor-pointer max-w-full max-lg:h-8.5 2xl:hidden", styles.className)} aria-label={d.ariaLabel} aria-pressed="false" type="button">
      <svg className="w-auto h-4.5 block min-w-0 overflow-hidden align-middle 2xl:hidden" fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
    </button>
  );
}
