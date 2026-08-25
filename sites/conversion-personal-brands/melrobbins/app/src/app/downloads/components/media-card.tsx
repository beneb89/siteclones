import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  imgSrc: string;
  text: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <div className="grid relative py-[1.075rem] gap-[1.325rem] grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_auto] max-md:py-[12.3px] max-md:gap-[16.3px] max-md:grid-cols-1 md:max-lg:py-[0.9rem] md:max-lg:gap-[1.15rem] md:max-lg:grid-cols-12 2xl:py-5 2xl:gap-6">
        <div className="block shrink-0 order-[1] col-start-6 col-end-[span_3] max-md:col-start-[span_1] max-md:col-end-[span_1] max-md:order-[initial] md:max-lg:col-start-10">
          <figure className="block relative rounded-[17.2px] overflow-hidden max-md:rounded-xl md:max-lg:rounded-[14.4px] 2xl:rounded-[20px]">
            <img className={cn("w-full block max-w-full overflow-clip align-middle", styles.className2)} data-component="image" alt="" src={d.imgSrc} />
          </figure>
        </div>
        <span className="block mt-0.5 col-start-[span_1] col-end-[span_1] text-[0.8125rem] leading-[1rem] tracking-[0.32px] uppercase max-md:text-[0.6875rem] max-md:leading-3.5 max-md:tracking-[0.28px] max-md:mt-0 max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] md:max-lg:col-start-[span_2] md:max-lg:col-end-[span_2] md:max-lg:text-xs md:max-lg:leading-[0.9375rem] md:max-lg:tracking-[0.3px] 2xl:text-sm 2xl:leading-[1.125rem] 2xl:tracking-[0.35px]">
          {d.text}
        </span>
        <div className="block col-start-[span_4] col-end-[span_4] max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] md:max-lg:col-start-[span_7] md:max-lg:col-end-[span_7]">
          <h3 className="block text-[1.3125rem] font-semibold leading-[1.75rem] max-md:text-base max-md:leading-[1.3125rem] md:max-lg:text-lg md:max-lg:leading-6 2xl:text-2xl 2xl:leading-[1.9375rem]" data-component="heading">
            <button className={cn("inline-block text-left cursor-pointer before:content-[''] before:block before:absolute before:inset-0 before:z-1 before:w-[43.8125rem] max-md:before:w-[21.3125rem] md:max-lg:before:w-[45.0875rem] 2xl:before:w-[988.7px]", styles.className3)} data-component="button">
              {d.title}
            </button>
          </h3>
          <p className="block mt-2 text-muted text-[1.0625rem] leading-[1.6875rem] max-md:text-base max-md:leading-[1.5rem] md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-7">
            {d.description}
          </p>
          <p className="block mt-6">
            <button className="w-[8.4625rem] border border-solid border-foreground inline-block pt-[1.1rem] pb-4 px-7 rounded-xl text-xs font-semibold leading-4 tracking-[0.3px] text-center uppercase bg-primary cursor-pointer" data-component="button">
              Download
            </button>
          </p>
        </div>
      </div>
    </li>
  );
}
