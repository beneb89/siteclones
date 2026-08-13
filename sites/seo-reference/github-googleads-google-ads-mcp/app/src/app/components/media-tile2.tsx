import type { ReactNode } from "react";
import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile2Data = {
  id: string;
  icon: ReactNode;
  ariaLabel: string;
  href: string;
  label: string;
  label2: string;
  icon2: ReactNode;
  ariaLabel2: string;
  href2: string;
  label3: string;
  label4: string;
  href3: string;
  label5: string;
  label6: string;
  datetime: string;
  label7: string;
  text: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <tr className="h-[2.5625rem] table-row align-middle" id={d.id}>
      <td className="border-t border-solid border-t-border hidden pl-4 align-middle text-left max-md:table-cell" colSpan="2">
        <div className="h-10 flex pr-4 items-center gap-y-1 gap-x-2.5">
          <svg className={cn("w-4 h-4 block min-w-0 align-text-bottom", styles.className)} aria-hidden="true" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" data-component="Octicon" focusable="false" display="inline-block" overflow="visible">{d.icon}</svg>
          <div className="block min-w-0 overflow-hidden">
            <div className="block">
              <div className="inline-block max-w-full overflow-hidden align-top whitespace-nowrap text-nowrap">
                <a className="inline cursor-pointer" aria-label={d.ariaLabel} href={d.href} title={d.label}>
                  {d.label2}
                </a>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="border-t border-solid border-t-border table-cell pl-4 align-middle text-left max-md:hidden" colSpan="1">
        <div className="h-10 flex pr-4 items-center gap-y-1 gap-x-2.5">
          <svg className={cn("w-auto h-4 block align-text-bottom", styles.className2)} data-component="icon" aria-hidden="true" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" focusable="false" display="inline-block" overflow="visible">{d.icon2}</svg>
          <div className="block overflow-hidden">
            <div className="block">
              <div className="inline-block max-w-full overflow-hidden align-top whitespace-nowrap text-nowrap">
                <a className="inline cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] hover:underline" data-component="link" aria-label={d.ariaLabel2} href={d.href2} title={d.label3}>
                  {d.label4}
                </a>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="border-t border-solid border-t-border table-cell pl-4 align-middle text-left max-md:hidden">
        <div className="block">
          <div className="block max-w-full overflow-hidden whitespace-nowrap text-nowrap">
            <a className="inline text-muted-foreground cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] hover:underline" data-component="link" href={d.href3} title={d.label5}>
              {d.label6}
            </a>
          </div>
        </div>
      </td>
      <td className="border-t border-solid border-t-border table-cell pl-4 align-middle text-left">
        <div className="block pr-4 text-muted-foreground text-right">
          <relative-time class="inline whitespace-nowrap text-nowrap" datetime={d.datetime} title={d.label7}>
            <span className="box-content inline">
              {d.text}
            </span>
          </relative-time>
        </div>
      </td>
    </tr>
  );
}
