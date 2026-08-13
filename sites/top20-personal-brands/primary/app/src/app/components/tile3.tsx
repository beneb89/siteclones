import type { Tile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile3Data = {
  description: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className={cn("block relative z-2 shrink-0", styles.className)}>
      <div className="h-10 flex relative max-w-full flex-col justify-center items-end content-end gap-2.5 overflow-hidden bg-background">
        <div className="flex relative p-2.5 justify-end items-end content-end shrink-0 gap-2.5">
          <div className={cn("flex relative flex-col justify-start shrink-0 order-[1] whitespace-pre text-nowrap", styles.className2)}>
            <p className="block text-color-001 [font-family:'Suisse_Int'l_Regular',_'Suisse_Int'l_Regular_Placeholder',_sans-serif] leading-[0.8125rem] tracking-[0.6px] text-left uppercase">
              {d.description}
            </p>
          </div>
          <div className="w-[0.6625rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
            <p className="block text-color-001 [font-family:'Suisse_Int'l_Regular',_'Suisse_Int'l_Regular_Placeholder',_sans-serif] leading-[0.8125rem] tracking-[0.6px] text-left uppercase">
              →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
