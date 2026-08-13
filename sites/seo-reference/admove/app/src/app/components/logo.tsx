import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  ariaLabel: string;
  href: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <a className="w-10 h-10 flex relative p-2 rounded-lg justify-start items-center content-center shrink-0 gap-2 text-accent cursor-pointer" data-component="link" aria-label={d.ariaLabel} href={d.href} target="_blank">
      <div className="basis-full shrink-0 h-6 block relative overflow-hidden">
        <div className={cn("block absolute shrink-0", styles.className)} aria-hidden="true">
          <div className="h-full block">
            <svg className={cn("block overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[5px]", styles.className2)} data-component="icon" fill="currentColor">{d.icon}</svg>
          </div>
        </div>
      </div>
    </a>
  );
}
