import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile2Data = {
  alt: string;
  imgSrc: string;
  text: string;
  description: string;
  href: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className="flex">
      <div className={cn("h-[21.4875rem] min-h-[10.4rem] flex relative p-[1.6625rem] rounded-[6.7px] flex-col overflow-hidden shadow-[var(--color-002)_0px_0px_0px_1px_inset] max-md:h-[477.9px] max-lg:min-h-full max-lg:p-0 max-lg:rounded-[initial] max-lg:shadow-[initial] 2xl:h-[32.0375rem] 2xl:min-h-62.5 2xl:p-10 2xl:rounded-[10px]", styles.className)}>
        <div className="grid mb-[4.1625rem] gap-[33.3px] grid-cols-[1fr_auto] max-lg:grid-cols-1 max-lg:mb-0 max-lg:gap-[initial] 2xl:mb-25 2xl:gap-12.5">
          <div className="flex relative rounded-[6.7px] overflow-hidden max-lg:mb-[0.9375rem] max-lg:rounded-[10px] 2xl:rounded-[10px] before:content-[''] before:block before:w-0 before:h-[116.5px] before:pt-[116.5px] max-md:before:h-[21.4375rem] max-md:before:pt-[21.4375rem] md:max-lg:before:h-162 md:max-lg:before:pt-162 2xl:before:h-[10.9375rem] 2xl:before:pt-[10.9375rem]">
            <img className="w-full h-full block absolute top-0 left-0 min-w-0 max-w-full overflow-clip object-cover pointer-events-none" data-component="image" alt={d.alt} src={d.imgSrc} />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="block max-w-[75%] max-lg:max-w-none">
          <div className="block text-2xl font-bold leading-[1.625rem] max-lg:text-[1.5625rem] max-lg:leading-[1.75rem] max-lg:[word-break:break-all] 2xl:text-4xl 2xl:leading-[2.5rem]">
            {d.text}
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
            <a className={cn("inline cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:z-1 after:w-[37.5rem] after:h-[21.4875rem] max-md:after:w-[21.4375rem] max-md:after:h-[477.9px] md:max-lg:after:w-162 2xl:after:w-225 2xl:after:h-[32.0375rem]", styles.className2)} data-component="link" href={d.href} target="_blank">
              {" "}
              <span className="inline uppercase underline 2xl:text-lg 2xl:leading-[1.4375rem]">
                Learn More
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
