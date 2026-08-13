import type { Logo3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo3Data = {
  href: string;
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo3({ d, styles }: { d: Logo3Data; styles: Logo3Styles }) {
  return (
    <li className="list-item px-2 [list-style-type:none]">
      <a className="w-[3.0625rem] h-[3.0625rem] flex rounded-[50%] justify-center items-center text-primary bg-color-002 cursor-pointer" data-component="link" href={d.href} rel="nofollow">
        <img className={cn("block max-w-full overflow-clip", styles.className)} data-component="image" alt={d.alt} src={d.imgSrc} />
      </a>
    </li>
  );
}
