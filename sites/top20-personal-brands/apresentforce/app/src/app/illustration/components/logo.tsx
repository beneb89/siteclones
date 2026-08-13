import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  imgSrc: string;
  srcSet: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="w-full flex relative rounded-3xl justify-center items-center content-center [align-self:start] shrink-0 gap-2.5 overflow-hidden bg-surface-2">
      <div className="contents min-w-0">
        <div className={cn("w-[452.7px] h-160 block relative shrink-0 overflow-hidden aspect-[0.707355/1] max-md:w-[20.4375rem] max-lg:flex-1 md:max-lg:w-180 2xl:w-113 2xl:h-[39.9375rem]", styles.className)}>
          <div className="h-full block absolute top-0 inset-x-0">
            <img className={cn("w-full h-160 block overflow-clip object-contain aspect-[auto_1160/1626] max-lg:object-cover 2xl:h-[39.9375rem]", styles.className2)} data-component="image" alt="" height="1626" sizes="565.8842px" src={d.imgSrc} srcSet={d.srcSet} width="1160" />
          </div>
        </div>
      </div>
    </div>
  );
}
