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
    <a className={cn("min-h-[1.8125rem] block py-[0.1875rem] pl-[1.5625rem] [font-family:'Bebas_Neue',_'Bebas_Neue_Fallback',_Impact,_sans-serif] text-xl leading-[1.4375rem] cursor-pointer max-lg:text-[1.375rem] max-lg:leading-[1.5625rem] max-lg:pointer-events-none", styles.className)} data-component="link" href={d.href} rel={d.rel} target={d.target}>
      {d.label}
    </a>
  );
}
