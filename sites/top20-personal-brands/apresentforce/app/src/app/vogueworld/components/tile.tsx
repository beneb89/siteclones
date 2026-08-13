import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  description: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("flex relative p-3 rounded-[199px] flex-col justify-center items-center content-center shrink-0 gap-2.5 after:content-[''] after:block after:absolute after:inset-0 after:h-6 after:rounded-tl-[199px]", styles.className)}>
      <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className2)}>
        <p className="block text-color-003 [font-family:'ABC_Diatype_Regular',_'ABC_Diatype_Regular_Placeholder',_sans-serif] text-[0.625rem] leading-[0rem] tracking-[1px] uppercase">
          {d.description}
        </p>
      </div>
    </div>
  );
}
