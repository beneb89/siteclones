import type { Logo4Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type Logo4Data = {
  href: string;
  alt: string;
  height: string;
  imgSrc: string;
  width: string;
};
/** A logo. */
export default function Logo4({ d, styles }: { d: Logo4Data; styles: Logo4Styles }) {
  return (
    <li className="list-item">
      <a className="inline cursor-pointer" data-component="link" href={d.href} rel="noopener" target="_blank">
        <img className={cn("w-[1.1875rem] block opacity-70 max-w-full overflow-clip", styles.className)} data-component="image" alt={d.alt} height={d.height} src={d.imgSrc} width={d.width} />
      </a>
    </li>
  );
}
