import type { ReactNode } from "react";
import type { Logo2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo2Data = {
  kind: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className={cn("block absolute transform-[none]", styles.className)}>
      <div className="box-content h-full block">
        <svg className={cn("box-content inline overflow-hidden align-top", styles.className2)} data-component={d.kind} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">{d.icon}</svg>
      </div>
    </div>
  );
}
