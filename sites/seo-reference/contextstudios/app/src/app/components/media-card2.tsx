import type { MediaCard2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCard2Data = {
  id: string;
  title: string;
  arialabelledby: string;
  id2: string;
  text: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d, styles }: { d: MediaCard2Data; styles: MediaCard2Styles }) {
  return (
    <div className={cn("block", styles.className)}>
      <h3 className="flex" data-component="heading">
        <button className="flex py-4 px-6 justify-between items-center flex-1 text-sm font-medium leading-5 text-left cursor-default hover:bg-color-008" data-component="button" aria-expanded="false" id={d.id} type="button">
          {d.title}
          <svg className="block shrink-0 overflow-hidden align-middle text-muted-foreground h-4 w-4" data-component="icon" aria-hidden="true" fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </h3>
      <div className="block overflow-hidden text-sm leading-5" aria-labelledby={d.arialabelledby} id={d.id2} role="region">
        <div className="hidden pb-4 px-6 text-muted-foreground">
          {d.text}
        </div>
      </div>
    </div>
  );
}
