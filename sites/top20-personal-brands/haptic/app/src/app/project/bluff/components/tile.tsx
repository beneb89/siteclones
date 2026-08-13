import type { TileStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type TileData = {
  description: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("flex relative py-2 px-3 rounded-[100px] justify-start items-start content-start shrink-0 bg-surface", styles.className)}>
      <div className={cn("flex relative opacity-40 flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className2)}>
        <p className="block text-color-005 [font-family:'SF_Pro_Display_Medium',_'SF_Pro_Display_Medium_Placeholder',_sans-serif] text-[0.8125rem] font-medium leading-[0.625rem] tracking-[-0.39px]" dir="auto">
          {d.description}
        </p>
      </div>
    </div>
  );
}
