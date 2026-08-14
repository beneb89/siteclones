import type { TileStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type TileData = {
  text: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className="block text-[0rem] leading-0">
      <span className={cn("inline px-0.5 text-color-002 [overflow-wrap:break-word] text-balance [background-position:0px_100%] bg-no-repeat", styles.className)} style={{ backgroundImage: "linear-gradient(var(--color-001), var(--color-001))" }}>
        {d.text}
      </span>
    </div>
  );
}
