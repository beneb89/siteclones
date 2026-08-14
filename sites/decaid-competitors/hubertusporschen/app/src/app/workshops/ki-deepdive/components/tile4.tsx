import type { Tile4Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type Tile4Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile4({ d, styles }: { d: Tile4Data; styles: Tile4Styles }) {
  return (
    <div className={cn("block py-[14.9px] max-md:py-3.5 2xl:hidden", styles.className)}>
      <div className={cn("block mb-0.5 text-sm font-semibold leading-[1.5rem] max-md:leading-[1.375rem] 2xl:hidden", styles.className2)}>
        {d.text}
      </div>
      {" "}
      <div className="block text-muted-foreground text-[0.8125rem] leading-[1.375rem] max-md:leading-[1.3125rem] 2xl:hidden">
        {d.text2}
      </div>
      {" "}
    </div>
  );
}
