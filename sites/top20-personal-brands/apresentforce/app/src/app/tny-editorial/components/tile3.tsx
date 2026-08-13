import type { Tile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile3Data = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className={cn("w-75.5 flex relative flex-col justify-start [align-self:start] shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:w-85.5 max-lg:[align-self:initial] 2xl:w-98.5", styles.className)}>
      <p className="block text-color-002 [font-family:'ABC_Diatype_Regular',_'ABC_Diatype_Regular_Placeholder',_sans-serif] text-lg leading-6">
        {d.description}
        <span className="inline text-color-001">
          <br className="inline" />
          {d.description2}
        </span>
      </p>
    </div>
  );
}
