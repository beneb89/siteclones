import type { TextLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLinkData = {
  href: string;
  label: string;
  rel?: string;
  target?: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("h-[53.5px] min-h-11 border border-solid flex py-3 px-[1.2rem] rounded-[999px] justify-center items-center cursor-pointer", styles.className)} data-component="button" href={d.href} rel={d.rel} target={d.target}>
      {d.label}
    </a>
  );
}
