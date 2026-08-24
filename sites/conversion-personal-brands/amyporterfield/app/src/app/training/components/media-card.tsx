import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  id: string;
  id2: string;
  title: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className={cn("box-content h-[4.0625rem] block relative pointer-events-none md:max-lg:h-[2.6rem]", styles.className)} id={d.id}>
      <div className="box-content h-full block absolute top-0 inset-x-0 bg-background pointer-events-none">
        <div className="box-content w-300 h-full block relative max-h-20000 mx-10 pointer-events-none max-md:w-[23.4375rem] max-lg:mx-0 md:max-lg:w-192 2xl:mx-90" />
      </div>
      <div className="box-content h-full block absolute top-0 inset-x-0 pointer-events-none" id={d.id2}>
        <div className="box-content w-300 h-full block relative max-h-20000 mx-10 pointer-events-none max-md:w-[23.4375rem] max-lg:mx-0 md:max-lg:w-192 2xl:mx-90">
          <a className={cn("w-185 h-8.5 block absolute top-[1.4375rem] left-[15.9375rem] transform-[none] cursor-pointer max-md:w-59.5 max-md:h-[2.8125rem] max-md:left-[3.9375rem] max-md:origin-[119px_22.5px] md:max-lg:transform-[matrix(0.64,0,0,0.64,-225,-14.4)] md:max-lg:origin-[370px_17px]", styles.className2)} data-component="link" href="#/" target="_self">
            <h1 className="box-content h-full block absolute top-0 inset-x-0 text-color-002 [font-family:'Newsreader_Display_Light'] text-3xl leading-[2.0625rem] text-left max-md:text-xl max-md:leading-5.5" data-component="heading">
              {d.title}
            </h1>
          </a>
          <a className={cn("w-[1.8125rem] h-[2.0625rem] block absolute top-5 left-51 transform-[none] cursor-pointer max-md:w-[1.6875rem] max-md:h-[1.6875rem] max-md:left-5 max-md:origin-[13.5px_13.5px] md:max-lg:transform-[matrix(0.64,0,0,0.64,-78.66,-13.14)] md:max-lg:origin-[14.5px_16.5px]", styles.className3)} data-component="link" href="#/" target="_self">
            <div className="box-content h-full block">
              <svg className="box-content w-[1.8125rem] h-[2.0625rem] inline overflow-hidden align-top max-md:w-[1.6875rem] max-md:h-[1.6875rem]" data-component="icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
