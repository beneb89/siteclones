import type { Tile4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile4Data = {
  description: string;
  href?: string;
};
/** A content tile. */
export default function Tile4({ d, styles }: { d: Tile4Data; styles: Tile4Styles }) {
  return (
    <div className={cn("hidden max-lg:block max-lg:relative max-lg:shrink-0", styles.className)}>
      <a className={cn("hidden max-lg:h-5.5 max-lg:flex max-lg:relative max-lg:rounded-lg max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:gap-[0.3125rem]", styles.className2)} href={d.href}>
        <div className={cn("hidden max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap", styles.className3)} lang="zxx">
          <p className={cn("hidden max-lg:block max-lg:[font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] max-lg:text-left max-lg:[font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'dlig']", styles.className4)} dir="auto">
            {d.description}
          </p>
        </div>
      </a>
    </div>
  );
}
