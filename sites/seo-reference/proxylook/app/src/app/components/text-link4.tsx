import type { TextLink4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLink4Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink4({ d, styles }: { d: TextLink4Data; styles: TextLink4Styles }) {
  return (
    <a className={cn("h-[1.9625rem] border border-solid border-border flex py-1.5 px-2.5 rounded-lg justify-center items-center gap-1.5 text-xs font-semibold leading-[1.0625rem] whitespace-nowrap text-nowrap bg-surface cursor-pointer max-md:h-11 max-md:min-h-11 max-md:py-2.5 hover:bg-surface-2 hover:border-clr-18", styles.className)} data-component="button" href={d.href} rel="noopener" target="_blank">
      {d.label}
    </a>
  );
}
