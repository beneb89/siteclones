import type { Logo2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo2Data = {
  ariahidden: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className={cn("min-h-px flex px-2.5 justify-center items-center max-md:py-2 max-md:px-1.5 md:max-lg:py-3 md:max-lg:px-2", styles.className)} aria-hidden={d.ariahidden}>
      <img className={cn("h-35 border border-solid border-surface block max-w-full max-h-35 p-3 rounded-sm overflow-clip object-contain aspect-[auto_500/500] bg-background max-md:p-2 md:max-lg:p-2.5", styles.className2)} data-component="image" alt="" height="500" src={d.imgSrc} width="500" />
      {" "}
    </div>
  );
}
