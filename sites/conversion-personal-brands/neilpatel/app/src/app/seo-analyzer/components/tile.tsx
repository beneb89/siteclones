import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  ariacontrols: string;
  ariaselected: string;
  id: string;
  label: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <button className={cn("border-b-2 border-solid border-b-surface-5 block relative max-w-[33%] pb-4 px-4 grow shrink-0 text-color-001 font-bold leading-[1.375rem] text-center cursor-pointer after:content-[''] after:block after:absolute after:top-[2.35rem] after:-bottom-0.5 after:inset-x-0 after:h-0.5 max-md:after:top-[7.75rem] md:max-lg:after:top-[3.7rem]", styles.className)} data-component="button" aria-controls={d.ariacontrols} aria-selected={d.ariaselected} id={d.id} role="tab" type="button">
      {d.label}
    </button>
  );
}
