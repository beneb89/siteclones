import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  href: string;
  alt: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  text: string;
  href2: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className={cn("grid items-center gap-10 grid-cols-3 max-md:gap-5", styles.className)}>
      <div className="flex relative items-center">
        <a className="block relative rounded-xl grow overflow-hidden aspect-[4/3] bg-color-001 cursor-pointer" data-component="link" href={d.href}>
          <img className={cn("w-full block absolute top-0 left-0 max-w-full overflow-clip object-cover align-middle text-clr-0 h-full", styles.className2)} data-component="image" alt={d.alt} height={d.height} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
        </a>
      </div>
      <div className="block col-start-[span_2] col-end-[span_2]">
        <span className="block opacity-60 mb-2 [font-family:mono,_'mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm leading-[1.3125rem] tracking-[-0.35px] uppercase max-md:text-[0.8125rem] max-md:leading-[1.1875rem] max-md:tracking-[-0.32px] md:max-lg:leading-[1.25rem] md:max-lg:tracking-[-0.34px]">
          {d.text}
        </span>
        <a className="block mb-2 cursor-pointer" data-component="link" href={d.href2}>
          <h4 className="block text-[1.1875rem] font-medium leading-[1.5rem] text-balance max-md:leading-5 max-md:[font-size:inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.375rem] 2xl:text-xl 2xl:leading-[1.5625rem]" data-component="heading">
            {d.title}
          </h4>
        </a>
        <p className="opacity-60 overflow-hidden line-clamp-2">
          {d.description}
        </p>
      </div>
    </div>
  );
}
