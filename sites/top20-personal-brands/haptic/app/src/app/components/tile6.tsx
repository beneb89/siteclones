import type { Tile6Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile6Data = {
  description: string;
};
/** A content tile. */
export default function Tile6({ d, styles }: { d: Tile6Data; styles: Tile6Styles }) {
  return (
    <div className={cn("hidden 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-2", styles.className)}>
      <div className="hidden 2xl:w-1.5 2xl:block 2xl:relative 2xl:opacity-50 2xl:rounded-[100%] 2xl:shrink-0 2xl:aspect-square 2xl:bg-surface-3" />
      <div className={cn("hidden 2xl:flex 2xl:relative 2xl:opacity-45 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap", styles.className2)}>
        <p className="hidden 2xl:block 2xl:text-background 2xl:[font-family:'SF_Pro_Display_Medium',_'SF_Pro_Display_Medium_Placeholder',_sans-serif] 2xl:font-medium 2xl:leading-[0.875rem]" dir="auto">
          {d.description}
        </p>
      </div>
    </div>
  );
}
