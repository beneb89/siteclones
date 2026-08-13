import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCardData = {
  id: string;
  text: string;
  href: string;
  title: string;
  description: string;
  text2: string;
  text3: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className="border border-solid border-border block mb-4 p-5 rounded-[14px] bg-color-004" id={d.id}>
      <div className="flex items-start gap-4">
        <div className="flex rounded-full justify-center items-center shrink-0 bg-surface-2 w-10 h-10">
          <span className="block text-color-002 text-lg font-bold leading-7">
            {d.text}
          </span>
        </div>
        <div className="w-199.5 block min-w-0 flex-1 max-md:w-[15.3125rem] md:max-lg:w-159.5">
          <div className="flex mb-2 flex-wrap items-center gap-2">
            <h3 className="block text-lg font-semibold leading-7" data-component="heading">
              <a className={cn("inline-flex items-center gap-1 cursor-pointer hover:text-color-002", styles.className)} data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
                {d.title}
                <svg className={cn("block opacity-50 overflow-hidden align-middle w-4 h-4 focus:[outline-style:auto] focus:outline-[5px]", styles.className2)} data-component="icon" aria-hidden="true" fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            </h3>
            <span className="flex py-0.5 px-2 rounded-full items-center gap-1 text-primary text-xs font-medium leading-4 bg-color-007">
              <svg className="block overflow-hidden align-middle w-3 h-3" data-component="icon" aria-hidden="true" fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              AI-Native
            </span>
          </div>
          <p className="block mb-3 text-muted-foreground">
            {d.description}
          </p>
          <div className="flex flex-wrap gap-2 text-sm leading-5">
            <span className="block py-1 px-2 rounded-lg text-muted-foreground bg-color-005">
              {d.text2}
            </span>
            <span className="block py-1 px-2 rounded-lg text-muted-foreground bg-color-005">
              {d.text3}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
