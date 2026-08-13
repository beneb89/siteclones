import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  description: string;
  kind?: string;
  href?: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("block relative shrink-0 max-lg:hidden", styles.className)}>
      <a className={cn("h-5.5 flex relative rounded-lg justify-start items-center content-center gap-[0.3125rem] max-lg:hidden", styles.className2)} data-component={d.kind} href={d.href}>
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden", styles.className3)} lang="zxx">
          <p className={cn("block [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-left [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'dlig'] max-lg:hidden", styles.className4)} dir="auto">
            {d.description}
          </p>
        </div>
      </a>
    </div>
  );
}
