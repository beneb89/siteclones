import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("flex relative mx-[13.3px] flex-1 overflow-hidden aspect-[50/29] max-lg:my-[0.9375rem] max-lg:mx-auto max-lg:aspect-[7/4] max-lg:grow-[initial] max-lg:basis-[initial] 2xl:mx-5 before:content-[''] before:block before:w-0 before:h-[6.25rem] before:pt-[6.25rem] md:max-lg:before:h-[8.6875rem] md:max-lg:before:pt-[8.6875rem] 2xl:before:h-37.5 2xl:before:pt-37.5", styles.className)}>
      <img className="w-full h-15 block absolute min-w-0 max-w-full max-h-[3.75rem] overflow-clip object-contain pointer-events-none max-md:h-12 max-lg:object-cover max-lg:max-h-none md:max-lg:h-26.5 2xl:h-22.5 2xl:max-h-22.5" data-component="image" alt="" src={d.imgSrc} />
      {" "}
    </div>
  );
}
