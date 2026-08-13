import type { CardLinkStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type CardLinkData = {
  alt: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  alt2: string;
  height2: string;
  imgSrc2: string;
  srcSet2: string;
  width2: string;
  title: string;
  description: string;
  title2: string;
  description2: string;
  description3: string;
  description4: string;
};
/** A linked card. */
export default function CardLink({ d, styles }: { d: CardLinkData; styles: CardLinkStyles }) {
  return (
    <a className="w-full flex relative justify-start items-center content-center [align-self:start] shrink-0 text-primary cursor-pointer" data-component="link" href="/thoughts/arctic-paper">
      <div className={cn("contents min-w-0 2xl:w-234 2xl:block 2xl:relative 2xl:grow 2xl:shrink-0 2xl:basis-0", styles.className)}>
        <div className="w-154 block relative grow shrink-0 basis-0 max-md:w-[175.5px] md:max-lg:w-93 2xl:w-234 2xl:flex 2xl:pb-10 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:gap-3 2xl:overflow-hidden 2xl:grow-[initial] 2xl:shrink-[initial] 2xl:basis-[initial]">
          <div className="w-154 flex relative pb-10 flex-col justify-start items-start content-start gap-3 overflow-hidden max-md:w-[175.5px] md:max-lg:w-93 2xl:w-234 2xl:block 2xl:shrink-0 2xl:aspect-[1.48936/1] 2xl:pb-0 2xl:[flex-direction:initial] 2xl:[justify-content:initial] 2xl:[align-items:initial] 2xl:[align-content:initial] 2xl:gap-[initial]">
            <div className="w-154 h-[25.85rem] block relative inset-0 shrink-0 overflow-hidden aspect-[1.48936/1] transform-[none] max-md:w-[175.5px] max-md:h-[7.3625rem] md:max-lg:w-93 md:max-lg:h-[15.6125rem] 2xl:w-234 2xl:h-[39.1625rem] 2xl:absolute 2xl:left-117 2xl:aspect-[1.49386/1] 2xl:transform-[matrix(1,0,0,1,-468,0)] 2xl:right-auto 2xl:bottom-auto">
              <div className="w-154 h-full block absolute top-0 left-77 shrink-0 overflow-hidden aspect-[1.49386/1] transform-[matrix(1,0,0,1,-308,0)] max-md:w-[175.5px] max-md:left-[5.4875rem] max-md:transform-[matrix(1,0,0,1,-87.75,0)] md:max-lg:w-93 md:max-lg:left-46.5 md:max-lg:transform-[matrix(1,0,0,1,-186,0)] 2xl:w-234 2xl:left-0 2xl:transform-[none] 2xl:shrink-[initial] 2xl:[overflow-x:initial] 2xl:[overflow-y:initial] 2xl:aspect-[initial]">
                <img className={cn("hidden 2xl:w-full 2xl:h-[39.1875rem] 2xl:block 2xl:overflow-clip 2xl:object-cover", styles.className2)} alt={d.alt} height={d.height} sizes="calc(max(max((100vw - 48px) / 2, 140px), 1px) * 1.0004)" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
                <div className="h-full block absolute top-0 inset-x-0 2xl:hidden">
                  <img className={cn("w-full h-103 block overflow-clip object-cover max-md:h-[7.3125rem] md:max-lg:h-[15.5625rem] 2xl:hidden", styles.className3)} data-component="image" alt={d.alt2} height={d.height2} sizes="calc(max(max((100vw - 48px) / 2, 140px), 1px) * 1.0004)" src={d.imgSrc2} srcSet={d.srcSet2} width={d.width2} />
                </div>
              </div>
            </div>
            <div className="w-154 flex relative max-w-200 flex-col justify-start items-start content-start shrink-0 gap-2 overflow-hidden max-md:w-[175.5px] md:max-lg:w-93 2xl:hidden">
              <div className="w-154 flex relative opacity-70 flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[175.5px] md:max-lg:w-93 2xl:hidden">
                <h6 className="block text-background [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-base leading-[1.375rem] text-left 2xl:hidden" data-component="heading">
                  Article
                </h6>
              </div>
              <div className="w-154 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[175.5px] md:max-lg:w-93 2xl:hidden">
                <h6 className="hidden max-lg:block max-lg:text-background max-lg:[font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] max-lg:text-base max-lg:leading-[1.375rem]">
                  {d.title}
                </h6>
                <p className="block text-background [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-xl leading-7 [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden 2xl:hidden">
                  {d.description}
                </p>
              </div>
              <div className="w-154 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[175.5px] md:max-lg:w-93 2xl:hidden">
                <h6 className="hidden max-lg:block max-lg:text-background max-lg:[font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] max-lg:text-base max-lg:leading-[1.375rem]">
                  {d.title2}
                </h6>
                <p className="block text-background [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-xl leading-7 [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden 2xl:hidden">
                  {d.description2}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden 2xl:w-200 2xl:flex 2xl:relative 2xl:max-w-200 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:gap-2 2xl:overflow-hidden">
            <div className="hidden 2xl:w-200 2xl:flex 2xl:relative 2xl:opacity-70 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]">
              <h6 className="hidden 2xl:block 2xl:text-background 2xl:[font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-[1.375rem] 2xl:text-left">
                Article
              </h6>
            </div>
            <div className="hidden 2xl:w-200 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]">
              <p className="hidden 2xl:block 2xl:text-background 2xl:[font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] 2xl:text-xl 2xl:leading-7 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']">
                {d.description3}
              </p>
            </div>
            <div className="hidden 2xl:w-200 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]">
              <p className="hidden 2xl:block 2xl:text-background 2xl:[font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] 2xl:text-xl 2xl:leading-7 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']">
                {d.description4}
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
