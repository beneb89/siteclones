import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  href: string;
  title: string;
  alt: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  description: string;
  href2: string;
  title2: string;
  alt2: string;
  height2: string;
  imgSrc2: string;
  srcSet2: string;
  width2: string;
  description2: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <section className="block relative py-20 bg-background max-md:py-10">
      <div className="grid max-w-400 px-10 gap-10 mx-auto grid-cols-2 max-lg:px-5 max-md:gap-5 max-md:grid-cols-1">
        <div className="block text-balance max-w-lg">
          <div className="block text-clr-9 leading-7">
            <h5 className="block my-[1.2rem] text-[1.1875rem] font-semibold leading-[1.1875rem] tracking-[-0.95px] max-md:leading-4 max-md:tracking-[-0.8px] max-md:[font-size:inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.0625rem] md:max-lg:tracking-[-0.86px] 2xl:text-xl 2xl:leading-5 2xl:tracking-[-1px]" data-component="heading">
              <a className="inline text-border font-medium underline cursor-pointer" data-component="link" href={d.href}>
                <strong className="inline font-semibold">
                  {d.title}
                </strong>
              </a>
            </h5>
            <img className={cn("w-full block my-8 rounded-xl overflow-hidden align-middle text-clr-0 mx-auto max-w-full", styles.className)} data-component="image" alt={d.alt} height={d.height} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
            <p className="block my-3 text-foreground text-[1.1875rem] leading-[1.75rem] max-md:leading-6 max-md:[font-size:inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.625rem] 2xl:text-xl 2xl:leading-7.5">
              {d.description}
            </p>
          </div>
        </div>
        <div className="block">
          <div className="block text-clr-9 leading-7">
            <h5 className="block my-[1.2rem] text-[1.1875rem] font-semibold leading-[1.1875rem] tracking-[-0.95px] max-md:leading-4 max-md:tracking-[-0.8px] max-md:[font-size:inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.0625rem] md:max-lg:tracking-[-0.86px] 2xl:text-xl 2xl:leading-5 2xl:tracking-[-1px]" data-component="heading">
              <a className="inline text-border font-medium underline cursor-pointer" data-component="link" href={d.href2}>
                <strong className="inline font-semibold">
                  {d.title2}
                </strong>
              </a>
            </h5>
            <img className={cn("w-full block my-8 mx-auto rounded-xl overflow-hidden align-middle text-clr-0 max-w-full", styles.className2)} data-component="image" alt={d.alt2} height={d.height2} src={d.imgSrc2} srcSet={d.srcSet2} width={d.width2} />
            <p className="block my-3 text-foreground text-[1.1875rem] leading-[1.75rem] max-md:leading-6 max-md:[font-size:inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.625rem] 2xl:text-xl 2xl:leading-7.5">
              {d.description2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
