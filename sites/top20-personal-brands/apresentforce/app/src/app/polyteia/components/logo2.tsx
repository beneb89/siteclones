import type { Logo2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo2Data = {
  imgSrc: string;
  srcSet: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className="contents min-w-0">
      <div className={cn("w-308 h-[44.25rem] block sticky top-0 rounded-3xl shrink-0 overflow-hidden aspect-[1.74/1] max-md:w-[20.4375rem] max-lg:flex max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:gap-2.5 max-lg:aspect-[initial] md:max-lg:w-180 2xl:w-400 2xl:h-[919.5px]", styles.className)}>
        <div className="h-full block absolute top-0 inset-x-0 rounded-3xl max-lg:min-w-0">
          <img className={cn("w-full h-177 block rounded-3xl overflow-clip object-cover aspect-[auto_3840/2160] 2xl:h-230", styles.className2)} data-component="image" alt="" height="2160" sizes="calc(max((min(100vw - 48px, 1600px) - 48px) / 2, 200px) * 2 + 48px)" src={d.imgSrc} srcSet={d.srcSet} width="3840" />
        </div>
      </div>
    </div>
  );
}
