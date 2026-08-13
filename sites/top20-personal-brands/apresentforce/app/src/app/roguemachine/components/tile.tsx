import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("flex relative flex-col justify-start items-start content-start [align-self:start] shrink-0 gap-1 overflow-hidden max-lg:[align-self:initial]", styles.className)}>
      <div className="contents min-w-0">
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:whitespace-pre max-lg:text-nowrap", styles.className2)}>
          <p className="block text-color-003 [font-family:'Copyright_SM_Type_Foundry_Not_for_desktop_use',_'Copyright_SM_Type_Foundry_Not_for_desktop_use_Placeholder',_sans-serif] text-sm leading-5.5 max-lg:text-[1rem]">
            {d.description}
          </p>
        </div>
      </div>
      <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:whitespace-pre max-lg:text-nowrap", styles.className3)}>
        <p className="block text-color-003 [font-family:'ABC_Diatype_Regular',_'ABC_Diatype_Regular_Placeholder',_sans-serif] text-lg leading-6">
          {d.description2}
        </p>
      </div>
    </div>
  );
}
