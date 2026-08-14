import type { Tile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile3Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className={cn("block", styles.className)}>
      <dt className="block text-[1.1875rem] font-medium leading-[1.8125rem]">
        {d.text}
      </dt>
      <dd className="block mt-2 text-muted-foreground font-light leading-[1.625rem]">
        {d.text2}
      </dd>
    </div>
  );
}
