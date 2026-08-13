import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  height: string;
  sizes: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  kind?: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <li className="contents min-w-0" aria-hidden="true">
      <div className={cn("w-320 h-full block relative shrink-0 max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-480", styles.className)}>
        <div className={cn("w-320 h-full block absolute top-0", styles.className2)}>
          <img className={cn("w-full h-180 block overflow-clip object-cover max-md:h-101.5 md:max-lg:h-128 2xl:h-243", styles.className3)} alt="" height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width={d.width} data-component={d.kind} />
        </div>
      </div>
    </li>
  );
}
