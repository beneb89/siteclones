import type { Tile15Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile15Data = {
  description: string;
};
/** A content tile. */
export default function Tile15({ d, styles }: { d: Tile15Data; styles: Tile15Styles }) {
  return (
    <div className={cn("block relative", styles.className)}>
      <div className="block">
        <p className={cn("block my-2.5 [font-family:'PP_Mori']", styles.className2)}>
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
