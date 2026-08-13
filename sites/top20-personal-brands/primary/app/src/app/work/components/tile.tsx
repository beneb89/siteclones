import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  description: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className)}>
      <p className="block text-muted-foreground [font-family:'Suisse_Int'l_Regular',_'Suisse_Int'l_Regular_Placeholder',_sans-serif] text-[0.625rem] leading-2.5 tracking-[0.1px] text-left">
        {d.description}
      </p>
    </div>
  );
}
