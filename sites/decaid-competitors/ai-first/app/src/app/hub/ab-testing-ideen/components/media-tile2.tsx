import type { ReactNode } from "react";
import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type MediaTile2Data = {
  text: string;
  icon: ReactNode;
  text2: string;
  text3: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className={cn("w-42.5 block absolute z-0 cursor-default pointer-events-none", styles.className)} aria-describedby="react-flow__node-desc-1" aria-roledescription="node" role="group">
      <div className="w-42.5 block pointer-events-none">
        <div className={cn("inline-flex py-[0.3125rem] px-2.5 items-center gap-1 text-[0.8125rem] font-bold leading-[1.25rem] pointer-events-none", styles.className2)}>
          <span className="block opacity-50 pointer-events-none">
            {d.text}
          </span>
          <svg className="w-4 h-4 block opacity-70 overflow-hidden align-middle pointer-events-none" data-component="icon" aria-hidden="true" fill="none" height="24" viewBox="0 -960 960 960" width="24" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
        </div>
        <div className={cn("min-h-[3.5625rem] block pointer-events-none", styles.className3)}>
          <div className={cn("block pt-2.5 pb-3 px-3.5 pointer-events-none", styles.className4)}>
            <div className="block text-[0.9375rem] font-bold leading-[1.1875rem] [overflow-wrap:break-word] text-balance pointer-events-none" lang="de">
              {d.text2}
            </div>
            <div className="block opacity-60 mt-[0.1875rem] [font-family:'Martina_Plantijn',_Georgia,_serif] text-[0.8125rem] leading-[1.125rem] [overflow-wrap:break-word] text-balance [font-feature-settings:'calt',_'liga',_'onum'] pointer-events-none" lang="de">
              {d.text3}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
