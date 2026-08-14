import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  href: string;
  srcSet: string;
  imgSrc: string;
  alt?: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="w-[16.6125rem] h-45 block shrink-0 max-md:w-[20.9375rem] md:max-lg:w-[10.4375rem] 2xl:w-[276.3px]">
      <div className="flex relative px-4 rounded-[10px] justify-center items-center overflow-hidden bg-surface h-[11.25rem]">
        <a className="flex justify-center items-center text-primary cursor-pointer w-full h-full" data-component="link" href={d.href} rel="noopener noreferrer">
          <picture className={cn("h-37.5 block md:max-lg:h-22.5", styles.className)}>
            <source className="inline" sizes="(min-width:225px) 225px" srcSet={d.srcSet} type="image/webp" />
            <img className="w-[14.0625rem] h-37.5 block relative z-1 max-w-full max-h-37.5 rounded-[10px] overflow-clip align-bottom md:max-lg:w-[8.4375rem] md:max-lg:h-22.5" data-component="image" src={d.imgSrc} alt={d.alt} />
          </picture>
        </a>
      </div>
    </div>
  );
}
