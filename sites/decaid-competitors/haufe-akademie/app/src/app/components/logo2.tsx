import type { Logo2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo2Data = {
  alt: string;
  imgSrc: string;
  width: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className="block">
      <img className={cn("h-14 inline overflow-clip align-middle 2xl:invisible 2xl:opacity-0 2xl:aspect-[initial]", styles.className)} data-component="image" alt={d.alt} height="56" src={d.imgSrc} width={d.width} />
    </div>
  );
}
