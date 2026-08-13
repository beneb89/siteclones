import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCardData = {
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  title: string;
  title2: string;
  title3: string;
  height2: string;
  imgSrc2: string;
  srcSet2: string;
  width2: string;
  title4: string;
  title5: string;
  title6: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className={cn("contents min-w-0 2xl:w-450 2xl:h-[11.6125rem] 2xl:block 2xl:relative 2xl:shrink-0", styles.className)}>
      <a className="hidden 2xl:w-450 2xl:flex 2xl:relative 2xl:pt-6 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:gap-6 2xl:text-primary 2xl:cursor-pointer" href="/work/alchemain" name="selected-work__list__item">
        <div className="hidden 2xl:w-450 2xl:h-full 2xl:flex 2xl:absolute 2xl:top-0 2xl:left-0 2xl:z-1 2xl:min-w-0 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0">
          <div className="hidden">
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-surface" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-031" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-026" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-023" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-021" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-017" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-018" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-012" />
          </div>
          <div className="hidden">
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-010" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-013" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-014" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-016" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-019" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-024" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-027" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-029" />
          </div>
          <div className="hidden">
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-011" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-015" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-020" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-022" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-025" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-028" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-030" />
            <div className="hidden 2xl:w-[14.0625rem] 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:bg-color-032" />
          </div>
        </div>
        <div className="hidden 2xl:w-450 2xl:flex 2xl:relative 2xl:px-6 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0">
          <div className="hidden">
            <div className="hidden 2xl:w-[449.9px] 2xl:h-[15.8rem] 2xl:block 2xl:relative 2xl:pointer-events-none">
              <div className="hidden 2xl:w-[449.9px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:shrink-0 2xl:transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,-0.000833333,0,0,0,1)] 2xl:origin-[224.945px_126.398px] 2xl:pointer-events-none">
                <div className="hidden 2xl:w-[449.9px] 2xl:h-[15.8rem] 2xl:block 2xl:relative 2xl:overflow-hidden 2xl:[filter:drop-shadow(var(--clr-5)_0px_18px_17px)] 2xl:pointer-events-none">
                  <div className="hidden 2xl:w-[449.9px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:pointer-events-none">
                    <img className={cn("hidden 2xl:w-full 2xl:h-[15.8125rem] 2xl:block 2xl:overflow-clip 2xl:object-cover 2xl:pointer-events-none", styles.className2)} alt="" height={d.height} sizes="100vw" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden 2xl:w-438 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:content-start 2xl:shrink-0">
            <div className="hidden 2xl:w-438 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]">
              <h4 className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:'Geist_Mono_Regular',_'Geist_Mono_Regular_Placeholder',_monospace] 2xl:text-base 2xl:leading-[1.1875rem] 2xl:text-right 2xl:uppercase">
                {d.title}
              </h4>
            </div>
            <div className="hidden 2xl:w-438 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]">
              <h4 className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:'Druk_Wide_Heavy',_'Druk_Wide_Heavy_Placeholder',_sans-serif] 2xl:text-[5rem] 2xl:leading-24 2xl:text-left 2xl:uppercase">
                {d.title2}
              </h4>
            </div>
            <div className="hidden 2xl:w-438 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]">
              <h4 className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:'Geist_Regular',_'Geist_Regular_Placeholder',_sans-serif] 2xl:text-lg 2xl:leading-[1.375rem] 2xl:text-left 2xl:uppercase">
                {d.title3}
              </h4>
            </div>
          </div>
        </div>
        <div className="hidden 2xl:w-full 2xl:h-px 2xl:block 2xl:relative 2xl:shrink-0">
          <div className="hidden">
            <div className="hidden 2xl:w-450 2xl:h-full 2xl:block 2xl:relative 2xl:overflow-hidden 2xl:bg-color-001" />
          </div>
        </div>
      </a>
      <div className={cn("w-full block relative shrink-0 2xl:hidden", styles.className3)} name="selected-work__list__item">
        <a className="flex relative pt-6 flex-col justify-center items-center content-center gap-6 text-primary cursor-pointer max-lg:items-end max-lg:content-end max-lg:gap-4 2xl:hidden" data-component="link" href="/work/alchemain" name="selected-work__list__item">
          <div className="w-304 h-full flex absolute top-0 left-0 z-1 min-w-0 flex-col justify-center items-center content-center shrink-0 max-lg:hidden 2xl:hidden">
            <div className="w-full h-[55.5px] flex relative opacity-0 justify-center items-center content-center grow shrink-0 basis-0 max-lg:hidden 2xl:hidden">
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-surface max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-031 max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-026 max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-023 max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-021 max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-017 max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-018 max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-012 max-lg:hidden 2xl:hidden" />
            </div>
            <div className="w-full h-[55.5px] flex relative opacity-0 justify-center items-center content-center grow shrink-0 basis-0 max-lg:hidden 2xl:hidden">
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-010 max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-013 max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-014 max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-016 max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-019 max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-024 max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-027 max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-029 max-lg:hidden 2xl:hidden" />
            </div>
            <div className="w-full h-[55.5px] flex relative opacity-0 justify-center items-center content-center grow shrink-0 basis-0 max-lg:hidden 2xl:hidden">
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-011 max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-015 max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-020 max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-022 max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-025 max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-028 max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-030 max-lg:hidden 2xl:hidden" />
              <div className="w-38 h-full block relative z-1 grow shrink-0 basis-0 bg-color-032 max-lg:hidden 2xl:hidden" />
            </div>
          </div>
          <div className="w-full flex relative px-6 flex-col justify-center items-center content-center shrink-0 max-lg:px-4 max-lg:items-start max-lg:content-start max-lg:order-[1] max-lg:gap-4 2xl:hidden">
            <div className="w-full block absolute -inset-y-14.5 left-152 z-9 opacity-0 min-w-0 shrink-0 aspect-[1.77966/1] transform-[matrix(1,0,0,1,-207.852,0)] pointer-events-none max-lg:relative max-lg:inset-0 max-lg:aspect-[1.67619/1] max-lg:transform-[none] max-lg:opacity-[initial] 2xl:hidden">
              <div className="h-[14.6rem] block relative pointer-events-none max-md:h-[12.7875rem] md:max-lg:h-[27.4375rem] 2xl:hidden">
                <div className="h-full block absolute top-0 inset-x-0 shrink-0 transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,-0.000833333,0,0,0,1)] origin-[207.852px_116.797px] pointer-events-none max-md:origin-[171.5px_102.312px] md:max-lg:origin-[368px_219.539px] 2xl:hidden">
                  <div className="h-full block relative overflow-hidden [filter:drop-shadow(var(--clr-5)_0px_18px_17px)] pointer-events-none 2xl:hidden">
                    <div className="h-full block absolute top-0 inset-x-0 pointer-events-none 2xl:hidden">
                      <img className={cn("w-full h-58.5 block overflow-clip object-cover pointer-events-none max-md:h-[12.8125rem] md:max-lg:h-[27.4375rem] 2xl:hidden", styles.className4)} data-component="image" alt="" height={d.height2} sizes="100vw" src={d.imgSrc2} srcSet={d.srcSet2} width={d.width2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-292 flex relative flex-col justify-center items-start content-start shrink-0 max-md:w-[21.4375rem] max-lg:order-[1] max-lg:gap-1 md:max-lg:w-184 2xl:hidden">
              <div className="w-292 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[21.4375rem] md:max-lg:w-184 2xl:hidden">
                <h4 className="block text-color-001 [font-family:'Geist_Mono_Regular',_'Geist_Mono_Regular_Placeholder',_monospace] text-base leading-[1.1875rem] text-right uppercase max-lg:text-sm max-lg:leading-[1.0625rem] 2xl:hidden" data-component="heading">
                  {d.title4}
                </h4>
              </div>
              <div className="w-292 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[21.4375rem] md:max-lg:w-184 2xl:hidden">
                <h4 className="block text-color-001 [font-family:'Druk_Wide_Heavy',_'Druk_Wide_Heavy_Placeholder',_sans-serif] text-[4rem] leading-[4.8125rem] text-left uppercase max-lg:text-[1.75rem] max-lg:leading-[2.125rem] 2xl:hidden" data-component="heading">
                  {d.title5}
                </h4>
              </div>
              <div className="w-292 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[21.4375rem] md:max-lg:w-184 2xl:hidden">
                <h4 className="block text-color-001 [font-family:'Geist_Regular',_'Geist_Regular_Placeholder',_sans-serif] text-lg leading-[1.375rem] text-left uppercase max-lg:text-base max-lg:leading-[1.1875rem] 2xl:hidden" data-component="heading">
                  {d.title6}
                </h4>
              </div>
            </div>
          </div>
          <div className="w-full h-px block relative shrink-0 max-lg:order-[2] 2xl:hidden">
            <div className="contents 2xl:hidden">
              <div className="w-304 h-full block relative overflow-hidden bg-color-001 max-md:w-[23.4375rem] max-lg:bg-clr-6 md:max-lg:w-192 2xl:hidden" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
