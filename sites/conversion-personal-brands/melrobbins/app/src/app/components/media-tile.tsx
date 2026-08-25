import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTileData = {
  description: string;
  alt: string;
  imgSrc: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <li className={cn("w-98 block relative shrink-0", styles.className)}>
      <p className={cn("block font-semibold", styles.className2)}>
        {d.description}
      </p>
      {" "}
      <p className={cn("block mt-[26.3px] max-md:mt-[16.5px] md:max-lg:mt-[1.3rem] 2xl:mt-8", styles.className3)}>
        <img className={cn("w-full inline-block max-h-8 overflow-clip align-middle max-w-full", styles.className4)} data-component="image" alt={d.alt} src={d.imgSrc} />
        {" "}
      </p>
      {" "}
    </li>
  );
}
