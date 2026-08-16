import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  alt: string;
  imgSrc: string;
  title: string;
  description: string;
  href: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className={cn("min-h-[9.9375rem] border-b border-solid border-b-surface-3 flex relative mb-5 py-5 rounded-[10px] items-start self-stretch shrink-0 gap-[1.5625rem] bg-surface max-lg:h-[9.9375rem] max-lg:max-w-[20.9375rem] max-lg:border-b-[0] max-lg:border-initial max-lg:border-b-[initial]", styles.className)}>
      <div className="box-content flex flex-wrap max-lg:[flex-wrap:initial]">
        <div className="w-16 h-16 block relative max-w-[35%] rounded-lg shrink-0 overflow-hidden max-lg:box-content max-lg:pt-[8.975rem] max-lg:max-w-none">
          <img className="box-content w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-contain align-bottom" data-component="image" alt={d.alt} src={d.imgSrc} />
        </div>
        <div className={cn("min-h-[7.4375rem] flex max-w-[65%] ml-[0.9375rem] flex-col justify-center items-start flex-1 order-[1] gap-2.5 max-lg:box-content max-lg:h-[12.975rem] max-lg:max-w-none", styles.className2)}>
          <h2 className={cn("box-content block self-stretch shrink-0 align-middle [font-family:Ryker,_sans-serif] text-lg font-medium leading-6 max-lg:min-h-18 max-lg:flex max-lg:max-w-[18.4375rem] max-lg:items-center max-md:text-base max-md:leading-5.5", styles.className3)} data-component="heading">
            {d.title}
          </h2>
          <p className="box-content max-h-10 self-stretch shrink-0 overflow-hidden font-medium leading-5 line-clamp-2 max-lg:max-w-[18.4375rem] max-lg:flex-col max-lg:items-start max-lg:gap-2.5 max-lg:text-[0.875rem]">
            {d.description}
          </p>
          <a className="box-content flex items-center shrink-0 order-[1] leading-5 text-center underline cursor-pointer max-lg:text-[0.875rem]" data-component="link" href={d.href}>
            {" Lesen Sie mehr"}
          </a>
        </div>
      </div>
    </div>
  );
}
