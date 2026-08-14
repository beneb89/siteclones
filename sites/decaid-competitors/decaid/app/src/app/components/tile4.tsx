import type { Tile4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile4Data = {
  id: string;
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile4({ d, styles }: { d: Tile4Data; styles: Tile4Styles }) {
  return (
    <div className="border border-solid border-surface-5 flex py-7.5 px-5 rounded-[10px] flex-col bg-surface-9 shadow-[var(--clr-21)_0px_50px_30px_-15px] max-md:p-4" id={d.id}>
      <div className="block text-color-001 [font-family:Satoshi,_Arial,_sans-serif] text-[2.75rem] font-bold leading-12.5 max-md:text-[2rem] max-lg:text-center md:max-lg:text-[2.375rem]">
        {d.text}
      </div>
      <div className={cn("flex mt-3 justify-start items-center max-md:mt-1 max-lg:text-center", styles.className)}>
        <div className={cn("block text-color-001 [font-family:Satoshi,_Arial,_sans-serif] text-xl leading-[1.6875rem] max-md:text-base max-md:leading-[1.375rem] md:max-lg:text-lg md:max-lg:leading-[1.5rem]", styles.className2)}>
          {d.text2}
        </div>
      </div>
    </div>
  );
}
