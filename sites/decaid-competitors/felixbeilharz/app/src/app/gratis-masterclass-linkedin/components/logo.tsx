import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  height: string;
  imgSrc: string;
  label: string;
  width: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="block max-w-[25%] pl-[0.9375rem] grow max-lg:max-w-full max-lg:shrink-0 max-md:basis-[390px] md:max-lg:basis-[250px]">
      <div className="h-full flex relative flex-col">
        <div className={cn("block relative my-5", styles.className)}>
          <span className="block relative max-w-full overflow-hidden">
            <img className={cn("w-61.5 block max-w-full overflow-clip align-middle max-md:w-[18.3125rem]", styles.className2)} data-component="image" alt="" height={d.height} src={d.imgSrc} title={d.label} width={d.width} />
          </span>
        </div>
      </div>
    </div>
  );
}
