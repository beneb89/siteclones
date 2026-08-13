import type { DittoNodeMetaMap } from "../ditto-meta";
import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile2({ d, meta, styles }: { d: Tile2Data; meta: DittoNodeMetaMap; styles: Tile2Styles }) {
  return (
    <tr className="table-row align-middle">
      <td className={cn("border-r border-solid border-r-border border-b border-b-border border-l border-l-border table-cell py-3 px-4 align-top text-sm leading-5 text-left", styles.className)}>
        {d.text}
      </td>
      <td data-ditto-id={meta[2]?.anchor} className="border-r border-solid border-r-border border-b border-b-border table-cell py-3 px-4 align-top text-sm leading-5 text-left">
        {d.text2}
      </td>
      <td data-ditto-id={meta[3]?.anchor} className={cn("border-r border-solid border-r-border border-b border-b-border table-cell py-3 px-4 align-top text-sm leading-5 text-left", styles.className2)}>
        {d.text3}
      </td>
    </tr>
  );
}
