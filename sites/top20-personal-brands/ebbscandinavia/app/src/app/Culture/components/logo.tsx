import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  id: string;
  sizes: string;
  imgSrc: string;
  srcSet: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("block absolute shrink-0", styles.className)} id={d.id}>
      <div className="h-full block relative cursor-pointer">
        <div className="h-full block absolute top-0 inset-x-0 shrink-0">
          <div className="h-full block absolute top-0 inset-x-0">
            <img className={cn("w-full block overflow-clip object-cover aspect-[auto_3937/5512]", styles.className2)} data-component="image" alt="" height="5512" sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width="3937" />
          </div>
        </div>
      </div>
    </div>
  );
}
