import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <tr className={cn("table-row align-top text-color-002 [border-collapse:collapse] [border-spacing:2px]", styles.className)}>
      <th className="table-cell py-3 px-4 align-top text-foreground text-[0.8125rem] font-medium leading-[1.25rem] [border-collapse:collapse] [border-spacing:2px]">
        {d.text}
      </th>
      <td className="table-cell py-3 px-4 align-top [border-collapse:collapse] [border-spacing:2px]">
        {d.text2}
      </td>
      <td className="table-cell py-3 px-4 align-top [border-collapse:collapse] [border-spacing:2px]">
        {d.text3}
      </td>
    </tr>
  );
}
