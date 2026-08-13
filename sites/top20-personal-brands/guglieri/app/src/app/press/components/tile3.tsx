import type { Tile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile3Data = {
  description: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className={cn("h-full block relative shrink-0 overflow-hidden", styles.className)}>
      <div className={cn("h-[1.4rem] flex absolute top-[1.4375rem] left-2 flex-col justify-start shrink-0 whitespace-pre text-nowrap transform-[matrix(1,0,0,1,0,-11.2031)]", styles.className2)}>
        <p className={cn("block text-color-002 [font-family:'Raveo_Variable_Variable',_sans-serif] text-sm [font-weight:1000] leading-[1.375rem] tracking-[-0.28px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']", styles.className3)} dir="auto">
          {d.description}
        </p>
      </div>
    </div>
  );
}
