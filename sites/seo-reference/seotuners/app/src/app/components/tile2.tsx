import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  description: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <td className={cn("w-[306.3px] border border-solid border-border table-cell p-[0.9375rem] align-top leading-[1.5rem] bg-color-001 [border-collapse:collapse] md:max-lg:w-[14.3125rem]", styles.className)} width="153">
      <p className="block [border-collapse:collapse]">
        <strong className="inline font-bold [border-collapse:collapse]">
          {d.description}
        </strong>
      </p>
    </td>
  );
}
