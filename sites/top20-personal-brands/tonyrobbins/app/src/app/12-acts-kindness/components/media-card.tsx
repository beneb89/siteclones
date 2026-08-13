import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  text: string;
  title: string;
  description: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <li className={cn("grid py-10 gap-5 col-start-[span_2] col-end-[span_2] w-full grid-cols-7 max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] max-md:grid-cols-1", styles.className)}>
      <div className="block col-start-[span_1] col-end-[span_1] max-md:hidden" />
      <div className="block">
        <span className="inline opacity-30 text-[1.5rem] font-medium tracking-[-1.2px] max-md:text-[1.3125rem] max-md:leading-[1.3125rem] max-md:tracking-[-1.05px] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.4375rem] md:max-lg:tracking-[-1.15px]">
          {d.text}
        </span>
      </div>
      <div className="block col-start-[span_2] col-end-[span_2] max-md:[grid-column-start:initial] max-md:[grid-column-end:initial]">
        <h3 className="block mb-4 text-[1.5rem] font-medium tracking-[-1.2px] max-md:text-[1.3125rem] max-md:leading-[1.3125rem] max-md:tracking-[-1.05px] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.4375rem] md:max-lg:tracking-[-1.15px]" data-component="heading">
          {d.title}
        </h3>
        <div className="block text-clr-9 leading-7">
          <p className="block my-3 text-foreground text-[1.1875rem] leading-[1.75rem] max-md:leading-6 max-md:[font-size:inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.625rem] 2xl:text-xl 2xl:leading-7.5">
            {d.description}
          </p>
        </div>
      </div>
      <div className="block order-[-9999] col-start-[span_2] col-end-[span_2] max-md:[grid-column-start:initial] max-md:[grid-column-end:initial]">
        <div className="block relative rounded-xl overflow-hidden aspect-[2/1]">
          <img className="w-full block absolute top-0 left-0 max-w-full overflow-clip object-cover aspect-[auto_970/450] align-middle text-clr-0 h-full" data-component="image" alt={d.alt} height="450" src={d.imgSrc} srcSet={d.srcSet} width="970" />
        </div>
      </div>
    </li>
  );
}
