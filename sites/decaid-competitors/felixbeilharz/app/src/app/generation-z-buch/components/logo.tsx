import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  height: string;
  sizes: string;
  imgSrc: string;
  srcSet: string;
  label?: string;
  width: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="block max-w-[20%] pl-[0.9375rem] grow max-lg:max-w-full max-lg:shrink-0 max-md:basis-[390px] md:max-lg:basis-[250px]">
      <div className={cn("flex relative flex-col", styles.className)}>
        <div className={cn("block relative max-w-full my-[0.3125rem] mx-auto", styles.className2)}>
          <span className="block relative max-w-full overflow-hidden">
            <img className={cn("block max-w-full overflow-clip align-middle", styles.className3)} data-component="image" alt="" height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} title={d.label} width={d.width} />
          </span>
        </div>
      </div>
    </div>
  );
}
