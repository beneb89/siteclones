import type { DittoNodeMetaMap } from "../ditto-meta";
import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  ariaLabel: string;
  label: string;
  label2: string;
  label3: string;
  label4: string;
  label5: string;
};
/** A content tile. */
export default function Tile({ d, meta, styles }: { d: TileData; meta: DittoNodeMetaMap; styles: TileStyles }) {
  return (
    <button className={cn("hidden w-full 2xl:flex 2xl:py-3 2xl:px-4 2xl:rounded-lg 2xl:justify-between 2xl:items-center 2xl:text-left 2xl:cursor-pointer 2xl:pointer-events-none", styles.className)} aria-label={d.ariaLabel} type="button">
      <div className="hidden 2xl:flex 2xl:flex-col 2xl:gap-0.5 2xl:pointer-events-none">
        <div className="hidden 2xl:flex 2xl:items-center 2xl:gap-2 2xl:pointer-events-none">
          <span className="hidden 2xl:block 2xl:font-semibold 2xl:pointer-events-none">
            {d.label}
          </span>
          <span className="hidden 2xl:block 2xl:py-0.5 2xl:px-2 2xl:rounded-full 2xl:text-accent 2xl:text-xs 2xl:font-semibold 2xl:leading-4 2xl:bg-clr-21 2xl:pointer-events-none">
            {d.label2}
          </span>
        </div>
        <span className={cn("hidden 2xl:block 2xl:text-clr-18 2xl:text-sm 2xl:leading-5 2xl:pointer-events-none", styles.className2)}>
          {d.label3}
        </span>
      </div>
      <div className="hidden 2xl:flex 2xl:items-center 2xl:gap-2 2xl:pointer-events-none">
        <span className="hidden 2xl:block 2xl:text-clr-18 2xl:text-sm 2xl:leading-5 2xl:line-through 2xl:pointer-events-none">
          {d.label4}
        </span>
        <span data-ditto-id={meta[8]?.anchor} className={cn("hidden 2xl:block 2xl:text-lg 2xl:font-bold 2xl:leading-7 2xl:pointer-events-none", styles.className3)}>
          {d.label5}
        </span>
      </div>
    </button>
  );
}
