import type { Tile4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile4Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile4({ d, styles }: { d: Tile4Data; styles: Tile4Styles }) {
  return (
    <tr className={cn("table-row align-middle [border-collapse:collapse] [border-spacing:2px] 2xl:hidden", styles.className)}>
      <th className={cn("table-cell py-[14.9px] px-5 align-top [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-base font-medium leading-[1.6875rem] [border-collapse:collapse] [border-spacing:2px] max-md:py-3.5 max-md:leading-[1.625rem] 2xl:hidden", styles.className2)}>
        {d.text}
      </th>
      <td className={cn("table-cell py-[14.9px] px-5 align-top [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-sm leading-[1.5rem] [border-collapse:collapse] [border-spacing:2px] max-md:py-3.5 max-md:leading-[1.375rem] 2xl:hidden", styles.className3)}>
        {d.text2}
      </td>
      <td className="table-cell py-[14.9px] px-5 align-top text-muted-foreground [border-collapse:collapse] [border-spacing:2px] max-md:py-3.5 2xl:hidden">
        {d.text3}
      </td>
    </tr>
  );
}
