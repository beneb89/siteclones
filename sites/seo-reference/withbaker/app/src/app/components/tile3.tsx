import type { Tile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile3Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className={cn("block", styles.className)}>
      <dt className="block text-color-001 text-lg font-semibold leading-[1.5625rem] tracking-[-0.18px]">
        {d.text}
      </dt>
      {" "}
      <dd className="block mt-1.5 text-muted-foreground leading-[1.625rem]">
        {d.text2}
      </dd>
      {" "}
    </div>
  );
}
