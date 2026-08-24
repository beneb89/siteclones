import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  alt: string;
  imgSrc: string;
  href: string;
  label: string;
  description: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className={cn("border-solid border-b border-b-color-002 block py-[13.3px] max-lg:border-initial max-lg:border-b-[0] max-lg:border-b-[initial] 2xl:py-5", styles.className)}>
      <div className="h-full min-h-full flex relative justify-between items-start overflow-hidden max-lg:flex-col">
        <div className="w-full h-[8.9375rem] min-h-[143.1px] flex relative max-w-[199.7px] rounded-[6.7px] shrink-0 order-[1] overflow-hidden shadow-[var(--color-002)_0px_0px_0px_1px_inset] max-md:h-36 max-lg:max-w-[60%] max-lg:mb-5 max-lg:rounded-[10px] max-lg:order-[-1] max-lg:min-h-0 md:max-lg:h-[17.0125rem] 2xl:h-[13.4375rem] 2xl:min-h-[13.4375rem] 2xl:max-w-75 2xl:rounded-[10px] before:content-[''] before:block before:w-0 before:h-[8.9375rem] before:pt-[8.7375rem] max-md:before:h-36 max-md:before:pt-36 md:max-lg:before:h-[17.0125rem] md:max-lg:before:pt-[17.0125rem] 2xl:before:h-[13.4375rem] 2xl:before:pt-52.5">
          <div className="w-0 block">
            <img className="w-50 h-[8.9375rem] block absolute max-w-full overflow-clip object-cover pointer-events-none max-md:w-51.5 max-md:h-36 md:max-lg:w-[24.3125rem] md:max-lg:h-68 2xl:w-75 2xl:h-[13.4375rem]" data-component="image" alt={d.alt} src={d.imgSrc} />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="block max-w-[19.1375rem] mr-[33.3px] max-lg:max-w-115 max-lg:mr-0 2xl:max-w-115 2xl:mr-12.5">
          <div className="block font-bold leading-[1.0625rem] max-lg:text-[1.5625rem] max-lg:leading-[1.75rem] max-lg:[word-break:break-all] 2xl:leading-6">
            <a className={cn("inline cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:z-1 after:w-[37.5rem] max-md:after:w-[21.4375rem] md:max-lg:after:w-162 2xl:after:w-225", styles.className2)} data-component="link" href={d.href} target="_blank">
              {d.label}
            </a>
            {" "}
          </div>
          {" "}
          <div className="block opacity-50 mt-[6.7px] leading-[1.25rem] max-lg:mt-2.5 max-lg:leading-[1.375rem] 2xl:mt-2.5 2xl:text-lg 2xl:leading-[1.5625rem]">
            <p className="block">
              {d.description}
            </p>
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
