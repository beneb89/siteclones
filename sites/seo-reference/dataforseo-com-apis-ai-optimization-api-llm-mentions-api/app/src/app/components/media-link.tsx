import type { MediaLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaLinkData = {
  alt: string;
  imgSrc: string;
  label: string;
  label2: string;
};
/** A linked media tile. */
export default function MediaLink({ d, styles }: { d: MediaLinkData; styles: MediaLinkStyles }) {
  return (
    <button className={cn("w-[19.9375rem] border-b border-solid border-b-color-003 flex relative py-6 px-8 rounded-[7px] justify-center items-center shrink-0 gap-5 text-muted text-sm font-medium leading-[1.375rem] text-left cursor-pointer max-lg:border-r max-lg:border-r-color-003 max-lg:min-w-50 max-lg:py-4 max-lg:px-6 max-lg:border-b-[0] max-lg:border-initial max-lg:border-b-[initial] before:content-[''] before:block before:absolute before:right-[19.6875rem] before:bottom-0 before:left-0 before:bg-primary max-lg:before:top-18 max-lg:before:right-0 max-lg:before:h-1 hover:border-b-background hover:border-l-clr-37 hover:border-r-clr-37 hover:border-t-clr-37 focus:border-l-clr-54 focus:border-r-clr-54 focus:border-t-clr-54 focus:outline-clr-55", styles.className)} data-component="button">
      <div className={cn("w-11 h-11 flex rounded-[10px] justify-center items-center shrink-0 focus:outline-clr-55", styles.className2)}>
        <img className={cn("w-5.5 h-5.5 block max-w-full overflow-clip object-contain align-middle focus:outline-muted", styles.className3)} data-component="image" alt={d.alt} src={d.imgSrc} title={d.label} />
        {" "}
      </div>
      {" "}
      <div className="flex flex-col flex-1 gap-1 focus:outline-muted">
        <span className="block text-color-001 text-lg font-bold leading-[1.8125rem] focus:outline-color-001">
          {d.label2}
        </span>
        {" "}
      </div>
      {" "}
    </button>
  );
}
