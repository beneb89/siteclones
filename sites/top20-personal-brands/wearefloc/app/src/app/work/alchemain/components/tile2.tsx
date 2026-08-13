import type { Tile2Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type Tile2Data = {
  description: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,-0.000833333,0,0,0,1)]", styles.className)}>
      <p className="block text-color-001 [font-family:'Geist_Regular',_'Geist_Regular_Placeholder',_sans-serif] text-[0.875rem] text-left uppercase max-lg:text-[0.625rem] max-lg:leading-2.5">
        {d.description}
      </p>
    </div>
  );
}
