import type { Logo2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo2Data = {
  height: string;
  imgSrc: string;
  width: string;
  sizes?: string;
  srcSet?: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className={cn("w-full flex relative rounded-3xl justify-center items-center content-center self-center shrink-0 gap-2.5 overflow-hidden bg-foreground max-lg:col-start-[span_1]", styles.className)}>
      <div className="contents min-w-0">
        <div className={cn("w-full block relative shrink-0", styles.className2)}>
          <div className={cn("block absolute top-0 inset-x-0", styles.className3)}>
            <img className={cn("w-full block overflow-clip", styles.className4)} data-component="image" alt="" height={d.height} src={d.imgSrc} width={d.width} sizes={d.sizes} srcSet={d.srcSet} />
          </div>
        </div>
      </div>
    </div>
  );
}
