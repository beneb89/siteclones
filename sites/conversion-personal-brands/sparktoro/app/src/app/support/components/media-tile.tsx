import type { ReactNode } from "react";
import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  kind?: string;
  href: string;
  kind2?: string;
  height: string;
  viewBox: string;
  icon: ReactNode;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <li className={cn("relative items-center", styles.className)}>
      <a className="flex px-[0.9375rem] items-center gap-0.5 text-border text-[0.9375rem] font-semibold leading-[1.4375rem] tracking-[0.15px] uppercase whitespace-nowrap text-nowrap cursor-pointer" data-component={d.kind} href={d.href}>
        {" "}
        <div className={cn("flex min-w-4.5 items-center", styles.className2)}>
          <svg className={cn("h-[1.1875rem] block overflow-hidden align-middle", styles.className3)} data-component={d.kind2} fill="none" height={d.height} viewBox={d.viewBox} width="19" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
          {" "}
        </div>
        {" "}
        <div className={cn("block", styles.className4)}>
          {d.label}
        </div>
        {" "}
      </a>
      {" "}
    </li>
  );
}
