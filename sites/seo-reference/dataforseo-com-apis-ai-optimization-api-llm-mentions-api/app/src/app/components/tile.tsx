import type { DittoNodeMetaMap } from "../ditto-meta";
import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  href: string;
  label: string;
};
/** A content tile. */
export default function Tile({ d, meta, styles }: { d: TileData; meta: DittoNodeMetaMap; styles: TileStyles }) {
  return (
    <div className="block relative">
      <a data-ditto-id={meta[1]?.anchor} className={cn("h-[2.3rem] flex py-2 items-center gap-1 text-color-007 text-[0.8125rem] font-semibold leading-[1.3125rem] cursor-pointer hover:text-background hover:[text-decoration-color:var(--background)] focus:outline-color-007 focus:[text-decoration-color:var(--color-007)]", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </div>
  );
}
