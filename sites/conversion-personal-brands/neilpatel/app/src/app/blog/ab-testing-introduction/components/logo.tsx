import type { LogoStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type LogoData = {
  href: string;
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <a className={cn("block text-primary [filter:brightness(0)_saturate(1)_invert(0.6)_sepia(0.06)_saturate(0.81)_hue-rotate(201deg)_brightness(0.96)_contrast(0.86)] cursor-pointer", styles.className)} data-component="link" href={d.href} rel="noopener" target="_blank">
      <img className={cn("w-4.5 block max-w-full overflow-clip aspect-[auto_18/21]", styles.className2)} data-component="image" alt={d.alt} height="21" src={d.imgSrc} width="18" />
    </a>
  );
}
