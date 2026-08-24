import type { Logo2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo2Data = {
  ariaLabel: string;
  href: string;
  alt: string;
  height: string;
  width: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <a className={cn("flex justify-center items-center cursor-pointer max-md:block", styles.className)} data-component="link" aria-label={d.ariaLabel} href={d.href} rel="noreferrer" target="_blank">
      <img className={cn("w-full block max-w-full overflow-clip object-contain align-middle text-clr-1 max-md:mb-[0.9375rem]", styles.className2)} data-component="image" alt={d.alt} height={d.height} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width={d.width} />
    </a>
  );
}
