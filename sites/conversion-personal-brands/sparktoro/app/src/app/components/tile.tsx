import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  imgSrc: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <img className={cn("w-85.5 border border-solid border-color-023 block absolute max-w-85.5 rounded-[10px] overflow-clip align-middle shadow-[var(--clr-13)_0px_18px_40px_0px] origin-[171px_0px] max-md:w-25.5 max-md:origin-[50.8281px_0px] md:max-lg:w-[13.6875rem] md:max-lg:origin-[109.477px_0px]", styles.className)} data-component="image" alt="" src={d.imgSrc} />
  );
}
