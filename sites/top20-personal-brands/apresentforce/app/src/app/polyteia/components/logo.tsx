import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  height: string;
  imgSrc: string;
  width: string;
  sizes?: string;
  srcSet?: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("w-full flex relative rounded-3xl justify-center items-center content-center [align-self:start] shrink-0 gap-2.5 col-start-[span_2] overflow-hidden bg-color-013 max-lg:col-start-[span_1]", styles.className)}>
      <div className={cn("basis-full shrink-0 flex relative flex-col justify-center items-center content-center gap-2.5 bg-color-020", styles.className2)}>
        <div className="contents min-w-0">
          <div className={cn("relative shrink-0", styles.className3)}>
            <div className={cn("h-full block absolute top-0 inset-x-0", styles.className4)}>
              <img className={cn("w-full block overflow-clip object-cover", styles.className5)} data-component="image" alt="" height={d.height} src={d.imgSrc} width={d.width} sizes={d.sizes} srcSet={d.srcSet} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
