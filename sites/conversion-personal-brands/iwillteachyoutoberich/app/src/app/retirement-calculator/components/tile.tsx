import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("flex flex-col overflow-hidden", styles.className)}>
      <div className={cn("border-b border-solid border-b-foreground block relative pb-5 text-color-002 whitespace-nowrap text-nowrap max-lg:pb-[0.9375rem] 2xl:pb-7.5 before:content-[''] before:block before:absolute before:top-[38.1px] before:bottom-[-5.5px] before:left-0 before:w-1.5 before:h-1.5 before:mt-[-0.5px] before:bg-foreground before:transform-[matrix(1,0,0,1,0,-2.99219)] before:origin-[2.99219px_2.99219px] before:rounded-tl-[50%] max-lg:before:top-9 max-lg:before:right-[780.3px] max-lg:before:bottom-[-8.5px] max-lg:before:w-[0.5625rem] max-lg:before:h-[0.5625rem] max-lg:before:transform-[matrix(1,0,0,1,0,-4.5)] max-lg:before:origin-[4.5px_4.5px] 2xl:before:top-14 2xl:before:bottom-[-8.5px] 2xl:before:w-[0.5625rem] 2xl:before:h-[0.5625rem] 2xl:before:transform-[matrix(1,0,0,1,0,-4.5)] 2xl:before:origin-[4.5px_4.5px] after:content-[''] after:absolute after:right-0 after:w-1.5 after:h-1.5 after:mt-[-0.5px] after:bg-foreground after:rounded-tl-[50%] max-lg:after:top-9 max-lg:after:bottom-[-8.5px] max-lg:after:left-[780.3px] max-lg:after:w-[0.5625rem] max-lg:after:h-[0.5625rem] max-lg:after:transform-[matrix(1,0,0,1,0,-4.5)] max-lg:after:origin-[4.5px_4.5px] 2xl:after:w-[0.5625rem] 2xl:after:h-[0.5625rem]", styles.className2)}>
        {d.text}
      </div>
      {" "}
      <div className={cn("block mt-[13.3px] p-5 grow bg-surface-2 max-lg:h-30 max-lg:min-h-30 max-lg:mt-2.5 2xl:mt-5 2xl:p-7.5 2xl:text-lg 2xl:leading-[1.4375rem]", styles.className3)}>
        {d.text2}
      </div>
      {" "}
    </div>
  );
}
