import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  kind: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("block absolute transform-[none]", styles.className)}>
      <div className="box-content h-full block">
        <svg className={cn("box-content inline overflow-hidden align-top", styles.className2)} data-component={d.kind} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">{d.icon}</svg>
      </div>
    </div>
  );
}
