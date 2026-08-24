import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  text: string;
  text2: string;
  href: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className="flex">
      <div className={cn("min-h-[10.4rem] flex relative p-[1.6625rem] rounded-[6.7px] flex-col overflow-hidden shadow-[var(--color-002)_0px_0px_0px_1px_inset] max-lg:min-h-full max-lg:p-0 max-lg:rounded-[initial] max-lg:shadow-[initial] 2xl:min-h-62.5 2xl:p-10 2xl:rounded-[10px]", styles.className)}>
        <div className="grid mb-[4.1625rem] gap-[33.3px] grid-cols-[1fr_auto] max-lg:grid-cols-1 max-lg:mb-0 max-lg:gap-[initial] 2xl:mb-25 2xl:gap-12.5">
          <div className="block opacity-40 max-lg:mb-2.5">
            {d.text}
          </div>
          {" "}
        </div>
        {" "}
        <div className={cn("block max-w-[75%] max-lg:max-w-none", styles.className2)}>
          <div className="block text-2xl font-bold leading-[1.625rem] max-lg:text-[1.5625rem] max-lg:leading-[1.75rem] max-lg:[word-break:break-all] 2xl:text-4xl 2xl:leading-[2.5rem]">
            {d.text2}
          </div>
          {" "}
          <div className="block mt-[13.3px] max-lg:mt-5 2xl:mt-5">
            <a className={cn("inline cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:z-1 after:w-[37.5rem] max-md:after:w-[21.4375rem] md:max-lg:after:w-162 2xl:after:w-225", styles.className3)} data-component="link" href={d.href}>
              {" "}
              <span className="inline uppercase underline 2xl:text-lg 2xl:leading-[1.4375rem]">
                View episode
              </span>
              {" "}
            </a>
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
