import type { Tile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile3Data = {
  description: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-2">
      <div className="w-1.5 block relative opacity-50 rounded-[100%] shrink-0 aspect-square bg-color-002" />
      <div className={cn("flex relative opacity-45 flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className)}>
        <p className="block [font-family:'SF_Pro_Display_Medium',_'SF_Pro_Display_Medium_Placeholder',_sans-serif] font-medium leading-[0.875rem]" dir="auto">
          {d.description}
        </p>
      </div>
    </div>
  );
}
