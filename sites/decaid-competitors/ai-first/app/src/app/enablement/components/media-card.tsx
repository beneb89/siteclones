import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  ariacontrols: string;
  id: string;
  title: string;
  arialabelledby: string;
  id2: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className={cn("block", styles.className)}>
      <h3 className="flex text-[1.625rem] font-bold leading-[1.8125rem] max-md:text-xl max-md:leading-[1.375rem] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.5625rem] 2xl:text-3xl 2xl:leading-[2.0625rem]" data-component="heading">
        <button className="flex py-5 justify-between items-start flex-1 gap-4 text-xl font-semibold leading-7 text-left cursor-default max-md:text-lg max-md:leading-[1.625rem]" data-component="button" aria-controls={d.ariacontrols} aria-expanded="false" id={d.id} type="button">
          <span className={cn("block", styles.className2)}>
            <span className={cn("inline", styles.className3)}>
              {d.title}
            </span>
          </span>
          <svg className="w-5 h-5 block shrink-0 overflow-hidden align-middle text-surface-2 [translate:0px_2px] pointer-events-none" data-component="icon" aria-hidden="true" fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </h3>
      <div className="hidden overflow-hidden text-sm leading-5 [animation-name:accordion-up] [animation-duration:0.2s] [animation-timing-function:ease-out]" aria-labelledby={d.arialabelledby} id={d.id2} role="region" />
    </div>
  );
}
