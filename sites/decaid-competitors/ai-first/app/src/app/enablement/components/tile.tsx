import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  ariapressed: string;
  label: string;
  label2: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <button className={cn("block min-w-0 text-center cursor-default", styles.className)} aria-pressed={d.ariapressed} type="button">
      <span className="flex py-2.5 px-4 items-center gap-3 text-left">
        <span className="block min-w-0 text-base font-bold leading-[1.375rem] max-md:text-sm max-md:leading-[1.25rem]">
          {d.label}
        </span>
        <span className="block min-w-0 text-base leading-[1.375rem] max-md:text-sm max-md:leading-[1.25rem]">
          {d.label2}
        </span>
      </span>
    </button>
  );
}
