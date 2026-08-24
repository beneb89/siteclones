import type { Tile5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile5Data = {
  description: string;
};
/** A content tile. */
export default function Tile5({ d, styles }: { d: Tile5Data; styles: Tile5Styles }) {
  return (
    <div className={cn("block relative", styles.className)}>
      <div className="block pb-2.5">
        <p className="block my-2.5 [font-family:'PP_Mori']">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
