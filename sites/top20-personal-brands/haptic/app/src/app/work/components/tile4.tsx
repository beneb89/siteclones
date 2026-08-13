import type { Tile4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile4Data = {
  label: string;
};
/** A content tile. */
export default function Tile4({ d, styles }: { d: Tile4Data; styles: Tile4Styles }) {
  return (
    <div className="block relative pt-[59.3px] w-full max-lg:hidden 2xl:pt-[3.7125rem]">
      <button className={cn("w-[59.3px] h-full border-2 border-solid border-clr-3 block absolute top-0 rounded-lg text-sm font-light leading-5 cursor-default mx-auto max-lg:hidden 2xl:w-[3.7125rem]", styles.className)} data-component="button" disabled type="button">
        {d.label}
      </button>
    </div>
  );
}
