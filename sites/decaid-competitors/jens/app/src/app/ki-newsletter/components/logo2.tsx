import type { Logo2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo2Data = {
  alt: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <li className={cn("border border-solid border-border list-item mb-5 rounded-[14px] overflow-hidden bg-surface shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-2)_0px_1px_2px_0px]", styles.className)}>
      <img className={cn("w-full block max-w-full overflow-clip align-middle text-clr-0", styles.className2)} data-component="image" alt={d.alt} height={d.height} sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
    </li>
  );
}
