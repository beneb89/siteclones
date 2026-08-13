import type { TextLink3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLink3Data = {
  ariaLabel: string;
  href: string;
  style: string;
  label: string;
};
/** A text link. */
export default function TextLink3({ d, styles }: { d: TextLink3Data; styles: TextLink3Styles }) {
  return (
    <a className={cn("border border-solid flex py-3 rounded-xl flex-col justify-center items-center gap-1.5 cursor-pointer pointer-events-none", styles.className)} aria-label={d.ariaLabel} href={d.href}>
      <span className={cn("w-5 h-5 block min-w-0 pointer-events-none", styles.className2)} style={d.style} aria-hidden="true" />
      <span className={cn("block min-w-0 text-[0.6875rem] leading-[1.0625rem] pointer-events-none", styles.className3)}>
        {d.label}
      </span>
    </a>
  );
}
