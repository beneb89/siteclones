import type { ReactNode } from "react";
import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile2Data = {
  href: string;
  icon: ReactNode;
  label: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className={cn("block relative -mb-0.5 shrink-0", styles.className)}>
      <a className={cn("border-t-2 border-solid border-r-2 border-l-2 flex px-5 rounded-tl-[20px] rounded-tr-[20px] items-center gap-1.5 text-sm font-semibold leading-5 tracking-[-0.35px] whitespace-nowrap text-nowrap cursor-pointer", styles.className2)} data-component="button" href={d.href}>
        <svg className="w-4.5 h-4.5 block overflow-hidden align-middle" data-component="icon" aria-hidden="true" fill="none" height="24" viewBox="0 -960 960 960" width="24" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
        {d.label}
      </a>
    </div>
  );
}
