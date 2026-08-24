import type { Tile17Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile17Data = {
  description: string;
  id?: string;
};
/** A content tile. */
export default function Tile17({ d, styles }: { d: Tile17Data; styles: Tile17Styles }) {
  return (
    <div className={cn("block relative", styles.className)} id={d.id}>
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
