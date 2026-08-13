import type { TextLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLinkData = {
  href: string;
  label2: string;
  label?: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("h-7 border-b border-solid border-b-clr-2 flex py-0.5 px-1 items-center text-color-008 text-sm leading-[1.4375rem] cursor-pointer max-lg:h-11 max-lg:min-h-11 max-lg:p-1.5 hover:border-color-005 hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)]", styles.className)} data-component="button" href={d.href} title={d.label}>
      {d.label2}
    </a>
  );
}
