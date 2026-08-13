import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
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
    <div className="contents min-w-0">
      <div className={cn("block absolute z-2 shrink-0 transform-[matrix3d(0.987078,0,-0.16024,0.000320481,0,1,0,0,0.16024,0,0.987078,-0.00197416,0,0,0,1)] max-md:transform-[matrix3d(0.999998,0,-0.00196892,3.93784e-06,0,1,0,0,0.00196892,0,0.999998,-0.002,0,0,0,1)] md:max-lg:transform-[matrix3d(1,0,-0.000890574,1.78115e-06,0,1,0,0,0.000890574,0,1,-0.002,0,0,0,1)]", styles.className)}>
        <div className="h-full block absolute top-0 inset-x-0">
          <img className={cn("w-full block overflow-clip object-cover", styles.className2)} data-component="image" alt="" height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
        </div>
      </div>
    </div>
  );
}
