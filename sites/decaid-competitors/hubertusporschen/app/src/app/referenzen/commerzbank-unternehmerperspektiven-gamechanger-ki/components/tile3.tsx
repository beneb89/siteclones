import type { Tile3Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type Tile3Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className={cn("flex py-[14.9px] px-5 items-start gap-3 bg-surface-2 max-md:py-3.5 2xl:hidden", styles.className)}>
      <span className="block mt-0.5 text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] max-md:leading-[1.125rem] 2xl:hidden">
        {d.text}
      </span>
      {" "}
      <span className="block text-[0.9375rem] leading-[1.4375rem] 2xl:hidden">
        {d.text2}
      </span>
      {" "}
    </div>
  );
}
