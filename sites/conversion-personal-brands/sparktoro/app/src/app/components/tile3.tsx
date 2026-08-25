import type { Tile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile3Data = {
  text: string;
  text2: string;
  style?: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className={cn("grid py-5.5 px-11.5 items-center grid-cols-[1fr_84px_1fr]", styles.className)}>
      <div className={cn("block text-border", styles.className2)}>
        {d.text}
      </div>
      {" "}
      <div className={cn("block", styles.className3)} style={d.style} />
      {" "}
      <div className={cn("block text-border text-left", styles.className4)}>
        {d.text2}
      </div>
      {" "}
    </div>
  );
}
