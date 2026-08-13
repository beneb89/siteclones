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
    <div className={cn("w-full h-150 flex relative rounded-3xl justify-center items-center content-center [align-self:start] shrink-0 gap-2.5 overflow-hidden", styles.className)} name="grid item">
      <div className="contents min-w-0">
        <div className={cn("block relative shrink-0 overflow-hidden", styles.className2)}>
          <div className="h-full block absolute top-0 inset-x-0">
            <img className={cn("w-full block overflow-clip object-cover", styles.className3)} data-component="image" alt="" height={d.height} src={d.imgSrc} width={d.width} sizes={d.sizes} srcSet={d.srcSet} />
          </div>
        </div>
      </div>
    </div>
  );
}
