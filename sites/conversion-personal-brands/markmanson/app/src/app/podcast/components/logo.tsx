import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  href: string;
  label: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <a className={cn("h-15 block py-[0.8125rem] px-5 rounded-[30px] text-center cursor-pointer max-md:w-[20.4375rem] max-md:bg-clr-1", styles.className)} data-component="link" href={d.href} rel="noopener" target="_blank" title={d.label}>
      <img className={cn("h-8.5 inline max-w-full overflow-clip", styles.className2)} data-component="image" src={d.imgSrc} />
    </a>
  );
}
