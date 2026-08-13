import type { FeatureCard3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard3Data = {
  title: string;
  title2: string;
  title3: string;
  title4: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard3({ d, styles }: { d: FeatureCard3Data; styles: FeatureCard3Styles }) {
  return (
    <div className="contents min-w-0">
      <div className={cn("w-full block relative [align-self:start] shrink-0 aspect-[0.650096/1] max-lg:aspect-[initial]", styles.className)}>
        <div className="h-[23.075rem] block relative max-md:h-[22.4375rem] max-lg:aspect-square md:max-lg:h-188 2xl:h-[35.375rem]">
          <div className="w-60 h-full flex absolute top-0 left-30 z-1 p-5 rounded-2xl flex-col justify-between items-center content-center shrink-0 aspect-[0.650096/1] bg-color-001 transform-[matrix3d(1,0,0,0,0,1,0,0,0.15,0,1,-0.00125,-120,0,0,1)] origin-[120px_184.586px] max-md:w-[22.4375rem] max-md:left-[179.5px] max-lg:aspect-square max-md:transform-[matrix3d(1,0,0,0,0,1,0,0,0.224375,0,1,-0.00125,-179.5,0,0,1)] max-md:origin-[179.5px_179.5px] md:max-lg:w-188 md:max-lg:left-94 md:max-lg:transform-[matrix3d(1,0,0,0,0,1,0,0,0.47,0,1,-0.00125,-376,0,0,1)] md:max-lg:origin-[376px_376px] 2xl:w-92 2xl:left-46 2xl:transform-[matrix3d(1,0,0,0,0,1,0,0,0.23,0,1,-0.00125,-184,0,0,1)] 2xl:origin-[184px_283.031px]">
            <div className="w-50 flex relative opacity-70 flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[19.9375rem] md:max-lg:w-178 2xl:w-82">
              <h6 className="block text-background [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-base leading-[1.375rem] text-center" data-component="heading">
                Manifest
              </h6>
            </div>
            <div className="w-50 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[19.9375rem] md:max-lg:w-178 2xl:w-82">
              <h4 className="hidden max-lg:block max-lg:text-background max-lg:[font-family:'Feature_Deck_Web_Light',_'Feature_Deck_Web_Light_Placeholder',_sans-serif] max-lg:text-[2.5rem] max-lg:leading-11 max-lg:tracking-[-0.8px] max-lg:text-center">
                {d.title}
              </h4>
              <h5 className="block text-background [font-family:'Feature_Deck_Web_Light',_'Feature_Deck_Web_Light_Placeholder',_sans-serif] text-[2rem] leading-[2.8125rem] text-center max-lg:hidden 2xl:leading-[2.375rem]" data-component="heading">
                {d.title2}
              </h5>
            </div>
            <div className="w-50 flex relative opacity-70 flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[19.9375rem] md:max-lg:w-178 2xl:w-82">
              <h6 className="block text-background [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-base leading-[1.375rem] text-center" data-component="heading">
                {d.title3}
              </h6>
            </div>
          </div>
          <div className={cn("w-full h-full flex absolute top-0 left-0 p-5 rounded-2xl flex-col justify-between items-center content-center shrink-0 aspect-[0.650096/1] transform-[matrix3d(-1,0,0,0,0,1,0,0,0,0,-1,0.00125,0,0,0,1)] origin-[120px_184.586px] max-lg:aspect-square max-md:origin-[179.5px_179.5px] md:max-lg:origin-[376px_376px] 2xl:origin-[184px_283.031px]", styles.className2)}>
            <div className={cn("flex relative opacity-70 flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className3)}>
              <h6 className={cn("block [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-base leading-[1.375rem]", styles.className4)} data-component="heading">
                {d.title4}
              </h6>
            </div>
            <div className="w-50 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[19.9375rem] md:max-lg:w-178 2xl:w-82">
              <p className={cn("block [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-xl leading-7 text-center", styles.className5)}>
                {d.description}
              </p>
            </div>
            <div className="w-[7.1875rem] flex relative opacity-70 flex-col justify-start shrink-0 whitespace-pre text-nowrap">
              <h6 className={cn("block [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-base leading-[1.375rem]", styles.className6)} data-component="heading">
                Ebb Scandinavia
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
