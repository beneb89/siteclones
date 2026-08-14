import type { NavLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type NavLinkData = {
  href: string;
  label: string;
};
/** A navigation link. */
export default function NavLink({ d, styles }: { d: NavLinkData; styles: NavLinkStyles }) {
  return (
    <a className={cn("flex py-4 px-8 justify-center items-center text-primary cursor-pointer 2xl:px-0", styles.className)} data-component="link" href={d.href}>
      <span className="border-b-2 border-solid border-b-clr-0 block -mb-1.5 pb-1 text-background text-[1.5rem] 2xl:text-[1.625rem]">
        {d.label}
      </span>
    </a>
  );
}
