import type { MediaTile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile3Data = {
  description: string;
  text: string;
  value: string;
};
/** A media tile. */
export default function MediaTile3({ d, styles }: { d: MediaTile3Data; styles: MediaTile3Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <p className="block my-4" dir="auto">
        {d.description}
      </p>
      {" "}
      <div className="flex relative mb-4 justify-between overflow-auto bg-surface">
        <pre className="block p-4 rounded-md overflow-auto [font-family:ui-monospace,_SFMono-Regular,_'SF_Mono',_Menlo,_Consolas,_'Liberation_Mono',_monospace] text-sm leading-[1.25rem] whitespace-pre [overflow-wrap:normal] text-nowrap bg-surface">
          <code className="inline rounded-md">
            {d.text}
          </code>
        </pre>
        <div className="block">
          <clipboard-copy class="w-7 h-7 flex relative m-2 rounded-md justify-center items-center align-middle text-primary text-sm font-medium leading-5 whitespace-nowrap text-nowrap cursor-pointer hover:bg-clr-8 hover:border-border" data-component="button" aria-label="Copy code to clipboard" role="button" value={d.value}>
            <svg className="w-auto h-4 block mr-1 align-text-bottom text-muted-foreground focus:outline-clr-11 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" version="1.1" data-view-component="true" fill="currentColor">
              <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z" />
              <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z" />
            </svg>
            {" "}
            <svg className="w-4 h-4 hidden min-w-0 mr-1 align-text-bottom text-clr-3" aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" data-component="Octicon" version="1.1" data-view-component="true" fill="currentColor">
              <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
            </svg>
            {" "}
          </clipboard-copy>
          {" "}
        </div>
      </div>
      {" "}
    </li>
  );
}
