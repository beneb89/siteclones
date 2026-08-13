import type { ReactNode } from "react";
import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTileData = {
  text: string;
  href: string;
  label: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  icon: ReactNode;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <tr className={cn("border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]", styles.className)}>
      <td className="table-cell py-3 px-4 align-middle [border-collapse:collapse] [border-spacing:2px]">
        <div className="flex items-center gap-2 [border-collapse:collapse] [border-spacing:2px]">
          <span className={cn("flex rounded-full justify-center items-center text-color-002 text-xs font-bold leading-4 bg-surface-2 [border-collapse:collapse] [border-spacing:2px] h-6", styles.className2)}>
            {d.text}
          </span>
          <a className="block font-medium cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:text-color-002" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
            {d.label}
          </a>
        </div>
      </td>
      <td className="table-cell py-3 px-4 align-middle text-muted-foreground text-sm leading-5 [border-collapse:collapse] [border-spacing:2px]">
        {d.text2}
      </td>
      <td className="table-cell py-3 px-4 align-middle text-muted-foreground text-sm leading-5 [border-collapse:collapse] [border-spacing:2px]">
        {d.text3}
      </td>
      <td className="table-cell py-3 px-4 align-middle text-muted-foreground text-sm leading-5 [border-collapse:collapse] [border-spacing:2px]">
        {d.text4}
      </td>
      <td className="table-cell py-3 px-4 align-middle text-muted-foreground text-sm leading-5 [border-collapse:collapse] [border-spacing:2px]">
        {d.text5}
      </td>
      <td className="table-cell py-3 px-4 align-middle text-center [border-collapse:collapse] [border-spacing:2px]">
        <svg className={cn("block mx-auto overflow-hidden align-middle [border-collapse:collapse] [border-spacing:2px] w-5 h-5", styles.className3)} data-component="icon" aria-hidden="true" fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{d.icon}</svg>
      </td>
    </tr>
  );
}
