import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../../../../lib/utils";
export type LogoData = {
  ariaLabel: string;
  href: string;
  label: string;
  viewBox: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <a className="box-content h-[2.1875rem] block float-left m-0.5 align-middle text-[2rem] leading-12 cursor-pointer" data-component="link" aria-label={d.ariaLabel} href={d.href} rel="nofollow noopener" target="_blank" title={d.label}>
      <span className={cn("box-content w-[2.1875rem] h-[2.1875rem] block float-left rounded-[999px] overflow-hidden align-middle text-background text-base leading-6", styles.className)}>
        <svg className="box-content w-auto h-[2.1875rem] block rounded-[999px] overflow-hidden" data-component="icon" aria-hidden="true" height="100%" viewBox={d.viewBox} width="100%" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor">{d.icon}</svg>
      </span>
    </a>
  );
}
