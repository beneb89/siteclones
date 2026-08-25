import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCardData = {
  href: string;
  imgSrc: string;
  title: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <li className="list-item text-muted">
      <a className="h-[6.8125rem] flex p-5 rounded-xl flex-col justify-end items-center gap-[0.825rem] text-center bg-surface cursor-pointer max-md:h-[83.7px] max-md:p-[12.5px] max-md:gap-[8.3px] md:max-lg:h-[5.9125rem] md:max-lg:p-[15.7px] md:max-lg:gap-[0.65rem] 2xl:h-[123.5px] 2xl:p-6 2xl:gap-4" data-component="link" href={d.href}>
        {" "}
        <div className="w-[37.1px] h-[37.1px] flex p-2 rounded-full justify-center items-center shrink-0 bg-primary max-md:w-[32.3px] max-md:h-[32.3px] md:max-lg:w-[2.15rem] md:max-lg:h-[2.15rem] 2xl:w-10 2xl:h-10">
          <img className={cn("w-[1.3125rem] block max-w-full overflow-clip align-middle max-md:w-4 md:max-lg:w-4.5", styles.className)} data-component="image" alt="" src={d.imgSrc} />
          {" "}
        </div>
        {" "}
        <h3 className="block text-foreground text-[0.9375rem] font-semibold leading-[1.1875rem] tracking-[0.37px] uppercase max-lg:text-sm max-md:leading-[1.125rem] max-md:tracking-[0.35px] md:max-lg:tracking-[0.36px] 2xl:leading-[1.25rem] 2xl:tracking-[0.38px]" data-component="heading">
          {d.title}
        </h3>
        {" "}
      </a>
      {" "}
    </li>
  );
}
