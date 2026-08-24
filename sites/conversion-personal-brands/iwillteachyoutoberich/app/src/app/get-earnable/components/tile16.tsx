import type { Tile16Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile16Data = {
  description: string;
};
/** A content tile. */
export default function Tile16({ d, styles }: { d: Tile16Data; styles: Tile16Styles }) {
  return (
    <div className={cn("block relative", styles.className)}>
      <div className="block">
        <p className="block my-2.5 [font-family:'PP_Mori'] font-normal">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
