import type { Logo3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo3Data = {
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
};
/** A logo. */
export default function Logo3({ d, styles }: { d: Logo3Data; styles: Logo3Styles }) {
  return (
    <div className={cn("w-full flex relative rounded-3xl justify-center items-center content-center [align-self:start] shrink-0 gap-2.5 overflow-hidden aspect-[0.911602/1]", styles.className)}>
      <div className="contents min-w-0">
        <div className="w-[394.7px] h-full block relative grow shrink-0 basis-0 overflow-hidden max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-152">
          <div className="h-full block absolute top-0 inset-x-0">
            <img className={cn("w-full h-[27.0625rem] block overflow-clip object-cover max-md:h-[22.4375rem] md:max-lg:h-197.5 2xl:h-[41.6875rem]", styles.className2)} data-component="image" alt="" height={d.height} sizes="max(max((100vw - 96px) / 3, 200px), 1px)" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
          </div>
        </div>
      </div>
    </div>
  );
}
