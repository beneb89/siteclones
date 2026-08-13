import type { Logo2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo2Data = {
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className="block">
      <div className={cn("h-100 flex relative mr-4 p-6 rounded-2xl items-end overflow-hidden bg-border max-md:h-50 md:max-lg:h-[19.2rem]", styles.className)}>
        <img className={cn("w-full block absolute top-0 left-0 min-w-0 max-w-full overflow-clip object-cover align-middle text-clr-0 h-full", styles.className2)} alt="" height={d.height} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
      </div>
    </div>
  );
}
