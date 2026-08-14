import type { TileStyles } from "../_styles";
import { cn } from "../../../../../lib/utils";
export type TileData = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("box-content border-t-[3px] border-solid block p-[1.2rem] rounded-lg bg-color-006", styles.className)}>
      <div className={cn("box-content block mb-2 [font-family:monospace] text-[0.6875rem] leading-[1.1875rem] tracking-[1.12px] uppercase", styles.className2)}>
        {d.text}
      </div>
      {" "}
      <div className="box-content block mb-[0.4rem] text-color-010 font-semibold">
        {d.text2}
      </div>
      {" "}
      <div className="box-content block text-color-009 text-sm leading-[1.25rem]">
        {d.text3}
      </div>
      {" "}
    </div>
  );
}
