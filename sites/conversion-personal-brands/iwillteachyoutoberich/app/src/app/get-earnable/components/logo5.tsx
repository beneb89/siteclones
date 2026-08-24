import type { Logo5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo5Data = {
  height: string;
  sizes: string;
  imgSrc: string;
  srcSet?: string;
  width: string;
};
/** A logo. */
export default function Logo5({ d, styles }: { d: Logo5Data; styles: Logo5Styles }) {
  return (
    <div className={cn("w-[316.7px] h-[403.5px] min-h-px flex relative max-md:w-[22.1875rem] md:max-lg:w-[249.3px] md:max-lg:h-[316.5px]", styles.className)}>
      <div className="w-full flex relative p-2.5 flex-wrap content-start">
        <div className="w-full block relative text-center">
          <div className="h-full block">
            <img className={cn("inline-block max-w-full overflow-clip align-middle md:max-lg:w-[14.3125rem]", styles.className2)} data-component="image" alt="" height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
