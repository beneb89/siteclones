import type { NavLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type NavLinkData = {
  href: string;
  label: string;
};
/** A navigation link. */
export default function NavLink({ d, styles }: { d: NavLinkData; styles: NavLinkStyles }) {
  return (
    <a className={cn("block py-[0.4375rem] px-3 rounded-md text-[0.8125rem] font-medium leading-[1.375rem] whitespace-nowrap text-nowrap cursor-pointer", styles.className)} data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
