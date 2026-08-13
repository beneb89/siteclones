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
    <div className="box-content block relative">
      <a data-ditto-id={meta[1]?.anchor} className={cn("box-content h-[1.4375rem] flex py-2 items-center gap-1 text-color-003 text-[0.8125rem] font-semibold cursor-pointer hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-color-003 focus:outline-color-003 focus:[text-decoration-color:var(--color-003)]", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </div>
  );
}
