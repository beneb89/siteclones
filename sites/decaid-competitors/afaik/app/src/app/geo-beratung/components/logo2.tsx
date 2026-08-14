import type { Logo2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo2Data = {
  alt: string;
  height: string;
  imgSrc: string;
  width: string;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <figure className={cn("w-[9.4375rem] flex relative max-w-full flex-col justify-center grow max-md:w-[141.5px] md:max-lg:w-[9.725rem]", styles.className)}>
      <img className={cn("w-[9.4375rem] block max-w-full rounded-md overflow-clip align-bottom max-md:w-35.5 md:max-lg:w-39", styles.className2)} data-component="image" alt={d.alt} height={d.height} src={d.imgSrc} width={d.width} />
    </figure>
  );
}
