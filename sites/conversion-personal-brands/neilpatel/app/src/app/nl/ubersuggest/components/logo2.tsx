import type { Logo2Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type Logo2Data = {
  alt: string;
  height: string;
  imgSrc: string;
  width: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <li className="flex justify-center items-center shrink-0">
      <img className={cn("block overflow-clip", styles.className)} data-component="image" alt={d.alt} height={d.height} src={d.imgSrc} width={d.width} />
    </li>
  );
}
