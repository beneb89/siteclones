import type { TextLink6Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLink6Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink6({ d, styles }: { d: TextLink6Data; styles: TextLink6Styles }) {
  return (
    <a className={cn("h-[1.9625rem] border border-solid border-border flex py-1.5 px-2.5 rounded-lg justify-center items-center gap-1.5 text-xs font-semibold leading-[1.0625rem] text-center whitespace-nowrap text-nowrap bg-surface cursor-pointer hover:bg-surface-2 hover:border-clr-18", styles.className)} data-component="button" href={d.href}>
      {d.label}
    </a>
  );
}
