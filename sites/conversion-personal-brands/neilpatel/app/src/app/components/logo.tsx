import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  alt: string;
  height: string;
  imgSrc: string;
  width: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <li className="flex items-center">
      <img className={cn("block max-w-full overflow-clip", styles.className)} data-component="image" alt={d.alt} height={d.height} src={d.imgSrc} width={d.width} />
    </li>
  );
}
