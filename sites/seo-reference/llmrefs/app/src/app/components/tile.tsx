import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <tr className={cn("table-row align-middle [border-collapse:collapse] [border-spacing:2px]", styles.className)}>
      <td className="table-cell py-3 pr-3 [border-collapse:collapse] [border-spacing:2px]">
        {d.text}
      </td>
      <td className="table-cell p-3 [border-collapse:collapse] [border-spacing:2px]">
        {d.text2}
      </td>
      <td className="table-cell py-3 pl-3 [border-collapse:collapse] [border-spacing:2px]">
        {d.text3}
      </td>
    </tr>
  );
}
