import type { TextLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLinkData = {
  ariacurrent?: string;
  href: string;
  hrefLang: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("border border-solid flex min-w-8.5 px-2 rounded-[7px] justify-center items-center text-xs font-semibold leading-4 tracking-[0.48px] cursor-pointer h-7", styles.className)} data-component="button" aria-current={d.ariacurrent} href={d.href} hrefLang={d.hrefLang}>
      {d.label}
    </a>
  );
}
