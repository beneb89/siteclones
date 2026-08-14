import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  label: string;
  alt: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="flex justify-center items-center h-14 w-full" title={d.label}>
      <img className={cn("block opacity-80 max-w-full max-h-12 overflow-clip object-contain align-middle text-clr-0 [filter:grayscale(1)]", styles.className)} data-component="image" alt={d.alt} height={d.height} sizes="(min-width: 1024px) 160px, (min-width: 768px) 22vw, 30vw" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
    </div>
  );
}
