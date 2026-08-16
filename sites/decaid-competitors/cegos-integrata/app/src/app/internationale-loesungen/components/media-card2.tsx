import type { MediaCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCard2Data = {
  imgSrc: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d, styles }: { d: MediaCard2Data; styles: MediaCard2Styles }) {
  return (
    <div className="w-[273.3px] h-[26.8125rem] block shrink-0 max-md:w-[20.9375rem] max-md:h-[21.5125rem] md:max-lg:w-[174.5px] md:max-lg:h-[31.425rem] 2xl:w-[17.7375rem]">
      <div className="border border-solid border-surface flex p-10 rounded-[10px] flex-col items-center text-foreground text-center bg-background h-full max-md:p-[21.3px] md:max-lg:p-[1.9rem]">
        <picture className={cn("w-20 block", styles.className)}>
          <img className="w-full h-20 block max-w-full max-h-20 mb-7.5 rounded-[10px] overflow-clip object-cover align-bottom" data-component="image" src={d.imgSrc} />
        </picture>
        <h3 className="h-15 min-h-15 flex mb-2.5 justify-center items-center text-xl font-bold leading-[1.5625rem] w-full max-md:text-base max-md:leading-[1.25rem] md:max-lg:text-lg md:max-lg:leading-[1.4375rem]" data-component="heading">
          {d.title}
        </h3>
        <p className="block mb-[1.5625rem] w-full">
          {d.description}
        </p>
      </div>
    </div>
  );
}
