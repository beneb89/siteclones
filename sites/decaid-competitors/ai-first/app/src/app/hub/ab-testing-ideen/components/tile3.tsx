import type { Tile3Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type Tile3Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className={cn("flex py-2 items-start gap-2", styles.className)}>
      <span className="block mt-0.5 shrink-0 text-color-002 [font-family:'Material_Symbols_Sharp'] text-base leading-4 whitespace-nowrap [text-wrap:nowrap_balance] [font-feature-settings:'liga']">
        {d.text}
      </span>
      <span className="block text-lg leading-[1.3125rem] max-md:text-base max-md:leading-[1.1875rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.25rem]">
        <span className="inline text-color-036">
          {d.text2}
        </span>
      </span>
    </div>
  );
}
