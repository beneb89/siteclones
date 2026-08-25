import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  ariacontrols: string;
  ariaselected: string;
  id: string;
  label: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <button className={cn("border-b-2 border-solid border-b-surface-6 block relative max-w-[33%] pb-4 px-4 grow shrink-0 text-color-007 font-bold leading-[1.375rem] text-center cursor-pointer max-md:pb-3.5 max-md:whitespace-nowrap max-md:text-nowrap max-md:max-w-none max-md:grow-[initial] after:content-[''] after:block after:absolute after:top-[2.35rem] after:-bottom-0.5 after:inset-x-0 after:h-0.5 max-md:after:top-[2.225rem]", styles.className)} data-component="button" aria-controls={d.ariacontrols} aria-selected={d.ariaselected} id={d.id} role="tab" type="button">
      {d.label}
    </button>
  );
}
