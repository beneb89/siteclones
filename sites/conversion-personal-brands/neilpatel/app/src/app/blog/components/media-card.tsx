import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  ariadescribedby: string;
  ariahidden: string;
  id: string;
  href: string;
  title: string;
  title2: string;
  title3: string;
  title4: string;
  label: string;
  alt: string;
  height: string;
  imgSrc: string;
  width: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className={cn("w-308.5 min-h-px block relative float-left", styles.className)} aria-describedby={d.ariadescribedby} aria-hidden={d.ariahidden} id={d.id} role="tabpanel">
      <a className="block cursor-pointer" data-component="link" href={d.href} rel="noopener" target="_blank">
        {" "}
        <article className={cn("w-full h-95 flex relative m-[0.3125rem] rounded-xl shadow-[var(--color-015)_0px_2px_8px_0px] max-lg:flex-col md:max-lg:h-[682.5px]", styles.className2)}>
          <span className="w-37.5 h-6.5 block absolute top-2.5 -left-10.5 z-10 min-w-0 overflow-hidden text-background text-[0.6875rem] font-bold italic leading-6.5 text-center uppercase whitespace-nowrap -indent-4.5 text-nowrap bg-primary shadow-[var(--surface-6)_-108.358px_0px_50px_0px_inset] [animation-name:shimmer] [animation-duration:4s] [animation-timing-function:ease-in-out] [animation-delay:1s] [animation-iteration-count:infinite] max-md:shadow-[var(--surface-13)_32.9097px_0px_50px_0px_inset] md:max-lg:shadow-[var(--surface-13)_-31.5965px_0px_50px_0px_inset] 2xl:shadow-[var(--clr-13)_-121.806px_0px_50px_0px_inset] before:content-[''] before:block before:absolute before:top-[1.4375rem] before:right-35 before:bottom-0 before:left-[0.3125rem] before:w-[0.3125rem] before:h-[0.3125rem] before:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] before:origin-[2.5px_2.5px] after:content-[''] after:block after:absolute after:top-[1.4375rem] after:right-4.5 after:bottom-0 after:left-[7.9375rem] after:w-[0.3125rem] after:h-[0.3125rem] after:transform-[matrix(0.707107,-0.707107,0.707107,0.707107,0,0)] after:origin-[2.5px_2.5px]">
            Promotion
          </span>
          {" "}
          <div className="flex relative max-w-[42%] py-10 pl-10 rounded-tl-xl rounded-bl-xl flex-col justify-center shrink-0 basis-[42%] max-lg:pt-12.5 max-lg:pb-4.5 max-lg:px-4.5 max-lg:rounded-tr-xl max-lg:grow max-lg:overflow-hidden max-lg:max-w-none max-lg:rounded-bl-[initial] max-lg:shrink-[initial] max-lg:basis-[initial]">
            <h2 className="block mb-2 text-color-003 text-[1.375rem] font-bold leading-[1.9375rem] max-md:text-lg max-md:leading-[1.625rem]" data-component="heading">
              <span className="inline text-primary">
                <small className="inline text-base leading-[1.375rem] max-md:text-[0.8125rem] max-md:leading-[1.125rem]">
                  ON STAGE
                </small>
              </span>
              {" "}
              <span className="inline text-color-011">
                <small className="inline text-base leading-[1.375rem] max-md:text-[0.8125rem] max-md:leading-[1.125rem]">
                  on
                </small>
              </span>
              {" "}
              <span className="inline text-primary">
                <small className="inline text-base leading-[1.375rem] max-md:text-[0.8125rem] max-md:leading-[1.125rem]">
                  {d.title}
                </small>
              </span>
              <small className="inline text-base leading-[1.375rem] max-md:text-[0.8125rem] max-md:leading-[1.125rem]">
                {" | "}
              </small>
              <span className="inline text-primary">
                <small className="inline text-base leading-[1.375rem] max-md:text-[0.8125rem] max-md:leading-[1.125rem]">
                  {d.title2}
                </small>
              </span>
              {" "}
              <br className="inline" />
              <span className="block text-color-014">
                <span className="inline text-foreground">
                  {d.title3}
                  <br className="inline" />
                  {d.title4}
                </span>
              </span>
              {" "}
            </h2>
            {" "}
            <div className="mb-6 overflow-hidden text-color-003 text-base leading-[1.625rem] line-clamp-3 max-lg:line-clamp-4">
              {d.label}
            </div>
            {" "}
            <div className="block">
              <div className="flex relative items-center gap-2 text-color-025 text-base font-normal leading-[1.6875rem] after:content-[''] after:block after:w-[289.3px] after:h-px after:mx-2 after:bg-color-025 max-md:after:w-28 md:max-lg:after:w-[31.5625rem]">
                <span className="block shrink-0 whitespace-nowrap text-nowrap">
                  See event details
                </span>
                {" "}
                <svg className="w-auto h-3 block top-1/2 -right-3 z-2 mt-2.5 mr-7.5 shrink-0 order-[3] overflow-hidden transform-[matrix(1,0,0,1,0,-6)] max-lg:right-auto" data-component="icon" fill="none" height="12" viewBox="0 0 8 12" width="8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="block relative max-w-[58%] rounded-tr-xl rounded-br-xl shrink-0 basis-[58%] overflow-hidden max-lg:rounded-bl-xl max-lg:aspect-video max-lg:max-w-none max-lg:rounded-tr-[initial] max-lg:basis-[initial]">
            <img className={cn("w-full h-95 block max-w-full rounded-tr-xl rounded-br-xl overflow-clip object-cover max-md:h-47.5 max-lg:rounded-bl-xl max-lg:rounded-tr-[initial] md:max-lg:h-[25.6875rem]", styles.className3)} data-component="image" alt={d.alt} height={d.height} src={d.imgSrc} width={d.width} />
            {" "}
          </div>
          {" "}
        </article>
        {" "}
      </a>
      {" "}
    </div>
  );
}
