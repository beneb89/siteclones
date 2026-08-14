import type { NavLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type NavLinkData = {
  ariacurrent?: string;
  href: string;
  label: string;
  text: string;
  target?: string;
};
/** A navigation link. */
export default function NavLink({ d, styles }: { d: NavLinkData; styles: NavLinkStyles }) {
  return (
    <a className={cn("block relative py-2.5 px-5 rounded-lg align-top [font-family:Satoshi,_Arial,_sans-serif] leading-4.5 whitespace-nowrap text-nowrap bg-background cursor-pointer", styles.className)} aria-current={d.ariacurrent} href={d.href} target={d.target}>
      {d.label}
      <br className="inline" />
      <sub className="inline relative bottom-[-2.7px] text-clr-38 text-[0.6875rem] leading-0">
        {d.text}
      </sub>
    </a>
  );
}
