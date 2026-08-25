import type { NavLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type NavLinkData = {
  href: string;
  label: string;
};
/** A navigation link. */
export default function NavLink({ d, styles }: { d: NavLinkData; styles: NavLinkStyles }) {
  return (
    <a className={cn("border-2 border-solid block py-[0.5625rem] px-4.5 rounded-[11px] font-semibold whitespace-nowrap text-nowrap cursor-pointer", styles.className)} data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
