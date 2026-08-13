import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  ariahidden: string;
  ariaLabel: string;
  id: string;
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
    <li className="list-item shrink-0" aria-hidden={d.ariahidden} aria-label={d.ariaLabel}>
      <div className={cn("block relative transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,-0.000833333,0,0,0,1)]", styles.className)} id={d.id}>
        <div className={cn("block relative cursor-pointer", styles.className2)}>
          <div className={cn("h-full block absolute top-0 shrink-0", styles.className3)}>
            <div className={cn("h-full block absolute top-0", styles.className4)}>
              <img className={cn("w-full block overflow-clip object-cover", styles.className5)} data-component={d.kind} alt="" height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
