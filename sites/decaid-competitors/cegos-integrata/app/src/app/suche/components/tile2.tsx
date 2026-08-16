import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  text: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className={cn("w-6.5 h-6.5 flex pt-0.5 pb-1 px-[0.3125rem] rounded-3xl flex-col justify-center items-center shrink-0 gap-2", styles.className)}>
      <span className={cn("box-content w-4 block shrink-0 text-background [font-family:Raleway] leading-5 text-center [font-feature-settings:'lnum',_'pnum'] max-lg:text-[0.875rem]", styles.className2)}>
        {d.text}
      </span>
    </div>
  );
}
