import type { Logo2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo2Data = {
  height: string;
  imgSrc: string;
  label: string;
  width: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className={cn("w-[5.5625rem] block relative max-w-full max-h-[1e+06px] p-2.5 max-md:w-[103.3px] max-md:px-0 2xl:hidden", styles.className)}>
      <span className="block relative max-w-full max-h-[1e+06px] overflow-hidden max-md:inline-block max-md:max-w-17.5 2xl:hidden">
        <img className={cn("w-[4.3125rem] block opacity-20 max-w-full max-h-[1e+06px] overflow-clip align-top 2xl:hidden", styles.className2)} data-component="image" alt="" height={d.height} src={d.imgSrc} title={d.label} width={d.width} />
      </span>
    </div>
  );
}
