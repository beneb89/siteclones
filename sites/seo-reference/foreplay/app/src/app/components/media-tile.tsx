import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTileData = {
  kind?: string;
  href: string;
  kind2?: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  kind3?: string;
  label: string;
  label2: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="w-120 block max-md:w-[20.4375rem] md:max-lg:w-96" role="listitem">
      <a className={cn("inline-block max-w-120 rounded-[20px] justify-center items-center shrink-0 overflow-hidden text-primary shadow-[var(--surface)_0px_0px_0px_1px] cursor-pointer", styles.className)} data-component={d.kind} href={d.href}>
        <div className="block aspect-[465/264]" style={{ backgroundImage: "linear-gradient(var(--surface-3), var(--surface))" }}>
          <img className="w-full h-[17.0625rem] block max-w-full overflow-clip object-cover align-middle max-md:h-46.5 md:max-lg:h-54.5" data-component={d.kind2} alt={d.alt} sizes="100vw" src={d.imgSrc} srcSet={d.srcSet} />
        </div>
        <div className="flex pt-8 pb-6 px-6 flex-col gap-4 max-md:pt-5 max-md:pb-4 max-md:px-5 max-md:flex-1">
          <div className="flex justify-start items-center gap-3">
            <div className="w-7 h-7 block rounded-[999px] shrink-0 overflow-hidden">
              <img className="w-7 h-7 block max-w-full overflow-clip aspect-[auto_28/28] align-middle" data-component={d.kind3} alt="" height="28" sizes="(max-width: 1279px) 28px, (max-width: 1439px) 2vw, (max-width: 1919px) 28px, 1vw" src="/assets/cloned/images/3909a4b5d4f6.png" srcSet="/assets/cloned/images/1e96c8a2d740.png 500w, /assets/cloned/images/3909a4b5d4f6.png 512w" width="28" />
            </div>
            <div className="block items-center text-color-002">
              <div className="block text-sm font-medium leading-5 tracking-[-0.09px] whitespace-nowrap">
                Jack Kavanagh
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="block items-center text-color-002">
              <div className="block text-[1.125rem] font-medium tracking-[-0.26px] max-md:tracking-[-0.23px] max-md:[font-size:inherit]">
                {d.label}
              </div>
            </div>
            <div className="overflow-hidden line-clamp-2">
              <div className="block flex-1 text-color-001">
                <div className="block">
                  {d.label2}
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
