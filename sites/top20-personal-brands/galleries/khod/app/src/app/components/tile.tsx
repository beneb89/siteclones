import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  href: string;
  label: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className="block">
      <a className={cn("inline [overflow-wrap:anywhere] cursor-pointer", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </div>
  );
}
