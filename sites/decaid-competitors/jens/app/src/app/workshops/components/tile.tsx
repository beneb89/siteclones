import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  text: string;
  description: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className="border-l-4 border-solid border-l-accent flex p-6 rounded-[20px] items-start gap-4 bg-surface">
      <div className="block text-accent [font-family:'IBM_Plex_Mono',_'IBM_Plex_Mono_Fallback',_ui-monospace,_monospace] text-2xl font-medium leading-9">
        {d.text}
      </div>
      <p className={cn("block font-light leading-[1.5625rem]", styles.className)}>
        {d.description}
      </p>
    </div>
  );
}
