import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  ariaLabel: string;
  href: string;
  rel?: string;
  target?: string;
  height: string;
  viewBox: string;
  width: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <li className="list-item">
      <a className={cn("w-9 h-9 inline-flex rounded-sm justify-center items-center bg-surface cursor-pointer hover:bg-clr-17 hover:transform-[matrix(1,0,0,1,0,-1)]", styles.className)} data-component="link" aria-label={d.ariaLabel} href={d.href} rel={d.rel} target={d.target}>
        {" "}
        <svg className="w-auto h-4.5 block overflow-hidden align-middle" data-component="icon" aria-hidden="true" fill="none" height={d.height} viewBox={d.viewBox} width={d.width} xmlns="http://www.w3.org/2000/svg" focusable="false">{d.icon}</svg>
        {" "}
      </a>
      {" "}
    </li>
  );
}
