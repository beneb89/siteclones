import type { TextLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLinkData = {
  label: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <button className={cn("border border-solid flex px-2.5 rounded-lg justify-center items-center shrink-0 gap-1 text-sm font-medium leading-5 text-center whitespace-nowrap text-nowrap [background-clip:padding-box] [-webkit-background-clip:padding-box] cursor-default h-8", styles.className)} data-component="button">
      {d.label}
    </button>
  );
}
