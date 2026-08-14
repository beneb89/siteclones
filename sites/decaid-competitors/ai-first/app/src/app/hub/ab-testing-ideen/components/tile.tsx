import type { TileStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type TileData = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("block", styles.className)}>
      <span className="inline [font-family:Soehne,_system-ui,_sans-serif] text-[0.625rem] font-semibold leading-[0.875rem] max-md:text-[0.5rem] max-md:leading-[0.6875rem] md:max-lg:text-[0.5625rem] md:max-lg:leading-3">
        {d.text}
      </span>
      {d.text2}
    </div>
  );
}
