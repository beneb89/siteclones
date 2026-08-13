import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  href: string;
  description: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className={cn("block relative shrink-0 max-lg:hidden", styles.className)}>
      <a className="h-5.5 flex relative rounded-lg justify-start items-center content-center gap-[0.3125rem] overflow-hidden text-primary cursor-pointer max-lg:hidden" data-component="link" href={d.href}>
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden", styles.className2)} lang="zxx">
          <p className="block text-color-001 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.14px] text-left [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'dlig'] max-lg:hidden" dir="auto">
            {d.description}
          </p>
        </div>
      </a>
    </div>
  );
}
