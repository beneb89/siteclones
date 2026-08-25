import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  href: string;
  alt: string;
  sizes: string;
  imgSrc: string;
  srcSet: string;
  label: string;
  title: string;
  title2: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <li className={cn("list-item text-muted", styles.className)}>
      <a className="grid relative py-[1.075rem] gap-[1.325rem] cursor-pointer grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_auto] max-md:py-[12.3px] max-md:gap-[16.3px] max-md:grid-cols-1 md:max-lg:py-[0.9rem] md:max-lg:gap-[1.15rem] md:max-lg:grid-cols-12 2xl:py-5 2xl:gap-6" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
        {" "}
        <div className="block shrink-0 order-[1] col-start-6 col-end-[span_3] max-md:col-start-[span_1] max-md:col-end-[span_1] max-md:order-[initial] md:max-lg:col-start-10">
          <figure className={cn("block relative rounded-[17.2px] overflow-hidden max-md:rounded-xl md:max-lg:rounded-[14.4px] 2xl:rounded-[20px]", styles.className2)}>
            <div className="block relative w-full h-auto">
              <span className="block w-full" />
              {" "}
              <img className="w-50 h-50 block max-w-full overflow-clip object-cover object-[50%_0%] align-middle max-md:w-[21.3125rem] max-md:h-[21.3125rem] md:max-lg:w-[10.4375rem] md:max-lg:h-[10.4375rem] 2xl:w-70.5 2xl:h-70.5" data-component="image" alt={d.alt} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} />
              {" "}
            </div>
            {" "}
          </figure>
          {" "}
        </div>
        {" "}
        <span className="block mt-0.5 col-start-[span_1] col-end-[span_1] text-[0.8125rem] leading-[1rem] tracking-[0.32px] uppercase max-md:text-[0.6875rem] max-md:leading-3.5 max-md:tracking-[0.28px] max-md:mt-0 max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] md:max-lg:col-start-[span_2] md:max-lg:col-end-[span_2] md:max-lg:text-xs md:max-lg:leading-[0.9375rem] md:max-lg:tracking-[0.3px] 2xl:text-sm 2xl:leading-[1.125rem] 2xl:tracking-[0.35px]">
          {d.label}
        </span>
        {" "}
        <div className="block col-start-[span_4] col-end-[span_4] max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] md:max-lg:col-start-[span_7] md:max-lg:col-end-[span_7]">
          <h3 className="block text-[1.3125rem] font-semibold leading-[1.75rem] max-md:text-base max-md:leading-[1.3125rem] md:max-lg:text-lg md:max-lg:leading-6 2xl:text-2xl 2xl:leading-[1.9375rem]" data-component="heading">
            {d.title}
          </h3>
          {" "}
          <h4 className="block mt-2 text-[1.0625rem] leading-[1.6875rem] max-md:text-base max-md:leading-[1.5rem] md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-7" data-component="heading">
            <strong className="inline font-bold">
              {d.title2}
            </strong>
          </h4>
          {" "}
          <p className="block mt-2 text-[1.0625rem] leading-[1.6875rem] max-md:text-base max-md:leading-[1.5rem] md:max-lg:leading-[1.5625rem] 2xl:text-lg 2xl:leading-7">
            {d.description}
          </p>
          {" "}
        </div>
        {" "}
      </a>
      {" "}
    </li>
  );
}
