import type { ReactNode } from "react";
import type { NavLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type NavLinkData = {
  height: string;
  viewBox: string;
  width: string;
  icon: ReactNode;
  label: string;
};
/** A navigation link. */
export default function NavLink({ d, styles }: { d: NavLinkData; styles: NavLinkStyles }) {
  return (
    <button className="border-b-4 border-solid border-b-surface-2 flex relative py-4.5 px-3 justify-center items-center flex-1 gap-2 text-lg font-semibold leading-4.5 text-center whitespace-nowrap text-nowrap cursor-pointer max-lg:border max-lg:border-surface max-lg:min-w-0 max-lg:py-3 max-lg:rounded-[10px] max-lg:justify-start max-md:shrink-0 max-md:gap-1.5 max-lg:text-sm max-lg:leading-[1.125rem] max-lg:bg-background max-lg:border-b-[0] max-lg:border-initial max-lg:border-b-[initial] max-md:grow-[initial] max-md:basis-[initial] max-lg:[white-space:inherit] max-lg:[text-wrap:initial] md:max-lg:px-3.5 hover:border-color-010 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)]" data-component="button" role="tab">
      <span className="w-5.5 h-5.5 flex rounded-[5px] justify-center items-center shrink-0 text-color-003 max-md:w-4.5 max-md:h-4.5">
        {" "}
        <svg className={cn("w-auto block overflow-hidden align-middle", styles.className)} data-component="icon" fill="none" height={d.height} viewBox={d.viewBox} width={d.width} xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
        {" "}
      </span>
      {d.label}
    </button>
  );
}
