import type { MediaTile4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile4Data = {
  kind?: string;
  kind2?: string;
  kind3?: string;
  alt: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  description: string;
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile4({ d, styles }: { d: MediaTile4Data; styles: MediaTile4Styles }) {
  return (
    <div className="w-95 block relative max-w-95 mr-5 shrink-0 h-auto max-md:w-[20.9375rem]">
      <figure className={cn("block", styles.className)}>
        <div className="flex relative mb-4 rounded-2xl items-end overflow-hidden aspect-[2/3] text-background bg-color-005">
          <video className="w-full block absolute top-0 left-0 min-w-0 max-w-full overflow-clip object-cover align-middle h-full" muted playsInline preload="none" />
          <div className={cn("w-[8.925rem] h-14 block absolute top-5 left-5 opacity-0 min-w-0", styles.className2)}>
            <button className={cn("inline-flex relative z-10 py-4 px-8 rounded-full justify-center items-center gap-2 text-sm font-medium leading-[1.375rem] tracking-[0.36px] text-center bg-surface-2 [backdrop-filter:blur(8px)] cursor-pointer w-auto max-md:py-3 max-md:px-6 max-md:text-[0.8125rem] max-md:leading-[1.1875rem] max-md:tracking-[0.32px] md:max-lg:leading-[1.3125rem] md:max-lg:tracking-[0.35px] 2xl:text-[0.9375rem] 2xl:leading-[1.4375rem] 2xl:tracking-[0.39px]", styles.className3)} data-component={d.kind}>
              <svg className="flex overflow-hidden align-middle h-6 w-6" data-component={d.kind2} fill="transparent" viewBox="0 0 24 24">
                <title>
                  {"Play"}
                </title>
                <path d="M17.2335 11.1362C17.895 11.5221 17.895 12.4779 17.2335 12.8638L6.50387 19.1227C5.83721 19.5116 5 19.0308 5 18.259L5 5.74104C5 4.96925 5.83721 4.48838 6.50387 4.87726L17.2335 11.1362Z" />
              </svg>
              <span className="block">
                Watch
              </span>
            </button>
          </div>
          <div className={cn("h-47.5 block absolute top-95 opacity-50 min-w-0", styles.className4)} style={{ backgroundImage: "linear-gradient(to top in oklab, var(--foreground) 0%, var(--clr-0) 100%)" }} />
          <div className={cn("block absolute min-w-0 p-5", styles.className5)}>
            <img className={cn("w-full block max-w-full overflow-clip align-middle text-clr-0", styles.className6)} data-component={d.kind3} alt={d.alt} height={d.height} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
          </div>
        </div>
        <blockquote className="block">
          <p className="block mb-2 text-[1.1875rem] font-medium leading-[1.5rem] max-md:leading-5 max-md:[font-size:inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.375rem] 2xl:text-xl 2xl:leading-[1.5625rem]">
            {d.description}
          </p>
          <footer className="block opacity-60 text-sm leading-[1.375rem] max-lg:leading-[1.3125rem] 2xl:text-[0.9375rem] 2xl:leading-[1.4375rem]">
            {d.text}
            <span className="inline">
              {d.text2}
            </span>
          </footer>
        </blockquote>
      </figure>
    </div>
  );
}
