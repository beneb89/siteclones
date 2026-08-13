import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  kind?: string;
  height: string;
  sizes: string;
  imgSrc: string;
  srcSet: string;
  width: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <div className={cn("block relative shrink-0", styles.className2)}>
        <div className={cn("block relative cursor-pointer", styles.className3)}>
          <div className={cn("h-full block absolute top-0 shrink-0", styles.className4)}>
            <div className={cn("h-full block absolute top-0", styles.className5)}>
              <img className={cn("w-full block overflow-clip object-cover", styles.className6)} data-component={d.kind} alt="" height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
