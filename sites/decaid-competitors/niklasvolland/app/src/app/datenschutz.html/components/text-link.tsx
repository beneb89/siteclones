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
    <a className={cn("block relative py-[0.6875rem] px-4 rounded-lg text-muted-foreground text-sm font-medium leading-[1.375rem] whitespace-nowrap text-nowrap cursor-pointer pointer-events-none max-lg:py-3 max-lg:pr-1 max-lg:pl-3.5 max-lg:text-[0.9375rem] max-lg:leading-6 max-lg:text-left max-lg:[pointer-events:initial] after:content-[''] after:hidden after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-primary", styles.className)} data-component="link" href={d.href} rel={d.rel} target={d.target}>
      {d.label}
    </a>
  );
}
