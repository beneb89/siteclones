import type { TextLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLinkData = {
  label: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <button className={cn("border border-solid border-surface flex relative py-1.5 px-3 rounded-lg justify-center items-center gap-[6.5px] text-muted text-[0.8125rem] font-medium leading-[1.3125rem] text-center bg-background cursor-pointer hover:bg-border hover:border-accent hover:shadow-[var(--clr-11)_0px_2px_8px_0px] hover:text-accent hover:[text-decoration-color:var(--accent)] focus:outline-muted", styles.className)} data-component="button">
      {d.label}
    </button>
  );
}
