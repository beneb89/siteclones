import type { Tile7Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile7Data = {
  description: string;
};
/** A content tile. */
export default function Tile7({ d, styles }: { d: Tile7Data; styles: Tile7Styles }) {
  return (
    <div className={cn("block relative", styles.className)}>
      <div className={cn("block", styles.className2)}>
        <p className="block my-2.5 [font-family:'PP_Mori']">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
