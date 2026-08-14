import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <p className={cn("box-content block pt-[0.3125rem] pb-2.5 font-normal", styles.className)}>
      {d.description}
      <br className="box-content inline" />
      {d.description2}
    </p>
  );
}
