import type { MediaTile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile3Data = {
  alt: string;
  imgSrc: string;
  srcSet: string;
  description: string;
  description2: string;
};
/** A media tile. */
export default function MediaTile3({ d, styles }: { d: MediaTile3Data; styles: MediaTile3Styles }) {
  return (
    <div className={cn("w-[174.5px] block relative min-w-0 mr-2.5 shrink-0 max-md:w-[162.5px]", styles.className)}>
      <div className={cn("flex flex-col items-center text-center", styles.className2)}>
        <div className="block relative min-w-0 mb-4 rounded-full overflow-hidden h-16 w-16">
          <img className="w-full block absolute top-0 left-0 max-w-full overflow-clip object-cover aspect-[auto_128/128] align-middle text-clr-0 h-full" alt={d.alt} height="128" sizes="64px" src={d.imgSrc} srcSet={d.srcSet} width="128" />
        </div>
        <p className="block min-w-0 font-bold">
          {d.description}
        </p>
        <p className="block opacity-70 min-w-0 text-sm leading-[1.375rem] max-lg:leading-[1.3125rem]">
          {d.description2}
        </p>
      </div>
    </div>
  );
}
