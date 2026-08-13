import type { Logo2Styles } from "../_styles";
import { cn } from "../../lib/utils";
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
    <li className={cn("list-item 2xl:hidden", styles.className)}>
      <div className={cn("block relative shrink-0 2xl:hidden", styles.className2)}>
        <div className={cn("block relative 2xl:hidden", styles.className3)}>
          <div className={cn("h-full block absolute top-0 shrink-0 2xl:hidden", styles.className4)}>
            <div className={cn("h-full block absolute top-0 2xl:hidden", styles.className5)}>
              <img className={cn("w-full block overflow-clip object-cover 2xl:hidden", styles.className6)} data-component="image" alt="" height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
