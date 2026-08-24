import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  height: string;
  imgSrc: string;
  srcSet: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <img className={cn("w-150 block max-w-full mt-10 rounded-[6.7px] overflow-hidden align-middle pointer-events-none max-md:w-[21.4375rem] max-lg:mt-7.5 max-lg:rounded-[10px] md:max-lg:w-162 2xl:w-225 2xl:mt-15 2xl:rounded-[10px]", styles.className)} data-component="image" alt="" height={d.height} sizes="(max-width: 768px) 100vw, 768px" src={d.imgSrc} srcSet={d.srcSet} width="768" />
  );
}
