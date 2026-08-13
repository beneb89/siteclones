import type { FeatureCard4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCard4Data = {
  title: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
};
/** A feature card. */
export default function FeatureCard4({ d, styles }: { d: FeatureCard4Data; styles: FeatureCard4Styles }) {
  return (
    <div className={cn("contents min-w-0 transform-[none] 2xl:w-472 2xl:h-[24.6375rem] 2xl:block 2xl:relative 2xl:opacity-60 2xl:shrink-0 2xl:aspect-[4.78912/1] 2xl:origin-[944px_197.109px]", styles.className)}>
      <div className={cn("w-312 block relative opacity-60 shrink-0 aspect-[4.78912/1] transform-[matrix3d(0.9,0,0,0,0,0.763243,0.529919,-0.000662399,0,-0.476927,0.848048,-0.00106006,0,0,0,1)] origin-[624px_147px] max-md:w-[22.4375rem] max-md:origin-[179.5px_181.203px] max-lg:aspect-[initial] md:max-lg:w-188 md:max-lg:origin-[376px_159.203px] 2xl:w-472 2xl:h-[24.6375rem] 2xl:flex 2xl:p-12 2xl:rounded-2xl 2xl:justify-between 2xl:items-end 2xl:content-end 2xl:overflow-hidden 2xl:bg-color-001 2xl:transform-[none] 2xl:opacity-[initial] 2xl:shrink-[initial] 2xl:aspect-[initial] 2xl:origin-[initial]", styles.className2)}>
        <div className="w-full h-full flex relative p-12 rounded-2xl justify-between items-end content-end overflow-hidden bg-color-001 max-lg:pt-5 max-lg:pb-10 max-lg:px-5 max-lg:flex-col max-lg:justify-start max-lg:gap-6 2xl:w-[35%] 2xl:flex-col 2xl:justify-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word] 2xl:p-0 2xl:rounded-[initial] 2xl:[align-items:initial] 2xl:[align-content:initial] 2xl:[overflow-x:initial] 2xl:[overflow-y:initial] 2xl:bg-[initial]">
          <h2 className={cn("hidden 2xl:block 2xl:[font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] 2xl:text-[18.75rem] 2xl:leading-67.5 2xl:tracking-[-6px] 2xl:text-left", styles.className3)}>
            {d.title}
          </h2>
          <div className="w-96 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[19.9375rem] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-178 2xl:hidden">
            <h2 className={cn("block [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-[13.75rem] leading-49.5 tracking-[-4.4px] text-left max-lg:text-[10rem] max-lg:leading-36 max-lg:tracking-[-3.2px] 2xl:hidden", styles.className4)} data-component="heading">
              {d.title2}
            </h2>
          </div>
          <div className="w-[64.5%] flex relative flex-col justify-between items-start content-start self-stretch grow-[2] shrink-0 basis-0 max-lg:w-[97%] max-lg:justify-start max-lg:gap-6 max-lg:[align-self:initial] max-lg:grow-[initial] max-lg:basis-[initial] 2xl:hidden">
            <div className={cn("flex relative opacity-70 flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden", styles.className5)}>
              <h6 className="block text-background [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-base leading-[1.375rem] 2xl:hidden" data-component="heading">
                {d.title3}
              </h6>
            </div>
            <div className="w-192 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[19.9375rem] md:max-lg:w-178 2xl:hidden">
              <h4 className="block text-background [font-family:'Feature_Deck_Web_Light',_'Feature_Deck_Web_Light_Placeholder',_sans-serif] text-[4rem] leading-[4.375rem] tracking-[-1.28px] max-lg:text-[2.5rem] max-lg:leading-11 max-lg:tracking-[-0.8px] 2xl:hidden" data-component="heading">
                {d.title4}
              </h4>
            </div>
          </div>
        </div>
        <div className="hidden 2xl:w-[1194.7px] 2xl:h-full 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-between 2xl:items-start 2xl:content-start 2xl:grow-[2] 2xl:shrink-0 2xl:basis-0">
          <div className={cn("hidden 2xl:flex 2xl:relative 2xl:opacity-70 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap", styles.className6)}>
            <h6 className="hidden 2xl:block 2xl:text-background 2xl:[font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-[1.375rem]">
              {d.title5}
            </h6>
          </div>
          <div className="hidden 2xl:w-[1194.7px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]">
            <h4 className="hidden 2xl:block 2xl:text-background 2xl:[font-family:'Feature_Deck_Web_Light',_'Feature_Deck_Web_Light_Placeholder',_sans-serif] 2xl:text-[5.5rem] 2xl:leading-[6.0625rem] 2xl:tracking-[-1.76px]">
              {d.title6}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
