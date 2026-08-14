import type { Tile9Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile9Data = {
  text: string;
};
/** A content tile. */
export default function Tile9({ d, styles }: { d: Tile9Data; styles: Tile9Styles }) {
  return (
    <div className="flex pb-4 px-2">
      <i className={cn("block pr-2 [font-family:'Font_Awesome_Pro'] font-black leading-4 text-center", styles.className)} />
      <span className="block text-xs leading-4.5">
        {d.text}
      </span>
    </div>
  );
}
