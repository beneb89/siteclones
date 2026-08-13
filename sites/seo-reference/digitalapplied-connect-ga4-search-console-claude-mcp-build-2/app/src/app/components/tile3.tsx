import type { Tile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile3Data = {
  text: string;
  text2: string;
  text3: string;
  style?: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className={cn("grid py-3 items-center gap-3.5 grid-cols-[1.2fr_2fr_62px_auto] max-md:grid-cols-1", styles.className)}>
      <div className="block text-sm font-medium leading-[1.25rem] tracking-[-0.07px]">
        {d.text}
        <span className="block mt-0.5 text-color-005 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] font-normal leading-[1rem] tracking-[0.42px]">
          {d.text2}
        </span>
      </div>
      <div className="block col-start-[span_1] col-end-[span_1]">
        <div className="block relative rounded-[3px] overflow-hidden bg-surface-2 h-2.5">
          <div className={cn("h-full block absolute top-0 rounded-[3px]", styles.className2)} style={d.style} />
        </div>
      </div>
      <div className="block [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm font-medium leading-[1.3125rem] tracking-[-0.14px] text-right">
        {d.text3}
      </div>
      <div className="block" />
    </div>
  );
}
