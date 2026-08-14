import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  label: string;
  kind?: string;
  viewBox: string;
  version?: string;
  fill: string;
  icon: ReactNode;
  id?: string;
  dataname?: string;
  ariahidden?: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="h-7 flex items-center shrink-0" title={d.label}>
      <svg className={cn("h-7 block opacity-35 max-w-30 overflow-hidden", styles.className)} data-component={d.kind} viewBox={d.viewBox} xmlns="http://www.w3.org/2000/svg" version={d.version} fill={d.fill} id={d.id} data-name={d.dataname} aria-hidden={d.ariahidden}>{d.icon}</svg>
    </div>
  );
}
