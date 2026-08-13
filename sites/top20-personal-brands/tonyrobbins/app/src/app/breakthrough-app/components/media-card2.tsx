import type { MediaCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCard2Data = {
  title: string;
  description: string;
  href: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d, styles }: { d: MediaCard2Data; styles: MediaCard2Styles }) {
  return (
    <section className={cn("block relative bg-background", styles.className)}>
      <div className="h-139 min-h-139 grid max-w-400 px-10 items-center gap-y-4 grid-cols-[600px_600px] text-balance mx-auto max-lg:px-5 max-md:grid-cols-1 md:max-lg:grid-cols-[364px_364px] 2xl:grid-cols-[760px_760px]">
        <div className={cn("block", styles.className2)}>
          <div className="block text-pretty max-w-full">
            <div className="block text-clr-9 leading-7">
              <h4 className="block my-[1.2rem] text-foreground text-[2.0625rem] font-semibold leading-[2.0625rem] tracking-[-1.64px] max-md:text-2xl max-md:leading-6 max-md:tracking-[-1.2px] md:max-lg:text-[1.75rem] md:max-lg:leading-[1.75rem] md:max-lg:tracking-[-1.38px] 2xl:text-[2.4375rem] 2xl:leading-[2.4375rem] 2xl:tracking-[-1.96px]" data-component="heading">
                {d.title}
              </h4>
              <p className="block my-3 text-foreground text-[1.1875rem] leading-[1.75rem] max-md:leading-6 max-md:[font-size:inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.625rem] 2xl:text-xl 2xl:leading-7.5">
                {d.description}
              </p>
              <div className="inline-block mr-2 mb-5">
                <a className="inline text-border font-medium underline cursor-pointer" data-component="link" href={d.href}>
                  <span className="border border-solid border-foreground inline-flex py-4 px-8 rounded-full justify-center items-center gap-2 text-background text-sm leading-[1.5625rem] tracking-[0.36px] text-center bg-foreground w-auto max-md:py-3 max-md:px-6 max-md:text-[0.8125rem] max-md:leading-[1.375rem] max-md:tracking-[0.32px] md:max-lg:tracking-[0.35px] 2xl:text-[0.9375rem] 2xl:leading-[1.6875rem] 2xl:tracking-[0.39px]">
                    <span className="block whitespace-nowrap">
                      SHOP NOW
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={cn("block", styles.className3)}>
          <img className={cn("w-150 h-[26.4375rem] block max-w-full overflow-clip aspect-[auto_720/508] align-middle text-clr-0 max-md:w-[20.9375rem] max-md:h-59 md:max-lg:w-91 md:max-lg:h-[16.0625rem] 2xl:w-180 2xl:h-127", styles.className4)} data-component="image" alt={d.alt} height="508" src={d.imgSrc} srcSet={d.srcSet} width="720" />
        </div>
      </div>
    </section>
  );
}
