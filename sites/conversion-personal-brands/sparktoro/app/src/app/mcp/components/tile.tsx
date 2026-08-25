import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("flex py-1.5 justify-between items-center text-[0.8125rem] leading-[1.25rem]", styles.className)}>
      <span className="block font-semibold">
        {d.text}
      </span>
      {" "}
      <span className="block text-color-001 [font-family:SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-xs leading-4.5">
        {d.text2}
      </span>
      {" "}
    </div>
  );
}
