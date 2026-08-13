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
    <tr className={cn("border-t border-solid border-t-color-002 table-row align-middle [border-collapse:collapse]", styles.className)}>
      <td className="border border-solid border-border table-cell py-1.5 px-[0.8125rem] align-middle [border-collapse:collapse]">
        <code className="inline py-[2.7px] px-[0.3375rem] rounded-md [font-family:ui-monospace,_SFMono-Regular,_'SF_Mono',_Menlo,_Consolas,_'Liberation_Mono',_monospace] text-sm leading-[1.25rem] whitespace-break-spaces bg-color-001 [border-collapse:collapse]">
          {d.text}
        </code>
      </td>
      <td className="border border-solid border-border table-cell py-1.5 px-[0.8125rem] align-middle [border-collapse:collapse]">
        {d.text2}
      </td>
      <td className="border border-solid border-border table-cell py-1.5 px-[0.8125rem] align-middle [border-collapse:collapse]">
        {d.text3}
      </td>
    </tr>
  );
}
