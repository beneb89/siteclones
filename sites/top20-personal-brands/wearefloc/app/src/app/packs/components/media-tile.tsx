import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  description: string;
  description2: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="w-full block relative shrink-0">
      <div className="flex relative flex-col justify-start items-center content-center gap-1">
        <div className="w-full flex relative z-2 justify-start items-center content-center shrink-0 gap-2.5">
          <div className={cn("block relative max-w-[80%] shrink-0", styles.className)}>
            <div className="flex relative max-w-full py-3 px-5.5 rounded-3xl justify-start items-center content-center gap-2.5 bg-color-009 cursor-pointer">
              <div className={cn("flex relative z-1 max-w-full flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] pointer-events-none", styles.className2)}>
                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-lg font-medium leading-[1.4375rem] tracking-[-0.36px] pointer-events-none">
                  {d.description}
                </p>
              </div>
              <div className={cn("w-8 h-6 flex absolute -right-8 z-1 min-w-0 justify-end items-center content-center shrink-0 gap-2.5 transform-[matrix(1,0,0,1,0,-12)]", styles.className3)}>
                <div className="w-6 block relative shrink-0 aspect-square text-color-001" aria-hidden="true">
                  <div className="block aspect-square">
                    <svg className="w-auto h-6 block overflow-hidden" data-component="icon" height="100%" viewBox="0 0 24 24" width="100%" preserveAspectRatio="none" fill="currentColor">
                      <use href="#svg-973047603_227" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cn("w-150 flex absolute top-0 left-0 z-1 opacity-0 min-w-0 justify-end items-center content-center shrink-0 gap-2.5 [filter:blur(8px)] transform-[matrix(0.9,0,0,0.9,0,0)] pointer-events-none", styles.className4)}>
          <div className="w-105 block relative max-w-[70%] shrink-0 pointer-events-none max-md:w-[242.9px] md:max-lg:w-[25.025rem]">
            <div className="flex relative max-w-full py-3 px-5.5 rounded-3xl justify-start items-center content-center gap-2.5 bg-color-003 cursor-pointer pointer-events-none">
              <div className="w-94 flex relative z-1 max-w-full flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] pointer-events-none max-md:w-[198.9px] md:max-lg:w-[22.275rem]">
                <p className="block [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-lg font-medium leading-[1.4375rem] tracking-[-0.36px] pointer-events-none">
                  {d.description2}
                </p>
              </div>
              <div className="w-[1.0625rem] h-[1.5625rem] flex absolute -right-1.5 -bottom-px z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-hidden pointer-events-none">
                <div className="w-[1.0625rem] h-[1.5625rem] block relative shrink-0 pointer-events-none" aria-hidden="true">
                  <div className="h-full block pointer-events-none">
                    <svg className="w-[1.0625rem] h-[1.5625rem] block overflow-hidden pointer-events-none" data-component="icon" fill="currentColor">
                      <use href="#svg9784481135" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
