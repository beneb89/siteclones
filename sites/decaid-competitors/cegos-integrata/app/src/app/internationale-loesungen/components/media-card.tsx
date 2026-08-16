import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  imgSrc: string;
  title: string;
  description: string;
  href: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className="w-[367.7px] h-[405.7px] block shrink-0 max-md:w-[20.9375rem] max-md:h-[22.6rem] md:max-lg:w-59 md:max-lg:h-[461.3px] 2xl:w-[381.7px]">
      <div className={cn("border border-solid border-surface flex p-10 rounded-[10px] flex-col items-center text-background text-center h-full max-md:p-[21.3px] md:max-lg:p-[1.9rem]", styles.className)}>
        <picture className={cn("w-22.5 block", styles.className2)}>
          <img className="w-full h-20 block max-w-full max-h-20 mb-7.5 rounded-[10px] overflow-clip object-cover align-bottom" data-component="image" src={d.imgSrc} />
        </picture>
        <h3 className="h-15 min-h-15 flex mb-2.5 justify-center items-center text-xl font-bold leading-[1.5625rem] w-full max-md:text-base max-md:leading-[1.25rem] md:max-lg:text-lg md:max-lg:leading-[1.4375rem]" data-component="heading">
          {d.title}
        </h3>
        <p className="block mb-[1.5625rem] w-full">
          {d.description}
        </p>
        <a className={cn("w-36 border border-solid border-clr-0 flex min-w-30 py-[0.5625rem] px-4.5 rounded-[40px] justify-center items-center font-semibold leading-[1.125rem] bg-foreground cursor-pointer max-md:w-34.5 max-md:leading-[1rem] md:max-lg:leading-[1.0625rem]", styles.className3)} data-component="button" href={d.href} rel="noopener">
          {" Jetzt entdecken "}
        </a>
      </div>
    </div>
  );
}
