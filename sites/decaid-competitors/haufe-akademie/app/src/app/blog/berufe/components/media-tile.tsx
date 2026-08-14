import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type MediaTileData = {
  imgSrc: string;
  srcSet: string;
  dateTime: string;
  date: string;
  href: string;
  label: string;
  description: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className={cn("w-[418.7px] min-h-px flex float-left px-[1.0625rem] flex-wrap max-md:w-[22.4375rem] max-md:mb-7 md:max-lg:w-94 2xl:w-[419.3px]", styles.className)}>
      <article className="box-content block relative z-5 max-w-105 mb-7 pb-12.5 rounded-xl bg-surface-2">
        <div className="box-content h-[11.5rem] min-h-5.5 block rounded-tl-xl rounded-tr-xl overflow-hidden max-md:h-[155.5px] md:max-lg:h-[163.7px] 2xl:h-[11.525rem]">
          <img className="box-content w-[24.0625rem] h-46 block relative overflow-clip aspect-[auto_702/336] max-md:w-[20.3125rem] max-md:h-39 md:max-lg:w-85.5 md:max-lg:h-41" data-component="image" alt="" height="336" sizes="auto, (max-width: 702px) 100vw, 702px" src={d.imgSrc} srcSet={d.srcSet} width="702" />
          {" "}
        </div>
        {" "}
        <div className="box-content block px-7.5 max-md:pb-[1.5625rem]">
          <div className="box-content block relative mt-[1.5625rem] mb-[0.3125rem] bg-surface-2">
            <time className="box-content block text-color-001 text-xs leading-4.5" dateTime={d.dateTime} itemProp="datePublished">
              {d.date}
            </time>
            {"  "}
          </div>
          {" "}
          <a className={cn("box-content block mt-0.5 text-color-001 text-xl font-medium leading-7.5 cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:w-[384.7px] after:rounded-tl-xl max-md:after:w-[20.3125rem] md:max-lg:after:w-85.5 2xl:after:w-[385.3px]", styles.className2)} data-component="link" href={d.href} itemProp="url">
            {d.label}
          </a>
          {" "}
          <div className="box-content block mt-2.5">
            <p className="box-content block text-color-001">
              {d.description}
            </p>
            {" "}
          </div>
          {" "}
          <svg className="box-content w-auto h-[0.9375rem] block absolute right-7.5 bottom-6.5 overflow-hidden text-primary" data-component="icon" fill="none" height="15" viewBox="0 0 13 12" width="16" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.03033 0.469727L12.5607 6.00006L7.03033 11.5304L5.96967 10.4697L9.68934 6.75006H0V5.25006H9.68934L5.96967 1.53039L7.03033 0.469727Z" fill="#6F01F5" />
          </svg>
          {" "}
        </div>
        {" "}
      </article>
      {" "}
    </div>
  );
}
