import type { NavLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type NavLinkData = {
  href: string;
  label: string;
};
/** A navigation link. */
export default function NavLink({ d, styles }: { d: NavLinkData; styles: NavLinkStyles }) {
  return (
    <a className={cn("block text-sm leading-5 cursor-pointer", styles.className)} data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
