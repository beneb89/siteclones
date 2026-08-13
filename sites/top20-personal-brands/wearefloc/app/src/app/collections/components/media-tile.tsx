import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  href: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  description: string;
  description2: string;
  href2: string;
  description3: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="contents min-w-0">
      <div className="w-full block relative shrink-0">
        <div className="flex relative pb-6 justify-start items-center content-center gap-4 overflow-hidden max-lg:flex-col after:content-[''] after:block after:absolute after:inset-0">
          <a className="w-60 h-60 block relative shrink-0 aspect-square text-primary cursor-pointer" data-component="link" href={d.href} rel="noopener" target="_blank">
            <div className="w-60 h-full block absolute top-0">
              <img className={cn("w-full h-60 block overflow-clip object-cover", styles.className)} data-component="image" alt="" height={d.height} sizes="240px" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
            </div>
          </a>
          <div className="w-[71%] flex relative py-4 flex-col flex-wrap justify-center items-start content-start grow shrink-0 basis-0 gap-10 max-lg:w-full max-lg:items-center max-lg:content-center max-lg:grow-[initial] max-lg:basis-[initial] 2xl:w-[82%]">
            <div className="w-158.5 flex relative flex-col justify-start items-start content-start shrink-0 gap-2 max-md:w-[21.4375rem] md:max-lg:w-184 2xl:w-296">
              <div className="w-158.5 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[21.4375rem] md:max-lg:w-184 2xl:w-296">
                <p className="block text-color-001 [font-family:'Druk_Text_Wide_Heavy',_'Druk_Text_Wide_Heavy_Placeholder',_sans-serif] text-4xl leading-9 uppercase max-lg:text-[1.75rem] max-lg:leading-7 max-lg:text-center">
                  {d.description}
                </p>
              </div>
              <div className="w-158.5 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[21.4375rem] md:max-lg:w-184 2xl:w-296">
                <p className="block text-color-007 [font-family:'Geist_Regular',_'Geist_Regular_Placeholder',_sans-serif] text-xl leading-[1.5625rem] uppercase max-lg:text-lg max-lg:leading-[1.4375rem] max-lg:text-center">
                  {d.description2}
                </p>
              </div>
            </div>
            <div className={cn("block relative shrink-0", styles.className2)}>
              <a className="h-7 flex relative flex-col justify-center items-end content-end gap-2 text-primary cursor-pointer" data-component="link" href={d.href2} rel="noopener">
                <div className="h-[1.1875rem] flex relative justify-center items-center content-center shrink-0 gap-2.5">
                  <div className="w-2 block relative shrink-0 aspect-square">
                    <div className="w-2 h-2.5 block absolute -top-px left-0 z-2 opacity-0 shrink-0 aspect-[0.784091/1] text-foreground" aria-hidden="true">
                      <div className="block aspect-[0.784091/1]">
                        <svg className="w-auto h-2.5 block overflow-hidden" data-component="icon" height="100%" viewBox="0 0 138 176" width="100%" preserveAspectRatio="none" fill="currentColor">
                          <use href="#svg-414580455_201" />
                        </svg>
                      </div>
                    </div>
                    <div className="w-2 h-2 block absolute top-1 z-1 shrink-0 aspect-square transform-[matrix(1,0,0,1,0,-4)]">
                      <div className="h-full block bg-color-002" />
                    </div>
                  </div>
                  <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className3)}>
                    <p className="block text-color-001 [font-family:'Geist_Mono_Regular',_'Geist_Mono_Regular_Placeholder',_monospace] text-base leading-[1.1875rem] tracking-[-0.16px] uppercase">
                      {d.description3}
                    </p>
                  </div>
                </div>
                <div className="flex relative pl-4.5 justify-end items-center content-center self-stretch shrink-0 gap-2.5 overflow-hidden">
                  <div className="basis-0 shrink-0 h-full block relative grow overflow-hidden bg-color-001" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
