import type { Logo2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo2Data = {
  height: string;
  imgSrc: string;
  label?: string;
  width: string;
  sizes?: string;
  srcSet?: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className="block max-w-[16.6667%] pl-[0.9375rem] grow max-lg:max-w-full max-lg:shrink-0 max-md:basis-[390px] md:max-lg:basis-[250px]">
      <div className="h-full flex relative flex-col">
        <div className={cn("block relative max-w-full my-[0.3125rem]", styles.className)}>
          <span className="block relative max-w-full overflow-hidden">
            <img className={cn("block max-w-full overflow-clip align-middle", styles.className2)} data-component="image" alt="" height={d.height} src={d.imgSrc} title={d.label} width={d.width} sizes={d.sizes} srcSet={d.srcSet} />
          </span>
        </div>
      </div>
    </div>
  );
}
