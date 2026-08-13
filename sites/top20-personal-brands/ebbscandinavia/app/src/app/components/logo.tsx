import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  height: string;
  sizes: string;
  imgSrc: string;
  srcSet: string;
  width: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <li className={cn("hidden 2xl:list-item", styles.className)}>
      <div className={cn("hidden 2xl:block 2xl:relative 2xl:shrink-0", styles.className2)}>
        <div className={cn("hidden 2xl:block 2xl:relative", styles.className3)}>
          <div className={cn("hidden 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:shrink-0", styles.className4)}>
            <div className={cn("hidden 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0", styles.className5)}>
              <img className={cn("hidden 2xl:w-full 2xl:block 2xl:overflow-clip 2xl:object-cover", styles.className6)} alt="" height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
