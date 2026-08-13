import type { ReactNode } from "react";
import type { Logo5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo5Data = {
  height?: string;
  viewBox?: string;
  width?: string;
  preserveAspectRatio?: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo5({ d, styles }: { d: Logo5Data; styles: Logo5Styles }) {
  return (
    <li className="hidden 2xl:list-item" aria-hidden="true">
      <div className="hidden 2xl:w-50 2xl:block 2xl:relative 2xl:shrink-0 2xl:overflow-hidden 2xl:aspect-[2.5/1]">
        <div className={cn("hidden 2xl:block 2xl:absolute 2xl:shrink-0", styles.className)} aria-hidden="true">
          <div className={cn("hidden 2xl:block", styles.className2)}>
            <svg className={cn("hidden 2xl:block 2xl:overflow-hidden", styles.className3)} height={d.height} viewBox={d.viewBox} width={d.width} preserveAspectRatio={d.preserveAspectRatio} fill="currentColor">{d.icon}</svg>
          </div>
        </div>
      </div>
    </li>
  );
}
