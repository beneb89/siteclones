import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  description: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className={cn("flex relative justify-start items-center content-center shrink-0 gap-2", styles.className)}>
      <div className="w-1.5 block relative opacity-50 rounded-[100%] shrink-0 aspect-square bg-color-002" />
      <div className={cn("flex relative opacity-45 flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className2)}>
        <p className="block [font-family:'SF_Pro_Display_Medium',_'SF_Pro_Display_Medium_Placeholder',_sans-serif] font-medium leading-[0.875rem]" dir="auto">
          {d.description}
        </p>
      </div>
    </div>
  );
}
