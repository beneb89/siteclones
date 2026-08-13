import type { DittoNodeMetaMap } from "../ditto-meta";
import type { Tile13Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile13Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile13({ d, meta, styles }: { d: Tile13Data; meta: DittoNodeMetaMap; styles: Tile13Styles }) {
  return (
    <div className={cn("block py-4 px-1", styles.className)}>
      <div data-ditto-id={meta[1]?.anchor} className="flex justify-between items-center gap-4 font-semibold cursor-pointer max-md:text-[0.8125rem] max-md:leading-[1.375rem]">
        <span className="block">
          {d.text}
        </span>
        {" "}
        <span className={cn("w-5.5 h-5.5 flex rounded-[50%] justify-center items-center shrink-0 text-primary font-bold bg-surface-2", styles.className2)}>
          +
        </span>
        {" "}
      </div>
      {" "}
      <div data-ditto-id={meta[4]?.anchor} className={cn("mt-3 text-accent text-sm leading-[1.375rem]", styles.className3)}>
        {d.text2}
      </div>
      {" "}
    </div>
  );
}
