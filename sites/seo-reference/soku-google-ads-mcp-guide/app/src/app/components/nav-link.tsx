import type { NavLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type NavLinkData = {
  href: string;
  label: string;
};
/** A navigation link. */
export default function NavLink({ d, styles }: { d: NavLinkData; styles: NavLinkStyles }) {
  return (
    <a className={cn("block py-1 leading-[1.1875rem] cursor-pointer", styles.className)} data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
