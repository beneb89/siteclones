import type { ReactNode } from "react";
import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile2Data = {
  viewBox: string;
  dataid: string;
  icon: ReactNode;
  description: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className={cn("min-h-2.5 block relative mb-[0.3125rem] p-0.5", styles.className)}>
      <div className="w-[18.4rem] h-full block absolute top-0 left-0 overflow-hidden [background-clip:padding-box] [-webkit-background-clip:padding-box] max-md:w-[20.9375rem] md:max-lg:w-[19.9375rem]" />
      {" "}
      <div className={cn("w-full min-h-2.5 inline-block relative clear-both z-1 align-middle", styles.className2)}>
        <div className={cn("box-content table relative float-left z-3 mr-2 leading-0 text-center", styles.className3)}>
          <svg className={cn("box-content inline-block overflow-hidden align-middle text-color-032", styles.className4)} data-component="icon" viewBox={d.viewBox} data-id={d.dataid} data-name="" fill="currentColor">{d.icon}</svg>
        </div>
        <div className="block [overflow-wrap:break-word]">
          <p className="block text-color-039 text-sm leading-[1.3125rem]">
            <span className="inline">
              {d.description}
            </span>
          </p>
        </div>
      </div>
      {" "}
    </div>
  );
}
