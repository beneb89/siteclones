import type { MediaCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCard2Data = {
  href: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  text: string;
  href2: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d, styles }: { d: MediaCard2Data; styles: MediaCard2Styles }) {
  return (
    <li className="list-item">
      <div className={cn("block", styles.className)}>
        <a className="block mb-4 cursor-pointer" data-component="link" href={d.href}>
          <div className="block relative rounded-2xl overflow-hidden aspect-[4/3] w-full">
            <img className="w-full block absolute top-0 left-0 max-w-full overflow-clip object-cover aspect-[auto_480/350] align-middle text-clr-0 h-full" data-component="image" alt={d.alt} height="350" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={d.imgSrc} srcSet={d.srcSet} width="480" />
          </div>
        </a>
        <div className="block py-2.5">
          <span className="block opacity-60 mb-2 [font-family:mono,_'mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm leading-[1.3125rem] tracking-[-0.35px] uppercase max-md:text-[0.8125rem] max-md:leading-[1.1875rem] max-md:tracking-[-0.32px] md:max-lg:leading-[1.25rem] md:max-lg:tracking-[-0.34px]">
            {d.text}
          </span>
          <a className="inline-block mb-2 cursor-pointer" data-component="link" href={d.href2}>
            <h3 className={cn("block text-[1.1875rem] font-medium leading-[1.5rem] max-md:leading-5 max-md:[font-size:inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.375rem] 2xl:text-xl 2xl:leading-[1.5625rem]", styles.className2)} data-component="heading">
              {d.title}
            </h3>
          </a>
          <p className="opacity-60 overflow-hidden line-clamp-2">
            {d.description}
          </p>
        </div>
      </div>
    </li>
  );
}
