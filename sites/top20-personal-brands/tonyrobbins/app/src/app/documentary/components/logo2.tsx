import type { Logo2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo2Data = {
  alt: string;
  imgSrc: string;
  srcSet: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className="w-[174.5px] block relative min-w-0 mr-2.5 shrink-0 max-md:w-[162.5px]">
      <div className={cn("flex flex-col items-center text-center", styles.className)}>
        <div className="block relative min-w-0 h-[1.875rem] max-lg:w-0">
          <img className="w-full block absolute max-w-full overflow-clip align-middle text-clr-0 h-full" alt={d.alt} sizes="64px" src={d.imgSrc} srcSet={d.srcSet} />
        </div>
      </div>
    </div>
  );
}
