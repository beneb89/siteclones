import type { Tile5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile5Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile5({ d, styles }: { d: Tile5Data; styles: Tile5Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.625rem] leading-[2.0625rem] [overflow-wrap:break-word] md:max-lg:text-[1.9375rem] md:max-lg:leading-[2.5rem]", styles.className)}>
          CEO von EGYM: „Wer glaubt, KI verändert seinen Job nicht, ist bei uns falsch.”
        </span>
      </span>
    </div>
  );
}
