import type { TextLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLinkData = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("block py-2.5 px-3 rounded-md text-sm font-normal leading-[1.4375rem] whitespace-nowrap text-nowrap cursor-pointer max-lg:h-[43.3px] max-lg:overflow-hidden max-lg:text-center", styles.className)} data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
