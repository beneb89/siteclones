import type { TextLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLinkData = {
  ariapressed: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <button className={cn("min-h-11 border border-solid block py-2 px-3 rounded-xl text-sm font-medium leading-5 text-center cursor-default", styles.className)} data-component="button" aria-pressed={d.ariapressed} type="button">
      {d.label}
    </button>
  );
}
