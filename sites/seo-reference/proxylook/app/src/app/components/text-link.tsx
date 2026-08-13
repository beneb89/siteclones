import type { TextLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLinkData = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("block relative py-2.5 px-3.5 rounded-md text-[0.8125rem] font-semibold leading-[1.375rem] whitespace-nowrap text-nowrap cursor-pointer max-md:h-11 max-md:min-h-11 max-md:flex max-md:items-center max-md:text-xs max-md:leading-[1.1875rem] after:content-[''] after:hidden after:absolute after:bottom-0.5 after:inset-x-3 after:h-0.5 after:bg-primary after:rounded-tl-xs", styles.className)} data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
