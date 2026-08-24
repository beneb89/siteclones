import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  ariaLabel: string;
  kind?: string;
  imgSrc: string;
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className={cn("w-115 block relative pl-[13.3px] shrink-0 max-md:w-[171.5px] max-lg:pl-0 md:max-lg:w-81 2xl:w-172.5 2xl:pl-5", styles.className)} aria-label={d.ariaLabel} role="group">
      <div className="min-h-full flex relative z-1 py-[2.2875rem] px-5 rounded-[6.7px] overflow-hidden text-background bg-foreground max-lg:flex-col max-lg:p-0 max-lg:rounded-[initial] max-lg:text-[color:inherit] max-lg:bg-[initial] 2xl:py-[3.4375rem] 2xl:px-7.5 2xl:rounded-[10px] before:content-[''] before:block before:w-0 before:h-[514.3px] before:pt-[25.425rem] max-lg:before:hidden max-lg:before:pt-[100%] max-lg:before:h-auto 2xl:before:h-[725.7px] 2xl:before:pt-152.5">
        <div className={cn("block absolute left-0 -z-1 min-w-0 max-lg:flex max-lg:relative max-lg:right-0 max-lg:rounded-[10px] max-lg:overflow-hidden before:content-[''] before:block before:w-0 before:h-[171.5px] before:pt-[171.5px] md:max-lg:before:h-81 md:max-lg:before:pt-81 2xl:before:hidden", styles.className2)}>
          <div className="block">
            <img className={cn("w-[27.9375rem] h-147 block absolute max-w-full overflow-clip object-cover pointer-events-none max-md:w-43 max-md:h-43 md:max-lg:w-81 md:max-lg:h-81", styles.className3)} data-component={d.kind} alt="" src={d.imgSrc} />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="block max-w-[19.1375rem] mt-[19.55rem] max-lg:max-w-115 max-lg:mt-[0.9375rem] 2xl:max-w-115 2xl:mt-117.5">
          <div className="block text-2xl font-bold leading-[1.625rem] max-lg:text-[1.5625rem] max-lg:leading-[1.75rem] max-lg:[word-break:break-all] 2xl:text-4xl 2xl:leading-[2.5rem]">
            {d.text}
          </div>
          {" "}
          <div className="block mt-[13.3px] max-lg:mt-2.5 2xl:mt-5 2xl:text-lg 2xl:leading-[1.4375rem]">
            {d.text2}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
