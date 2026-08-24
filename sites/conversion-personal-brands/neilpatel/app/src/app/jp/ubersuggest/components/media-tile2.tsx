import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type MediaTile2Data = {
  alt: string;
  imgSrc: string;
  description: string;
  description2: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <li className={cn("w-full flex p-8 rounded-3xl flex-col gap-2.5 bg-surface-7 max-md:p-5 max-md:rounded-[15px]", styles.className)}>
      <img className="w-13 h-[3.3125rem] block max-w-full overflow-clip aspect-[auto_52/52]" data-component="image" alt={d.alt} height="52" src={d.imgSrc} width="52" />
      {" "}
      <p className={cn("w-59 block text-2xl font-medium leading-8.5 max-md:w-[19.6875rem] max-md:[font-size:inherit] max-md:leading-[inherit] 2xl:w-[15.0625rem]", styles.className2)}>
        {d.description}
      </p>
      {" "}
      <p className={cn("w-59 block text-color-017 [font-family:Roboto,_Arial,_Helvetica,_sans-serif] text-base leading-[1.6875rem] max-md:w-[19.6875rem] 2xl:w-[15.0625rem]", styles.className3)}>
        {d.description2}
      </p>
      {" "}
    </li>
  );
}
