import type { Tile8Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile8Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile8({ d, styles }: { d: Tile8Data; styles: Tile8Styles }) {
  return (
    <div className={cn("w-[1e+06px] h-3.5 block absolute left-0 pointer-events-none max-lg:invisible", styles.className)}>
      {"  "}
      <span className="inline text-color-002 pointer-events-none max-lg:invisible">
        {d.text}
      </span>
      {": "}
      <span className={cn("inline pointer-events-none max-lg:invisible", styles.className2)}>
        {d.text2}
      </span>
      <span className="inline pointer-events-none max-lg:invisible">
        ,
      </span>
    </div>
  );
}
