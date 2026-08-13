import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTileData = {
  alt: string;
  imgSrc: string;
  label: string;
  text: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className={cn("w-[406.7px] block float-left max-md:w-[21.5625rem] md:max-lg:w-88.5 2xl:w-[413.3px]", styles.className)}>
      <div className="block relative">
        <div className="block">
          <div className="block relative text-color-001 text-left bg-surface shadow-[var(--clr-0)_0px_7px_21px_0px]">
            <img className={cn("w-[24.1875rem] inline relative z-1 max-w-full overflow-clip aspect-[auto_372/372] align-middle max-md:w-[21.5625rem] md:max-lg:w-[21.1875rem] 2xl:w-[24.5625rem]", styles.className2)} data-component="image" alt={d.alt} height="372px" src={d.imgSrc} width="372px" />
            {"    "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="flex py-[0.9375rem] px-2.5 justify-between items-center text-left before:content-['_'] before:hidden before:text-foreground before:text-base before:leading-[1.625rem] before:text-left after:content-['_'] after:hidden after:text-foreground after:text-base after:leading-[1.625rem] after:text-left">
          <div className="block max-w-[75%]">
            <div className="block text-muted-foreground [font-family:Georgia,_serif] text-sm italic leading-[1.375rem]">
              <div className="block">
                <span className="inline">
                  {"\n                by "}
                  <button className="border-b-2 border-solid border-b-muted inline-block cursor-pointer hover:border-clr-5 focus:border-clr-5" data-component="button">
                    {d.label}
                  </button>
                  {" "}
                  <span className="inline">
                    <div className={cn("h-0 flex fixed bottom-8 z-9999 justify-center items-center pointer-events-none max-md:-right-[1.5625rem] max-md:left-[1.5625rem]", styles.className3)} width="100%" />
                  </span>
                  {" "}
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="block max-w-[25%] text-right">
            <div className="block relative">
              <button className="h-[1.6rem] inline-block min-w-[1.5625rem] rounded-[50%] align-middle text-center cursor-pointer hover:bg-surface hover:[background-position:0%_0%] focus:bg-surface focus:[background-position:0%_0%]" data-component="button">
                {" "}
                <span className="inline text-border before:content-[''] before:inline-block before:w-4 before:h-[1.6rem] before:mr-[0.1rem] before:text-border before:text-base before:leading-[1.625rem] before:text-center max-md:before:mr-0" />
                {" "}
              </button>
              {" "}
              <span className="inline align-middle text-sm leading-[1.375rem]">
                {d.text}
              </span>
              {"  "}
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
