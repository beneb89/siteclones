import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  ariaLabel: string;
  href: string;
  xmlns?: string;
  strokeWidth: string;
  strokewidth?: string;
  icon: ReactNode;
  ariahidden?: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <a className={cn("w-11 h-11 border-b border-solid border-b-clr-2 flex p-2 justify-center items-center text-color-003 font-semibold cursor-pointer max-lg:min-h-11", styles.className)} data-component="link" aria-label={d.ariaLabel} href={d.href} rel="noopener noreferrer" target="_blank">
      <svg className="w-auto h-5 block overflow-hidden hover:border-color-003 hover:text-color-003 hover:outline-color-003 hover:[text-decoration-color:var(--color-003)] focus:border-color-003 focus:text-color-003 focus:outline-clr-20 focus:[outline-style:auto] focus:outline-[5px] focus:[text-decoration-color:var(--color-003)]" data-component="icon" fill="none" height="20" stroke="currentColor" viewBox="0 0 24 24" width="20" xmlns={d.xmlns} strokeWidth={d.strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokewidth={d.strokewidth} aria-hidden={d.ariahidden}>{d.icon}</svg>
    </a>
  );
}
