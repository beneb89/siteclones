import type { MediaTile5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile5Data = {
  ariacurrent?: string;
  ariaLabel: string;
  alt: string;
  imgSrc: string;
  href: string;
  label: string;
  href2: string;
  label2: string;
  text: string;
};
/** A media tile. */
export default function MediaTile5({ d, styles }: { d: MediaTile5Data; styles: MediaTile5Styles }) {
  return (
    <div className={cn("w-64 flex flex-col shrink-0 transform-[matrix(1,0,0,1,-140,0)] max-md:w-75 max-md:transform-[matrix(1,0,0,1,-162,0)] md:max-lg:w-[19.2rem] md:max-lg:transform-[matrix(1,0,0,1,-165.594,0)] 2xl:w-96 2xl:transform-[matrix(1,0,0,1,-204,0)]", styles.className)} aria-current={d.ariacurrent} aria-label={d.ariaLabel} role="listitem">
      <div className="flex flex-col gap-6 max-lg:gap-4">
        <div className="block rounded-md overflow-hidden aspect-[674/285] w-full">
          <picture className="inline">
            <img className="w-64 h-27 block max-w-full overflow-clip object-cover aspect-[auto_674/285] align-middle max-md:w-75 max-md:h-[7.9375rem] md:max-lg:w-[19.1875rem] md:max-lg:h-32.5 2xl:w-96 2xl:h-40.5" data-component="image" alt={d.alt} height="285" src={d.imgSrc} width="674" />
          </picture>
        </div>
        <div className="flex flex-col gap-2 max-lg:gap-1">
          <a className="h-6 block [font-weight:550] cursor-pointer hover:text-clr-23 hover:outline-clr-23 hover:[text-decoration-color:var(--clr-23)] focus:outline-clr-26" data-component="link" href={d.href}>
            <span className="inline">
              <span className="inline text-xs leading-3 uppercase">
                {d.label}
              </span>
            </span>
          </a>
          <a className={cn("block [font-weight:550] cursor-pointer hover:text-clr-23 hover:outline-clr-23 hover:[text-decoration-color:var(--clr-23)] hover:underline focus:outline-clr-26", styles.className2)} data-component="link" href={d.href2}>
            <span className="inline">
              <span className="inline text-xl [font-weight:450] leading-6.5 max-lg:leading-[1.3125rem] max-lg:tracking-[-0.8px] max-lg:[font-size:inherit]">
                {d.label2}
              </span>
            </span>
          </a>
          <span className="block text-color-001 text-sm [font-weight:420] leading-[1.125rem]">
            {d.text}
          </span>
        </div>
      </div>
    </div>
  );
}
