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
    <tr className={cn("table-row align-middle [border-collapse:collapse] [border-spacing:2px]", styles.className)}>
      <td className="border border-solid border-border table-cell py-2 px-4 text-left [border-collapse:collapse] [border-spacing:2px]">
        <strong className="inline text-color-001 font-semibold [border-collapse:collapse] [border-spacing:2px]">
          {d.text}
        </strong>
      </td>
      <td className="border border-solid border-border table-cell py-2 px-4 text-left [border-collapse:collapse] [border-spacing:2px]">
        {d.text2}
      </td>
      <td className="border border-solid border-border table-cell py-2 px-4 text-left [border-collapse:collapse] [border-spacing:2px]">
        {d.text3}
      </td>
    </tr>
  );
}
