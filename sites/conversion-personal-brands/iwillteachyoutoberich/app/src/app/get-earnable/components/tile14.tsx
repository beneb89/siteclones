import type { Tile14Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile14Data = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile14({ d, styles }: { d: Tile14Data; styles: Tile14Styles }) {
  return (
    <div className={cn("block relative", styles.className)}>
      <div className="block">
        <p className="block my-2.5 [font-family:'PP_Mori']">
          <b className="inline font-bold">
            {d.description}
          </b>
          {d.description2}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
