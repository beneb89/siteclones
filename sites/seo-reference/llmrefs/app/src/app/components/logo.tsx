import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  alt: string;
  imgSrc: string;
  srcSet: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <img className={cn("box-content w-7 h-7 border-2 border-solid border-background block max-w-full rounded-full overflow-clip aspect-[auto_32/32] align-middle text-clr-1", styles.className)} data-component="image" alt={d.alt} height="32" src={d.imgSrc} srcSet={d.srcSet} width="32" />
  );
}
