import type { Logo2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo2Data = {
  height: string;
  sizes: string;
  imgSrc: string;
  srcSet: string;
  width: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className="contents min-w-0">
      <div className={cn("w-full block relative rounded-3xl [align-self:start] shrink-0 overflow-hidden max-lg:rounded-[initial]", styles.className)}>
        <div className="h-full block absolute top-0 inset-x-0 rounded-3xl max-lg:rounded-[initial]">
          <img className={cn("w-full block rounded-3xl overflow-clip object-cover max-lg:rounded-[initial]", styles.className2)} data-component="image" alt="" height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
        </div>
      </div>
    </div>
  );
}
