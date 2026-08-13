import type { Tile4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile4Data = {
  description: string;
};
/** A content tile. */
export default function Tile4({ d, styles }: { d: Tile4Data; styles: Tile4Styles }) {
  return (
    <div className={cn("h-full block relative shrink-0 overflow-hidden", styles.className)}>
      <div className={cn("h-[0.9rem] flex absolute top-[1.4375rem] flex-col justify-start shrink-0 whitespace-pre text-nowrap transform-[matrix(1,0,0,1,0,-7.20312)]", styles.className2)}>
        <p className={cn("block text-color-001 [font-family:'Raveo_Variable_Variable',_sans-serif] [font-weight:1000] leading-[0.875rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']", styles.className3)} dir="auto">
          {d.description}
        </p>
      </div>
    </div>
  );
}
