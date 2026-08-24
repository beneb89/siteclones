import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  href: string;
  alt: string;
  height: string;
  imgSrc: string;
  width: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <li className="list-item my-7.5 mx-auto max-md:my-[0.9375rem]">
      <a className="block text-color-001 cursor-pointer" data-component="link" href={d.href} rel="noopener" target="_blank">
        <img className={cn("w-[1.0625rem] h-[1.1875rem] block max-w-full overflow-clip [filter:invert(1)]", styles.className)} data-component="image" alt={d.alt} height={d.height} src={d.imgSrc} width={d.width} />
      </a>
    </li>
  );
}
