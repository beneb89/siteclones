import type { Logo3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo3Data = {
  alt: string;
  height: string;
  imgSrc: string;
  width: string;
};
/** A logo. */
export default function Logo3({ d, styles }: { d: Logo3Data; styles: Logo3Styles }) {
  return (
    <li className="flex justify-center items-center shrink-0">
      <img className={cn("block min-w-0 overflow-clip", styles.className)} alt={d.alt} height={d.height} src={d.imgSrc} width={d.width} />
    </li>
  );
}
