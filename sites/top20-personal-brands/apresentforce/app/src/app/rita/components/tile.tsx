import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("w-75.5 flex relative flex-col justify-start [align-self:start] shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.4375rem] max-lg:h-px max-lg:flex-1 max-lg:[align-self:initial] md:max-lg:w-180 2xl:w-98.5", styles.className)}>
      <p className="block text-color-011 [font-family:'ABC_Diatype_Regular',_'ABC_Diatype_Regular_Placeholder',_sans-serif] text-lg leading-6">
        <span className="inline text-color-028">
          {d.description}
        </span>
        <br className="inline" />
        {d.description2}
      </p>
    </div>
  );
}
