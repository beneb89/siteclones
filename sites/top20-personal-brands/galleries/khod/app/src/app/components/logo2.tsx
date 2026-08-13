import type { ReactNode } from "react";
import type { Logo2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo2Data = {
  ariaLabel: string;
  viewBox: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <button className={cn("w-10 h-10 flex relative justify-center items-center text-background text-center bg-color-001 cursor-pointer max-md:w-14 max-md:h-14 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)]", styles.className)} data-component="button" aria-label={d.ariaLabel}>
      <svg className="w-auto h-5 block overflow-hidden align-middle focus:outline-clr-17 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="none" viewBox={d.viewBox} width="100%" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
    </button>
  );
}
