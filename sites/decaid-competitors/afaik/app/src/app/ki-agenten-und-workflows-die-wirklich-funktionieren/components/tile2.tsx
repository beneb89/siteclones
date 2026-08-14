import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  id: string;
  description: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className="box-content flex relative justify-center items-center gap-2.5 max-lg:[justify-content:initial]" id={d.id}>
      <i className={cn("box-content block [font-family:'Font_Awesome_5_Free'] text-xs font-black leading-3 text-center before:content-[''] before:text-foreground before:text-xs before:font-black before:leading-3 before:tracking-[-0.06px] before:text-center max-md:before:tracking-[-0.05px] md:max-lg:before:tracking-[-0.06px]", styles.className)} />
      <p className="box-content block mr-2.5 leading-[2.3125rem] text-pretty max-md:leading-[1.9375rem] md:max-lg:leading-[2.125rem]">
        {d.description}
      </p>
    </div>
  );
}
