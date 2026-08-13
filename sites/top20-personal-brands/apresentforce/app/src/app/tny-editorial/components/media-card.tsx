import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  imgSrc: string;
  title: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className={cn("w-full flex relative rounded-3xl justify-center items-center content-center [align-self:start] shrink-0 gap-2.5 overflow-hidden aspect-[0.985591/1] max-lg:rounded-[initial]", styles.className)}>
      <div className="contents min-w-0">
        <div className="h-full block relative shrink-0 aspect-square">
          <div className="h-full block absolute top-0 inset-x-0">
            <img className="w-full h-[38.3125rem] block overflow-clip object-cover aspect-[auto_2160/2160] max-md:h-95 md:max-lg:h-[48.6875rem] 2xl:h-200" data-component="image" alt="" height="2160" src={d.imgSrc} width="2160" />
          </div>
          <div className={cn("h-[1.1375rem] flex absolute top-6 left-6 flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:h-[0.7rem]", styles.className2)}>
            <h5 className={cn("h-full block [font-family:'Neue_Haas_Unica_Pro_Regular',_'Neue_Haas_Unica_Pro_Regular_Placeholder',_sans-serif] text-[0.8125rem] leading-[1.125rem] tracking-[1.4px] uppercase max-lg:text-[0.5rem] max-lg:leading-[0.6875rem]", styles.className3)} data-component="heading">
              {d.title}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
