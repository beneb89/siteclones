import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  viewBox: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <li className="hidden 2xl:list-item" aria-hidden="true">
      <div className="hidden 2xl:w-50 2xl:block 2xl:relative 2xl:shrink-0 2xl:overflow-hidden 2xl:aspect-[2.5/1]">
        <div className={cn("hidden 2xl:block 2xl:absolute 2xl:shrink-0", styles.className)} aria-hidden="true">
          <div className={cn("hidden 2xl:block", styles.className2)}>
            <svg className={cn("hidden 2xl:block 2xl:overflow-hidden", styles.className3)} height="100%" viewBox={d.viewBox} width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon}</svg>
          </div>
        </div>
      </div>
    </li>
  );
}
