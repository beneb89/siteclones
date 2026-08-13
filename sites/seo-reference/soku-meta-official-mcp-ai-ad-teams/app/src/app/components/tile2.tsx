import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <tr className={cn("table-row align-middle [border-collapse:collapse] [border-spacing:2px]", styles.className)}>
      <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
        <strong className="inline text-foreground font-semibold [border-collapse:collapse] [border-spacing:2px]">
          {d.text}
        </strong>
      </td>
      <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
        {d.text2}
      </td>
      <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
        {d.text3}
      </td>
      <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
        {d.text4}
      </td>
      <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
        {d.text5}
      </td>
      <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
        {d.text6}
      </td>
      <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
        {d.text7}
      </td>
    </tr>
  );
}
