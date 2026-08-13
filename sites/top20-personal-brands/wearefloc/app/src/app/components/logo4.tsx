import type { ReactNode } from "react";
import type { Logo4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo4Data = {
  height?: string;
  viewBox?: string;
  width?: string;
  preserveAspectRatio?: string;
  icon: ReactNode;
  kind?: string;
};
/** A logo. */
export default function Logo4({ d, styles }: { d: Logo4Data; styles: Logo4Styles }) {
  return (
    <li className="list-item 2xl:hidden" aria-hidden="true">
      <div className="w-50 block relative shrink-0 overflow-hidden aspect-[2.5/1] 2xl:hidden">
        <div className={cn("block absolute shrink-0 2xl:hidden", styles.className)} aria-hidden="true">
          <div className={cn("block 2xl:hidden", styles.className2)}>
            <svg className={cn("block overflow-hidden 2xl:hidden", styles.className3)} height={d.height} viewBox={d.viewBox} width={d.width} preserveAspectRatio={d.preserveAspectRatio} fill="currentColor" data-component={d.kind}>{d.icon}</svg>
          </div>
        </div>
      </div>
    </li>
  );
}
