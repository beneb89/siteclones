import type { TextLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLinkData = {
  label: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <button className={cn("h-[2.1rem] border border-solid flex px-[1.2rem] rounded-md justify-center items-center grow text-muted-foreground text-[0.8125rem] leading-[0.9375rem] text-center cursor-pointer max-lg:invisible hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] focus:text-clr-22 focus:outline-clr-22 focus:[text-decoration-color:var(--clr-22)]", styles.className)} data-component="button">
      {d.label}
    </button>
  );
}
