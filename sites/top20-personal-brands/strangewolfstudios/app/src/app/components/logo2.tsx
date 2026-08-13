import type { Logo2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo2Data = {
  sizes: string;
  imgSrc: string;
  srcSet: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className="contents min-w-0">
      <div className={cn("w-full h-full block relative rounded-[45px] [align-self:start] shrink-0 overflow-hidden max-lg:order-[initial] 2xl:order-[initial]", styles.className)} name="CARD 01">
        <div className="h-full block absolute top-0 inset-x-0 rounded-[45px]">
          <img className="w-full h-75 block rounded-[45px] overflow-clip object-cover" data-component="image" alt="" sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} />
        </div>
      </div>
    </div>
  );
}
