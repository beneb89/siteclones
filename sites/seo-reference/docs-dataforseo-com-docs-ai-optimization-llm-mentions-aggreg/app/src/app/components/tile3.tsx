import type { Tile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile3Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className={cn("w-[1e+06px] h-3.5 block absolute left-0 pointer-events-none max-lg:invisible", styles.className)}>
      {"  "}
      <span className="inline text-color-003 pointer-events-none max-lg:invisible">
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
