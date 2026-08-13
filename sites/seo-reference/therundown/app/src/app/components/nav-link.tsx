import type { NavLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type NavLinkData = {
  href: string;
  label: string;
  ariacurrent?: string;
};
/** A navigation link. */
export default function NavLink({ d, styles }: { d: NavLinkData; styles: NavLinkStyles }) {
  return (
    <a className={cn("h-16 flex relative px-3 items-center self-stretch [font-family:'IBM_Plex_Mono',_SFMono-Regular,_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs font-medium leading-[0.9375rem] tracking-[0.96px] uppercase whitespace-nowrap text-nowrap cursor-pointer", styles.className)} data-component="link" href={d.href} aria-current={d.ariacurrent}>
      {d.label}
    </a>
  );
}
