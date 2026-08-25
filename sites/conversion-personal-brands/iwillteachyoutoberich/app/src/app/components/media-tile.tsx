import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTileData = {
  ariaLabel: string;
  description: string;
  kind?: string;
  alt: string;
  imgSrc: string;
  text: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className={cn("w-[404.3px] flex relative pr-[13.3px] shrink-0 max-md:w-[114.3px] max-lg:pr-0 md:max-lg:w-54 2xl:w-[606.7px] 2xl:pr-5", styles.className)} aria-label={d.ariaLabel} role="group">
      <div className={cn("h-[21.9875rem] min-h-[21.8375rem] flex relative p-[13.3px] flex-col overflow-hidden bg-surface max-lg:min-h-full max-lg:p-5 2xl:h-[32.8125rem] 2xl:min-h-[32.8125rem] 2xl:p-5", styles.className2)}>
        <div className="block pr-[1.6625rem] grow max-lg:pr-0 2xl:pr-10 2xl:text-lg 2xl:leading-[1.4375rem]">
          <p className={cn("block", styles.className3)}>
            {d.description}
          </p>
          {" "}
        </div>
        {" "}
        <div className="block mt-[4.1625rem] max-lg:mt-7.5 2xl:mt-25">
          <div className={cn("h-[66.5px] min-h-[4.1625rem] flex relative pl-[4.575rem] flex-col justify-center max-lg:min-h-15 max-lg:pl-[4.6875rem] 2xl:h-25 2xl:min-h-25 2xl:pl-27.5", styles.className4)}>
            <div className={cn("h-[66.5px] block absolute top-0 left-0 min-w-0 rounded-[50%] overflow-hidden max-lg:h-15", styles.className5)}>
              <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover pointer-events-none" data-component={d.kind} alt={d.alt} src={d.imgSrc} />
              {" "}
            </div>
            {" "}
            <div className="block font-bold leading-[1.0625rem] max-lg:text-lg max-lg:leading-[1.375rem] 2xl:leading-6">
              {d.text}
            </div>
            {" "}
            <div className="block opacity-40 mt-[6.7px] leading-[0.9375rem] uppercase max-lg:mt-2.5 max-lg:leading-[1.125rem] 2xl:mt-2.5 2xl:text-base 2xl:leading-[1.125rem]">
              IWT Reader
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
