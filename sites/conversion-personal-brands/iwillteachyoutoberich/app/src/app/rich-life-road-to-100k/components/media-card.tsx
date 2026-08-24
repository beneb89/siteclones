import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  height: string;
  sizes: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  title: string;
  text: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className={cn("w-[32%] h-114 min-h-px flex relative rounded-[14px] overflow-hidden [animation-name:fadeInUp] [animation-duration:2s] max-md:w-full md:max-lg:w-[31.5%] md:max-lg:h-[469.5px]", styles.className)}>
      <div className="border border-solid border-color-003 flex relative rounded-[14px] flex-wrap content-start bg-background">
        <div className="block relative max-h-[15.1875rem] overflow-hidden text-center max-lg:aspect-[4/3] max-lg:max-h-none">
          <div className="block">
            <img className={cn("w-[20.4375rem] h-[20.4375rem] inline-block max-w-full rounded-tl-[14px] rounded-tr-[14px] overflow-clip align-middle max-md:w-[20.3125rem] max-md:h-[20.3125rem] md:max-lg:w-[13.9375rem] md:max-lg:h-[13.9375rem]", styles.className2)} data-component="image" alt="" height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="block relative">
          <div className="block mb-2 pt-5.5 px-5.5">
            <h4 className="block text-[1.1875rem] font-semibold leading-5 [overflow-wrap:break-word]" data-component="heading">
              {d.title}
            </h4>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="block relative text-muted text-[0.9375rem] leading-[1.4375rem]">
          <div className="h-full block pb-6.5 px-5.5">
            {d.text}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
