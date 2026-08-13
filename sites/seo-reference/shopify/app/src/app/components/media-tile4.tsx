import type { MediaTile4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile4Data = {
  href: string;
  label: string;
};
/** A media tile. */
export default function MediaTile4({ d, styles }: { d: MediaTile4Data; styles: MediaTile4Styles }) {
  return (
    <li className={cn("list-item pl-4", styles.className)}>
      <a className="inline text-sm [font-weight:420] leading-[1.125rem] cursor-pointer hover:text-clr-23 hover:outline-clr-23 hover:[text-decoration-color:var(--clr-23)] focus:outline-clr-26" data-component="link" href={d.href}>
        <span className={cn("flex justify-between items-center", styles.className2)}>
          {d.label}
          <svg className={cn("h-4 hidden min-w-0 ml-4 overflow-hidden align-middle [rotate:90deg] max-lg:block", styles.className3)} aria-hidden="true" fill="none" height="16" viewBox="0 0 20 20" width="16" icon="chevron">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m4 13 6-6 6 6" />
          </svg>
        </span>
      </a>
    </li>
  );
}
