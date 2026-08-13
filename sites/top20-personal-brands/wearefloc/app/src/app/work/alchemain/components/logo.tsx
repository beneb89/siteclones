import type { LogoStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type LogoData = {
  imgSrc: string;
  srcSet: string;
  imgSrc2: string;
  srcSet2: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="contents min-w-0 2xl:w-468 2xl:h-[65.8125rem] 2xl:block 2xl:relative 2xl:shrink-0 2xl:aspect-[1.77778/1]">
      <div className={cn("w-312 h-175.5 block relative inset-0 shrink-0 aspect-[1.77778/1] max-md:w-[21.4375rem] max-md:h-[12.0625rem] md:max-lg:w-184 md:max-lg:h-103.5 2xl:w-468 2xl:h-[65.8125rem] 2xl:absolute 2xl:right-auto 2xl:bottom-auto 2xl:shrink-[initial] 2xl:aspect-[initial]", styles.className)}>
        <img className="hidden 2xl:w-full 2xl:h-[65.8125rem] 2xl:block 2xl:overflow-clip 2xl:object-cover 2xl:aspect-[auto_1920/1080]" alt="" height="1080" sizes="calc(100vw - 48px)" src={d.imgSrc} srcSet={d.srcSet} width="1920" />
        <div className="h-full block absolute top-0 inset-x-0 2xl:hidden">
          <img className="w-full h-175.5 block overflow-clip object-cover aspect-[auto_1920/1080] max-md:h-[12.0625rem] md:max-lg:h-103.5 2xl:hidden" data-component="image" alt="" height="1080" sizes="(min-width: 1366px) and (max-width: 1599.98px) calc(100vw - 32px), (min-width: 1024px) and (max-width: 1365.98px) calc(100vw - 32px), (max-width: 1023.98px) calc(100vw - 32px), (min-width: 1600px) calc(100vw - 48px)" src={d.imgSrc2} srcSet={d.srcSet2} width="1920" />
        </div>
      </div>
    </div>
  );
}
