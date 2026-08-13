import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  sizes: string;
  imgSrc: string;
  srcSet: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="contents min-w-0">
      <div className={cn("w-full h-full block relative rounded-[45px] self-center shrink-0", styles.className)}>
        <div className="h-full block absolute top-0 inset-x-0 rounded-[45px]">
          <img className={cn("w-full block rounded-[45px] overflow-clip object-cover", styles.className2)} data-component="image" alt="" sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} />
        </div>
      </div>
    </div>
  );
}
