import type { Logo4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo4Data = {
  imgSrc: string;
  srcSet: string;
  width: string;
};
/** A logo. */
export default function Logo4({ d, styles }: { d: Logo4Data; styles: Logo4Styles }) {
  return (
    <li className="list-item" aria-hidden="true">
      <div className={cn("w-37.5 block relative [mix-blend-mode:multiply] shrink-0", styles.className)}>
        <div className="w-37.5 h-full block absolute top-0">
          <img className={cn("w-full h-37.5 block overflow-clip", styles.className2)} alt="" height="485" sizes="150px" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
        </div>
      </div>
    </li>
  );
}
