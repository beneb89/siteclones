import type { ReactNode } from "react";
import type { MediaTile5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile5Data = {
  icon: ReactNode;
  description: string;
  description2: string;
};
/** A media tile. */
export default function MediaTile5({ d, styles }: { d: MediaTile5Data; styles: MediaTile5Styles }) {
  return (
    <div className="flex items-start gap-3">
      <span className="block mt-0.5 shrink-0">
        <svg className="block overflow-hidden align-middle h-5 w-5" data-component="icon" aria-hidden="true" fill="none" height="24" viewBox="0 -960 960 960" width="24" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
      </span>
      <div className={cn("block", styles.className)}>
        <p className="block text-base font-bold leading-[1.375rem] max-md:text-sm max-md:leading-[1.25rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.3125rem] 2xl:[font-size:inherit]">
          {d.description}
        </p>
        <p className="block opacity-70 mt-1 [font-family:'Martina_Plantijn',_Georgia,_serif] text-base italic leading-[1.5rem] [font-feature-settings:'calt',_'liga',_'onum'] max-md:text-sm max-md:leading-[1.3125rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.375rem] 2xl:[font-size:inherit] 2xl:leading-[inherit]">
          {d.description2}
        </p>
      </div>
    </div>
  );
}
