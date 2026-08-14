import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type MediaCardData = {
  title: string;
  title2: string;
  title3: string;
  imgSrc: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <li className="block align-top">
      <div className={cn("block relative -mb-px mx-[1.5625rem] py-[1.5625rem] overflow-hidden 2xl:mx-7.5 2xl:py-7.5", styles.className)}>
        <article className="block">
          <div className="block mb-[1.5625rem] 2xl:mb-7.5">
            <h4 className="block mb-1 text-xs leading-[0.9375rem] tracking-[0.3px] [word-break:break-word] [overflow-wrap:break-word] 2xl:mb-[0.3125rem] 2xl:text-sm 2xl:leading-4.5 2xl:tracking-[0.36px]" data-component="heading">
              <span className="inline">
                {d.title}
              </span>
              {" / "}
              <span className="inline">
                {d.title2}
              </span>
            </h4>
            {" "}
            <h3 className="block mb-[0.525rem] text-primary text-2xl leading-7 tracking-[0.6px] [word-break:break-word] [overflow-wrap:break-word] 2xl:mb-2.5 2xl:text-[1.8125rem] 2xl:leading-[2.125rem] 2xl:tracking-[0.72px]" data-component="heading">
              <a className="inline underline cursor-pointer" data-component="link" href="/de/Ueber-uns/institutsleitung/MartinDix.html">
                {d.title3}
              </a>
            </h3>
            {" "}
          </div>
          {" "}
          <figure className="w-[16.6875rem] block float-left max-w-75 mr-[1.5625rem] pr-[1.5625rem] leading-0 max-md:w-[17.0625rem] max-md:mb-[1.5625rem] max-md:[float:initial] max-md:mr-0 max-md:pr-0 md:max-lg:w-75 2xl:w-90 2xl:max-w-90 2xl:mr-7.5 2xl:pr-7.5">
            <img className={cn("w-60.5 inline overflow-clip max-md:w-[17.0625rem] md:max-lg:w-[17.1875rem] 2xl:w-82.5", styles.className2)} data-component="image" alt="" src={d.imgSrc} />
            {" "}
            <figcaption className="block mt-3 text-xs leading-[0.9375rem] tracking-[0.3px] 2xl:mt-[0.9rem] 2xl:text-sm 2xl:leading-4.5 2xl:tracking-[0.36px]">
              <span className="block -mt-1.5 mb-1.5 text-muted-foreground 2xl:-mt-[0.45rem] 2xl:mb-[0.45rem]" />
              {" "}
            </figcaption>
            {" "}
          </figure>
          {" "}
          <div className="block mb-2.5 overflow-hidden text-[0.875rem] 2xl:mb-3 2xl:text-[1.0625rem]">
            <p className="block mb-[0.3125rem] leading-5.5 2xl:mb-1.5 2xl:leading-[1.625rem]">
              {d.description}
            </p>
            {" "}
            <a className="border border-solid border-primary inline-block min-w-35 mt-[0.9375rem] p-2.5 text-primary text-xs font-normal leading-[0.9375rem] tracking-[0.9px] text-center uppercase [word-break:break-word] [overflow-wrap:break-word] cursor-pointer max-md:mr-px 2xl:min-w-42 2xl:mt-4.5 2xl:p-3 2xl:text-sm 2xl:leading-4.5 2xl:tracking-[1.08px]" data-component="button" href="/de/Ueber-uns/institutsleitung/MartinDix.html">
              mehr Info
            </a>
          </div>
          {" "}
        </article>
        {" "}
      </div>
      {" "}
    </li>
  );
}
