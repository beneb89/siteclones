import type { Tile11Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile11Data = {
  href: string;
};
/** A content tile. */
export default function Tile11({ d, styles }: { d: Tile11Data; styles: Tile11Styles }) {
  return (
    <td className="table-cell p-3 align-middle text-accent text-center [border-collapse:collapse] [border-spacing:2px]">
      <a className={cn("h-[1.625rem] border border-solid border-border inline-flex py-1 px-2.5 rounded-lg justify-center items-center gap-1.5 text-foreground text-[0.6875rem] font-semibold leading-4 whitespace-nowrap text-nowrap bg-surface cursor-pointer [border-collapse:collapse] [border-spacing:2px] max-md:h-11 max-md:min-h-11 max-md:[white-space:inherit] max-md:[text-wrap:initial] hover:bg-surface-2 hover:border-clr-18 focus:shadow-[var(--clr-21)_0px_6.25517e-05px_0.000125103px_0px,var(--clr-21)_0px_6.25517e-05px_0.000125103px_0px] focus:transform-[matrix(1,0,0,1,0,-6.25517e-05)]", styles.className)} data-component="button" href={d.href}>
        View →
      </a>
    </td>
  );
}
