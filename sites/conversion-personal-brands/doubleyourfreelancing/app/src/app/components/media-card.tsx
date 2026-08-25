import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCardData = {
  imgSrc: string;
  title: string;
  href: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className="w-[17.1875rem] block min-w-0 max-w-[25%] max-h-[1e+06px] p-[0.9375rem] shrink-0 basis-1/4 max-md:w-[22.8125rem] max-md:max-w-full max-md:basis-full md:max-lg:w-[252.7px] md:max-lg:max-w-[33.3333%] md:max-lg:basis-1/3 2xl:hidden">
      <div className="h-full block relative max-h-[1e+06px] rounded-lg overflow-hidden text-center bg-background shadow-[var(--clr-9)_5px_34px_46px_0px] 2xl:hidden">
        <div className={cn("h-21 min-h-21 flex max-h-[1e+06px] p-[0.9375rem] justify-center items-center 2xl:hidden", styles.className)}>
          <img className={cn("block max-w-full max-h-[1e+06px] overflow-clip align-top 2xl:hidden", styles.className2)} data-component="image" src={d.imgSrc} />
          {" "}
        </div>
        {" "}
        <div className="block max-h-[1e+06px] py-3.5 px-6.5 2xl:hidden">
          <h6 className="block max-h-[1e+06px] mb-[0.9rem] font-medium leading-7 max-lg:mb-[0.8rem] max-lg:text-base max-lg:leading-[1.5625rem] 2xl:hidden" data-component="heading">
            {d.title}
          </h6>
          {" "}
        </div>
        {" "}
        <a className="h-full block absolute top-0 inset-x-0 max-h-[1e+06px] text-primary cursor-pointer 2xl:hidden" data-component="link" href={d.href} />
        {" "}
      </div>
      {" "}
    </div>
  );
}
