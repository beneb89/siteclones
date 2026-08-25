import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  kind?: string;
  ariaLabel: string;
  kind2?: string;
  height?: string;
  viewBox: string;
  width?: string;
  datav1a46a53a?: string;
  icon: ReactNode;
  datav9c89ccad?: string;
  datav4cd6f4b1?: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <button className={cn("relative justify-center items-center text-center cursor-pointer", styles.className)} data-component={d.kind} aria-label={d.ariaLabel}>
      <svg className={cn("block overflow-hidden 2xl:hidden", styles.className2)} data-component={d.kind2} height={d.height} viewBox={d.viewBox} width={d.width} xmlns="http://www.w3.org/2000/svg" data-v-1a46a53a={d.datav1a46a53a} version="1.1" fill="currentColor" data-v-9c89ccad={d.datav9c89ccad} data-v-4cd6f4b1={d.datav4cd6f4b1}>{d.icon}</svg>
    </button>
  );
}
