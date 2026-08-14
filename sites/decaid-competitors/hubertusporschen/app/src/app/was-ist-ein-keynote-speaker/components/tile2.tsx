import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <tr className={cn("table-row align-middle [border-collapse:collapse] [border-spacing:2px] 2xl:hidden", styles.className)}>
      <th className={cn("table-cell py-3 px-5 align-top text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.32px] uppercase [border-collapse:collapse] [border-spacing:2px] max-md:leading-[1.125rem] 2xl:hidden", styles.className2)}>
        {d.text}
      </th>
      <td className="table-cell py-3 px-5 align-top text-muted-foreground [border-collapse:collapse] [border-spacing:2px] 2xl:hidden">
        {d.text2}
      </td>
    </tr>
  );
}
