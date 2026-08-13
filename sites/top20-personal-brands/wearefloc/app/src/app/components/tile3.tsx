import type { Tile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile3Data = {
  description: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className)}>
      <p className="block text-color-001 [font-family:'Geist_Regular',_'Geist_Regular_Placeholder',_sans-serif] text-2xl leading-6 text-left uppercase max-lg:leading-3 max-lg:[font-size:inherit]">
        {d.description}
      </p>
    </div>
  );
}
