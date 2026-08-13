import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className={cn("w-75.5 flex relative flex-col justify-start [align-self:start] shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:w-85.5 max-lg:[align-self:initial] 2xl:w-98.5", styles.className)}>
      <p className="block text-color-002 [font-family:'ABC_Diatype_Regular',_'ABC_Diatype_Regular_Placeholder',_sans-serif] text-lg leading-6">
        {d.description}
        <br className="inline" />
        <span className="inline text-color-001">
          {d.description2}
        </span>
      </p>
    </div>
  );
}
