import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  description: string;
  description2: string;
  description3: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className={cn("border-solid flex p-9 rounded-2xl flex-col", styles.className)}>
      <div className="block mb-3 text-primary [font-family:Georgia,_serif] text-[2rem] leading-8">
        “
      </div>
      {" "}
      <p className="block mb-6 flex-1 text-muted-foreground text-[0.9375rem] italic leading-[1.625rem]">
        {d.description}
      </p>
      {" "}
      <div className="border-t border-solid border-t-border flex pt-5 items-center gap-3">
        <div className="block">
          <p className={cn("block text-sm font-semibold leading-[1.375rem]", styles.className2)}>
            {d.description2}
          </p>
          {" "}
          <p className={cn("block mt-0.5 text-muted text-xs leading-[1.1875rem]", styles.className3)}>
            {d.description3}
          </p>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
