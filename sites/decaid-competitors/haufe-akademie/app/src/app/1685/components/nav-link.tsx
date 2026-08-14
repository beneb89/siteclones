import type { NavLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type NavLinkData = {
  ariaselected: string;
  id: string;
  label: string;
};
/** A navigation link. */
export default function NavLink({ d, styles }: { d: NavLinkData; styles: NavLinkStyles }) {
  return (
    <a className={cn("border-solid border-t-border border-r-border block py-3 flex-1 font-medium leading-4 text-center cursor-pointer md:max-lg:max-w-37.5", styles.className)} data-component="link" aria-selected={d.ariaselected} href="/1685" id={d.id} role="tab">
      {d.label}
    </a>
  );
}
