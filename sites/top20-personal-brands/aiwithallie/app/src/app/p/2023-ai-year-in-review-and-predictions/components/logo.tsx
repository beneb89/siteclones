import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type LogoData = {
  href: string;
  viewBox: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <a className={cn("h-7 block cursor-pointer", styles.className)} data-component="link" href={d.href} target="_blank">
      <div className="block max-w-7">
        <svg className="w-auto h-7 block overflow-hidden align-middle" data-component="icon" fill="none" height="100%" viewBox={d.viewBox} width="100%" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
      </div>
    </a>
  );
}
