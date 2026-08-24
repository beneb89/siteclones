import type { Tile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile3Data = {
  description: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className={cn("block relative", styles.className)}>
      <div className="block">
        <p className="block my-2.5 [font-family:'PP_Mori']">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
