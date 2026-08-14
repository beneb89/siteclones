import type { ReactNode } from "react";
import type { MediaTile5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile5Data = {
  icon: ReactNode;
  text: string;
  text2: string;
  kind?: string;
};
/** A media tile. */
export default function MediaTile5({ d, styles }: { d: MediaTile5Data; styles: MediaTile5Styles }) {
  return (
    <div className="border border-solid border-surface block relative shrink-0 overflow-hidden bg-surface-5 [backdrop-filter:blur(8px)] w-[12.5rem] max-md:w-40">
      <div className="h-[154.3px] block absolute top-0 inset-x-0 z-10 m-1.5 pointer-events-none max-md:h-[149.3px] md:max-lg:h-[8.1375rem] 2xl:h-[9.675rem]">
        <div className="border border-solid border-surface block rounded-[5px] pointer-events-none h-full w-full" />
      </div>
      <div className="flex relative z-5 py-8 px-5 flex-col items-center text-center">
        <svg className="block mb-4 overflow-hidden align-middle text-color-002 h-5 w-5" aria-hidden="true" fill="none" height="24" viewBox="0 -960 960 960" width="24" xmlns="http://www.w3.org/2000/svg" data-component={d.kind}>{d.icon}</svg>
        <div className="flex flex-col items-center gap-0.5 text-color-002 text-base leading-[1.375rem] max-md:text-sm max-md:leading-[1.25rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.3125rem] 2xl:[font-size:inherit]">
          <span className={cn("block leading-[1.3125rem] max-md:leading-[1.1875rem] md:max-lg:leading-[1.25rem] 2xl:leading-[1.375rem]", styles.className)}>
            {d.text}
          </span>
          <span className={cn("block leading-[1.3125rem] max-md:leading-[1.1875rem] md:max-lg:leading-[1.25rem] 2xl:leading-[1.375rem]", styles.className2)}>
            {d.text2}
          </span>
        </div>
      </div>
    </div>
  );
}
