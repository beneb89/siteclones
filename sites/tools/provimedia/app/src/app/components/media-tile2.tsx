import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile2Data = {
  text: string;
  description: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <details className={cn("block", styles.className)}>
      <summary className="flex py-5 justify-between items-center list-inside cursor-pointer">
        <span className="block pr-4 text-lg font-semibold leading-7">
          {d.text}
        </span>
        <svg className="block shrink-0 overflow-hidden align-middle text-muted-foreground w-5 h-5 focus:outline-clr-18 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-f82cd26a="">
          <path data-v-f82cd26a="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      </summary>
      <p className="block pb-5 text-muted-foreground leading-6.5 text-pretty">
        {d.description}
      </p>
    </details>
  );
}
