import type { TileStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type TileData = {
  text: string;
  text2: string;
  text3: string;
  description: string;
  href: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className="flex">
      <div className="h-[17.4125rem] min-h-[10.4rem] flex relative p-[1.6625rem] rounded-[6.7px] flex-col overflow-hidden shadow-[var(--color-002)_0px_0px_0px_1px_inset] max-md:h-[305.7px] max-lg:min-h-full max-lg:p-5 max-lg:rounded-[10px] md:max-lg:h-[17.3875rem] 2xl:h-[25.45rem] 2xl:min-h-62.5 2xl:p-10 2xl:rounded-[10px]">
        <div className={cn("grid mb-[4.1625rem] gap-[33.3px] max-lg:grid-cols-1 max-lg:mb-0 max-lg:gap-[initial] 2xl:mb-25 2xl:gap-12.5", styles.className)}>
          <div className="block max-lg:mb-7.5">
            <div className="h-full inline-flex relative max-w-full pt-0.5 px-[0.7rem] rounded-[665px] justify-center items-center overflow-hidden text-primary tracking-[-0.56px] whitespace-nowrap text-nowrap max-lg:pt-[0.15rem] max-lg:px-[0.8rem] max-lg:rounded-[999px] max-lg:tracking-[-0.64px] 2xl:pt-[2.7px] 2xl:px-[0.9rem] 2xl:rounded-[999px] 2xl:text-lg 2xl:leading-[1.4375rem] 2xl:tracking-[-0.72px] before:content-[''] before:block before:absolute before:inset-0 before:h-[1.5625rem] before:bg-primary before:opacity-10 max-lg:before:h-7.5 2xl:before:h-7.5">
              {d.text}
            </div>
            {" "}
          </div>
          {" "}
          <div className="block opacity-40 max-lg:mb-2.5">
            {d.text2}
          </div>
          {" "}
        </div>
        {" "}
        <div className="block max-w-[75%] max-lg:max-w-none">
          <div className="block text-2xl font-bold leading-[1.625rem] max-lg:text-[1.5625rem] max-lg:leading-[1.75rem] max-lg:[word-break:break-all] 2xl:text-4xl 2xl:leading-[2.5rem]">
            {d.text3}
          </div>
          {" "}
          <div className="opacity-40 mt-[13.3px] overflow-hidden line-clamp-2 max-lg:mt-2.5 2xl:mt-5">
            <p className="block">
              {d.description}
            </p>
            {" "}
          </div>
          {" "}
          <div className="block mt-[13.3px] max-lg:mt-5 2xl:mt-5">
            <a className="inline cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:z-1 after:w-[37.5rem] after:h-[17.4125rem] max-md:after:w-[21.4375rem] max-md:after:h-[305.7px] md:max-lg:after:w-162 md:max-lg:after:h-[17.3875rem] 2xl:after:w-225 2xl:after:h-[25.45rem]" data-component="link" href={d.href}>
              {" "}
              <span className="inline uppercase underline 2xl:text-lg 2xl:leading-[1.4375rem]">
                Read more
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
