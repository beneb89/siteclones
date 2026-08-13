import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className="hidden max-lg:flex max-lg:relative max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-2.5 max-lg:overflow-hidden max-lg:pointer-events-none">
      <div className="hidden">
        <p className="hidden max-lg:block max-lg:text-color-003 max-lg:[font-family:'Copyright_SM_Type_Foundry_Not_for_desktop_use',_'Copyright_SM_Type_Foundry_Not_for_desktop_use_Placeholder',_sans-serif] max-lg:text-2xl max-lg:leading-22 max-lg:pointer-events-none">
          {d.description}
        </p>
      </div>
      <div className={cn("hidden max-lg:h-full max-lg:flex max-lg:absolute max-lg:top-0 max-lg:z-1 max-lg:min-w-0 max-lg:flex-col max-lg:justify-start max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap max-lg:pointer-events-none", styles.className)}>
        <p className="hidden max-lg:block max-lg:text-color-003 max-lg:[font-family:'Copyright_SM_Type_Foundry_Not_for_desktop_use',_'Copyright_SM_Type_Foundry_Not_for_desktop_use_Placeholder',_sans-serif] max-lg:text-2xl max-lg:leading-22 max-lg:pointer-events-none">
          {d.description2}
        </p>
      </div>
    </div>
  );
}
