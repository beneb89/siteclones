import type { TextLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLinkData = {
  label: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("h-8.5 border border-solid border-border flex py-1 px-3 rounded-lg items-center gap-2 cursor-pointer", styles.className)} data-component="button" href="/archive">
      {d.label}
    </a>
  );
}
