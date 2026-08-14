import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("block relative max-w-[16.6667%] p-[0.3125rem] shrink-0 basis-1/6 max-md:max-w-none max-md:shrink-[initial] max-md:basis-[initial] md:max-lg:max-w-[25%] md:max-lg:basis-1/4", styles.className)}>
      <div className={cn("box-content min-h-47.5 block p-2.5 rounded-[5px] text-center", styles.className2)}>
        <span className={cn("inline-block text-[2.6875rem] leading-[2.6875rem] before:text-[2.6875rem] before:leading-[2.6875rem] before:text-center", styles.className3)} aria-hidden="true" />
        {" "}
        <span className="inline" />
        {" "}
        <div className={cn("box-content min-h-12.5 block mt-[0.3125rem] mb-2.5 text-sm font-bold leading-[1.3125rem]", styles.className4)}>
          {d.text}
        </div>
        <div className="box-content block text-xs leading-4.5" />
        {" "}
        <div className="box-content hidden">
          Stück
        </div>
        {"   "}
        <div className="box-content hidden">
          {d.text2}
        </div>
        {"   "}
        <div className="box-content block text-lg font-bold leading-[1.6875rem] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem]">
          {d.text3}
        </div>
        {" "}
        <div className="box-content block text-xs leading-4.5" />
        {" "}
        <div className="box-content hidden text-lg font-bold leading-[1.6875rem]">
          {"0 "}
        </div>
        {" "}
        <div className="box-content block" />
        {" "}
        <div className="box-content hidden text-lg font-bold leading-[1.6875rem]">
          {"0 "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
