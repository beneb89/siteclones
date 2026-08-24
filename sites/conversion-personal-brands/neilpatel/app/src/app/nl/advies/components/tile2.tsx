import type { Tile2Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type Tile2Data = {
  ariacontrols: string;
  ariaselected: string;
  id: string;
  label: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <button className={cn("border-b-2 border-solid border-b-surface-5 block relative min-w-0 pb-4 px-4 flex-1 text-color-001 font-bold leading-[1.375rem] text-center cursor-pointer max-md:pb-3.5 max-md:shrink-0 max-md:text-[0.9375rem] max-md:leading-4.5 max-md:whitespace-nowrap max-md:text-nowrap max-md:grow-[initial] max-md:basis-[initial] after:content-[''] after:block after:absolute after:top-[2.35rem] after:-bottom-0.5 after:inset-x-0 after:h-0.5 max-md:after:top-8", styles.className)} data-component="button" aria-controls={d.ariacontrols} aria-selected={d.ariaselected} id={d.id} role="tab" type="button">
      {d.label}
    </button>
  );
}
