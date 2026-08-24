import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  ariaLabel: string;
  href: string;
  rel?: string;
  target?: string;
  viewBox: string;
  icon: ReactNode;
  viewBox2: string;
  icon2: ReactNode;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <a className="h-[1.6875rem] flex justify-center items-center overflow-hidden cursor-pointer max-lg:pointer-events-none" data-component="link" aria-label={d.ariaLabel} href={d.href} rel={d.rel} target={d.target}>
      <span className="w-11.5 h-[1.6875rem] block overflow-hidden max-lg:pointer-events-none" aria-hidden="true">
        <span className="w-11.5 h-13.5 flex flex-col items-center max-lg:pointer-events-none">
          <svg className={cn("h-[1.6875rem] block py-[0.3125rem] shrink-0 basis-[27px] overflow-hidden align-middle max-lg:pointer-events-none", styles.className)} data-component="icon" fill="currentColor" height="1em" stroke="currentColor" viewBox={d.viewBox} width="1em" xmlns="http://www.w3.org/2000/svg" strokeWidth="0">{d.icon}</svg>
          <svg className={cn("h-[1.6875rem] block py-[0.3125rem] shrink-0 basis-[27px] overflow-hidden align-middle text-primary max-lg:pointer-events-none", styles.className2)} data-component="icon" fill="currentColor" height="1em" stroke="currentColor" viewBox={d.viewBox2} width="1em" xmlns="http://www.w3.org/2000/svg" strokeWidth="0">{d.icon2}</svg>
        </span>
      </span>
    </a>
  );
}
