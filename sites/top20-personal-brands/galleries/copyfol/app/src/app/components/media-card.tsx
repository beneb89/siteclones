import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCardData = {
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className="border-t border-solid border-t-color-003 border-b border-b-color-003 block -mb-px">
      <div className="block">
        <div className="flex py-4 px-6 justify-between items-center cursor-pointer max-md:px-4" aria-hidden="true">
          <h4 className="block [font-weight:650]" data-component="heading">
            {d.title}
          </h4>
          <svg className={cn("h-2 block overflow-hidden align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-4", styles.className)} data-component="icon" fill="none" height="8" width="12" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M10.59.59 6 5.17 1.41.59 0 2l6 6 6-6z" />
          </svg>
        </div>
        <div className="h-0 block overflow-hidden">
          <div className="block py-4 px-6 max-md:px-4">
            <p className="block pb-4">
              {d.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
