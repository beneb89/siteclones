import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  imgSrc: string;
  kind?: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <img className={cn("block overflow-clip align-middle", styles.className)} alt="" src={d.imgSrc} data-component={d.kind} />
  );
}
