import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className={cn("flex gap-3", styles.className)}>
      <span className="block mt-0.5 shrink-0 text-accent [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm leading-5">
        !
      </span>
      <div className="block">
        <p className="block text-color-001 text-sm font-bold leading-5">
          {d.description}
        </p>
        <p className="block mt-0.5 text-color-003 text-sm leading-[1.4375rem]">
          {d.description2}
        </p>
      </div>
    </div>
  );
}
