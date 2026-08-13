import type { TextLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLinkData = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("block rounded-xl text-sm font-medium leading-[1.3125rem] cursor-pointer", styles.className)} data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
