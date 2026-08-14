import type { Tile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile3Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.625rem] leading-[2.0625rem] [overflow-wrap:break-word] md:max-lg:text-[0.6875rem] md:max-lg:leading-[0.875rem]", styles.className)}>
          CEO von EGYM: „Wer glaubt, KI verändert seinen Job nicht, ist bei uns falsch.”
        </span>
      </span>
    </div>
  );
}
