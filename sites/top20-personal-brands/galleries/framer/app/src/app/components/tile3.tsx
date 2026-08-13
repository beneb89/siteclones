import type { Tile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile3Data = {
  href: string;
  description: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className={cn("hidden max-lg:block max-lg:relative max-lg:shrink-0", styles.className)}>
      <a className="hidden max-lg:h-5.5 max-lg:flex max-lg:relative max-lg:rounded-lg max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:gap-[0.3125rem] max-lg:overflow-hidden max-lg:text-primary max-lg:cursor-pointer" href={d.href}>
        <div className={cn("hidden max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap", styles.className2)} lang="zxx">
          <p className="hidden max-lg:block max-lg:text-color-001 max-lg:[font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] max-lg:text-[0.875rem] max-lg:tracking-[-0.14px] max-lg:text-left max-lg:[font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'dlig']" dir="auto">
            {d.description}
          </p>
        </div>
      </a>
    </div>
  );
}
