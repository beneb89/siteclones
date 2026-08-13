import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  alt: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  title: string;
  description: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  href: string;
  description6: string;
  description7: string;
  href2: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <section className="block relative py-20 bg-background max-md:py-10">
      <div className="grid max-w-400 px-10 gap-20 mx-auto grid-cols-2 max-lg:px-5 max-md:gap-10 max-md:grid-cols-1">
        <div className="block">
          <div className="flex relative p-20 rounded-2xl justify-center items-center overflow-hidden bg-border mx-auto aspect-square w-full">
            <img className={cn("w-auto h-100 block max-w-full overflow-clip align-middle text-clr-0 shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--color-004)_0px_20px_25px_-5px,var(--color-004)_0px_8px_10px_-6px] max-md:h-[10.9375rem] md:max-lg:h-41 2xl:h-140", styles.className)} data-component="image" alt={d.alt} height="499" sizes="(min-width: 1024px) 50vw, 100vw" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
          </div>
        </div>
        <div className="block">
          <div className="block py-10 mx-auto max-w-xl max-md:py-0">
            <h2 className="block mb-5 text-[2.6875rem] font-medium leading-[2.6875rem] tracking-[-2.16px] max-md:text-3xl max-md:leading-[1.875rem] max-md:tracking-[-1.48px] md:max-lg:text-4xl md:max-lg:leading-[2.25rem] md:max-lg:tracking-[-1.78px] 2xl:text-[3.3125rem] 2xl:leading-[3.3125rem] 2xl:tracking-[-2.64px]" data-component="heading">
              {d.title}
            </h2>
            <p className="block mb-5 text-[1.1875rem] leading-[1.75rem] max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.625rem] 2xl:text-xl 2xl:leading-7.5">
              {d.description}
            </p>
            <div className="block text-clr-9 leading-7">
              <p className="block my-3 text-foreground text-[1.1875rem] leading-[1.75rem] max-md:leading-6 max-md:[font-size:inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.625rem] 2xl:text-xl 2xl:leading-7.5">
                <em className="inline italic">
                  {d.description2}
                </em>
                {d.description3}
                <em className="inline italic">
                  {d.description4}
                </em>
                {d.description5}
                <a className="inline text-border font-medium underline cursor-pointer" data-component="link" href={d.href}>
                  {d.description6}
                </a>
                {d.description7}
              </p>
              <p className="block my-3 text-foreground text-[1.1875rem] leading-[1.75rem] max-md:leading-6 max-md:[font-size:inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.625rem] 2xl:text-xl 2xl:leading-7.5">
                <a className="inline text-border font-medium underline cursor-pointer" data-component="link" href={d.href2}>
                  Purchase Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
