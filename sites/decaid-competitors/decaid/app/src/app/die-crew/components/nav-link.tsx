import type { NavLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type NavLinkData = {
  href: string;
  label: string;
  text: string;
  ariacurrent?: string;
  target?: string;
};
/** A navigation link. */
export default function NavLink({ d, styles }: { d: NavLinkData; styles: NavLinkStyles }) {
  return (
    <a className={cn("block relative py-2.5 px-5 rounded-lg align-top [font-family:Satoshi,_Arial,_sans-serif] leading-4.5 whitespace-nowrap text-nowrap bg-background cursor-pointer", styles.className)} href={d.href} aria-current={d.ariacurrent} target={d.target}>
      {d.label}
      <br className="inline" />
      <sub className="inline relative bottom-[-2.7px] text-clr-38 text-[0.6875rem] leading-0">
        {d.text}
      </sub>
    </a>
  );
}
