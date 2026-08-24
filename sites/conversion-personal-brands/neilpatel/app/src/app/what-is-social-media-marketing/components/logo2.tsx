import type { Logo2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo2Data = {
  href: string;
  alt: string;
  height: string;
  imgSrc: string;
  width: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <li className="list-item">
      <a className="inline cursor-pointer" data-component="link" href={d.href} rel="noopener" target="_blank">
        <img className={cn("w-[1.1875rem] block opacity-70 max-w-full overflow-clip", styles.className)} data-component="image" alt={d.alt} height={d.height} src={d.imgSrc} width={d.width} />
      </a>
    </li>
  );
}
