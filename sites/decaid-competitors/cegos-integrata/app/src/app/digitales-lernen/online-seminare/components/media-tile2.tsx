import type { ReactNode } from "react";
import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type MediaTile2Data = {
  ariaLabel: string;
  href: string;
  viewBox: string;
  icon: ReactNode;
  label: string;
  role?: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <li className="list-item">
      <a className="h-18.5 flex flex-col items-center gap-2 cursor-pointer" data-component="link" aria-label={d.ariaLabel} href={d.href} rel="nofollow noopener" target="_blank">
        <div className="w-12.5 h-12.5 flex rounded-full justify-center items-center bg-background">
          <svg className={cn("h-[1.5625rem] block overflow-hidden", styles.className)} data-component="icon" aria-hidden="true" height="25" viewBox={d.viewBox} width="25" xmlns="http://www.w3.org/2000/svg" fill="currentColor" role={d.role}>{d.icon}</svg>
          {" "}
        </div>
        <span className="block leading-4">
          {d.label}
        </span>
      </a>
    </li>
  );
}
