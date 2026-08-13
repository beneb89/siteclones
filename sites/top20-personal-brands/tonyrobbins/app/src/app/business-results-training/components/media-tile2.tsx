import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile2Data = {
  alt: string;
  imgSrc: string;
  srcSet: string;
  description: string;
  description2: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className="block">
      <div className={cn("flex flex-col items-center text-center", styles.className)}>
        <div className="block relative mb-4 rounded-full overflow-hidden h-16 w-16">
          <img className="w-full block absolute top-0 left-0 max-w-full overflow-clip object-cover aspect-[auto_128/128] align-middle text-clr-0 h-full" data-component="image" alt={d.alt} height="128" sizes="64px" src={d.imgSrc} srcSet={d.srcSet} width="128" />
        </div>
        <p className="block font-bold">
          {d.description}
        </p>
        <p className="block opacity-70 text-sm leading-[1.375rem] whitespace-nowrap 2xl:text-[0.9375rem] 2xl:leading-[1.4375rem]">
          {d.description2}
        </p>
      </div>
    </div>
  );
}
