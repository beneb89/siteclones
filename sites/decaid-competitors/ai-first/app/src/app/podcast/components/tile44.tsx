import type { Tile44Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile44Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile44({ d, styles }: { d: Tile44Data; styles: Tile44Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[2.4375rem] leading-[3.125rem] [overflow-wrap:break-word] md:max-lg:text-[2.875rem] md:max-lg:leading-[3.75rem]", styles.className)}>
          Was kommt nach KI-Chatbots?
        </span>
      </span>
    </div>
  );
}
