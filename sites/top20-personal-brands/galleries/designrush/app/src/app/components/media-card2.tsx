import type { MediaCard2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCard2Data = {
  ariaLabel: string;
  kind?: string;
  href: string;
  kind2?: string;
  alt: string;
  imgSrc: string;
  kind3?: string;
  title: string;
  description: string;
  description2: string;
  kind4?: string;
  href2: string;
  kind5?: string;
  kind6?: string;
  href3: string;
  kind7?: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d, styles }: { d: MediaCard2Data; styles: MediaCard2Styles }) {
  return (
    <div className="w-[336.7px] block relative mr-15 shrink-0 max-md:w-[17.1875rem] max-lg:max-w-full max-lg:mr-5 md:max-lg:w-164.5 2xl:w-107.5" aria-label={d.ariaLabel} role="group">
      <div className="h-full border border-solid border-surface block pt-6 pb-2 px-6 rounded-lg bg-surface-3 max-lg:pt-4.5 max-lg:px-4.5 max-lg:pb-0">
        <a className="min-h-13 inline overflow-hidden cursor-pointer max-lg:min-h-12" data-component={d.kind} href={d.href}>
          <figure className="h-[13.4625rem] min-h-13 block mb-6.5 overflow-hidden aspect-[382/287] max-md:h-[11.125rem] max-lg:min-h-12 max-md:mb-[0.3125rem] md:max-lg:h-[29.1125rem] 2xl:h-[285.5px]">
            <img className="w-full h-[13.4375rem] block max-w-full overflow-clip object-cover align-top text-clr-1 max-md:h-44.5 md:max-lg:h-116.5 2xl:h-[17.8125rem]" data-component={d.kind2} alt={d.alt} src={d.imgSrc} width="330" />
          </figure>
          <h3 className={cn("h-[3.6625rem] min-h-13 border-b border-solid border-b-surface-2 flex py-[0.9375rem] items-center overflow-hidden text-2xl font-medium leading-[1.75rem] max-lg:min-h-12", styles.className)} data-component={d.kind3}>
            {d.title}
          </h3>
          <p className="h-13 min-h-13 border-b border-solid border-b-surface-2 flex items-center overflow-hidden text-lg font-normal leading-[1.4375rem] max-lg:h-12 max-lg:min-h-12">
            {d.description}
          </p>
          <p className="h-13 min-h-13 border-b border-solid border-b-surface-2 flex items-center overflow-hidden text-lg font-normal leading-[1.4375rem] max-lg:h-12 max-lg:min-h-12">
            {d.description2}
          </p>
        </a>
        <div className="h-13 min-h-13 flex items-center gap-7.5 overflow-hidden max-lg:h-12 max-lg:min-h-12 max-md:my-2">
          <a className="block cursor-pointer" data-component={d.kind4} href={d.href2} rel="nofollow" target="_blank">
            <svg className="w-[1.1875rem] h-[1.1875rem] inline overflow-hidden" data-component={d.kind5} height="19" width="19" fill="currentColor">
              <use xlinkHref="#share-linkedin" />
            </svg>
          </a>
          <a className="block cursor-pointer" data-component={d.kind6} href={d.href3} rel="nofollow" target="_blank">
            <svg className="w-4.5 h-4.5 inline overflow-hidden" data-component={d.kind7} height="18" width="18" fill="currentColor">
              <use xlinkHref="#share-instagram" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
