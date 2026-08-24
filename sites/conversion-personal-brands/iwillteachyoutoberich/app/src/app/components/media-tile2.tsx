import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile2Data = {
  ariaLabel: string;
  kind?: string;
  href: string;
  kind2?: string;
  alt: string;
  imgSrc: string;
  kind3?: string;
  href2: string;
  label: string;
  description: string;
  kind4?: string;
  href3: string;
  kind5?: string;
  href4: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className={cn("w-115.5 flex relative pr-[13.3px] shrink-0 max-lg:w-[514.5px] max-lg:pr-0 2xl:w-172.5 2xl:pr-5", styles.className)} aria-label={d.ariaLabel} role="group">
      <div className="min-h-full flex relative flex-col overflow-hidden">
        <a className={cn("block cursor-pointer", styles.className2)} data-component={d.kind} href={d.href}>
          {" "}
          <div className="h-[299.5px] flex relative mb-[13.3px] rounded-[6.7px] overflow-hidden max-lg:h-[514.5px] max-lg:mb-[0.9375rem] max-lg:rounded-[10px] 2xl:h-112.5 2xl:mb-5 2xl:rounded-[10px] before:content-[''] before:block before:w-0 before:h-[299.5px] max-lg:before:h-[514.5px] max-lg:before:pt-[514.5px] 2xl:before:h-112.5">
            <div className={cn("h-full block absolute top-0 z-1 min-w-0", styles.className3)}>
              <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover pointer-events-none" data-component={d.kind2} alt={d.alt} src={d.imgSrc} />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </a>
        <div className="block pr-[2.9125rem] max-lg:pr-0 2xl:pr-17.5">
          <a className="inline cursor-pointer" data-component={d.kind3} href={d.href2}>
            {" "}
            <div className="block text-2xl font-bold leading-[1.625rem] max-lg:text-[1.5625rem] max-lg:leading-[1.75rem] max-lg:[word-break:break-all] 2xl:text-4xl 2xl:leading-[2.5rem]">
              {d.label}
            </div>
            {" "}
            <div className="mt-[13.3px] overflow-hidden line-clamp-2 max-lg:mt-2.5 max-lg:line-clamp-3 2xl:mt-5">
              <p className="block">
                {d.description}
              </p>
              {" "}
            </div>
            {" "}
          </a>
          <div className="block mt-[1.6625rem] max-lg:mt-5 2xl:mt-10">
            <a className="inline cursor-pointer" data-component={d.kind4} href={d.href3}>
              {" "}
            </a>
            <a className="inline cursor-pointer" data-component={d.kind5} href={d.href4}>
              {" "}
              <span className="inline uppercase underline 2xl:text-lg 2xl:leading-[1.4375rem]">
                Read more
              </span>
              {" "}
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
