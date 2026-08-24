import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  href: string;
  kind: string;
  viewBox: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="box-content block pointer-events-none">
      <a className={cn("block absolute overflow-hidden cursor-pointer", styles.className)} data-component="link" href={d.href} target="_blank">
        <div className="box-content h-full block">
          <svg className={cn("box-content inline overflow-hidden align-top", styles.className2)} data-component={d.kind} viewBox={d.viewBox} xmlns="http://www.w3.org/2000/svg" fill="currentColor">{d.icon}</svg>
        </div>
      </a>
    </div>
  );
}
