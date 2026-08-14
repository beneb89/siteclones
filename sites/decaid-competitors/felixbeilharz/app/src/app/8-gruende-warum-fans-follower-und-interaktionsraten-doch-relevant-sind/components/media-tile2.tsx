import type { ReactNode } from "react";
import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile2Data = {
  style: string;
  viewBox: string;
  dataid: string;
  icon: ReactNode;
  label: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className={cn("table py-[0.35rem] pr-[0.45rem] pl-[0.35rem] rounded-[100px] align-middle capitalize shadow-[var(--color-024)_0px_1px_6px_0px] md:max-lg:py-[0.275rem] md:max-lg:pr-1.5 md:max-lg:pl-[0.275rem]", styles.className)}>
      <a className="table text-background cursor-pointer" data-component="link" href="#">
        {" "}
        <span className="flex p-[3.3px] rounded-[50%] justify-center items-center align-middle leading-2.5 text-center md:max-lg:p-[2.7px] md:max-lg:leading-2 before:content-[''] before:block before:w-0 before:h-0 max-md:before:w-auto max-md:before:h-auto" style={d.style}>
          {" "}
          <svg className={cn("box-content h-2.5 block overflow-hidden align-middle md:max-lg:h-2", styles.className2)} data-component="icon" viewBox={d.viewBox} data-id={d.dataid} data-name="" fill="currentColor">{d.icon}</svg>
          {" "}
        </span>
        {" "}
        <span className={cn("hidden grow align-middle whitespace-nowrap text-nowrap", styles.className3)}>
          {d.label}
        </span>
        {" "}
        <span className={cn("hidden", styles.className4)}>
          0
        </span>
        {" "}
      </a>
      {" "}
    </div>
  );
}
