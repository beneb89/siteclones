import type { Tile7Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile7Data = {
  description: string;
};
/** A content tile. */
export default function Tile7({ d, styles }: { d: Tile7Data; styles: Tile7Styles }) {
  return (
    <div className={cn("flex relative opacity-50 flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className)}>
      <p className="block [font-family:'SF_Pro_Display_Regular',_'SF_Pro_Display_Regular_Placeholder',_sans-serif] text-[0.9375rem] leading-4.5" dir="auto">
        <a className="inline cursor-pointer" data-component="link" href="/">
          {d.description}
        </a>
      </p>
    </div>
  );
}
