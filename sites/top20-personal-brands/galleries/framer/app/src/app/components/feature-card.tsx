import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  href: string;
  alt: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  title: string;
  label: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className="w-full flex relative pb-2.5 flex-col justify-start items-center content-center [align-self:start] shrink-0 gap-[0.9375rem]">
      <div className="contents min-w-0">
        <div className="w-full block relative shrink-0">
          <a className="flex relative pb-[0.9375rem] flex-col justify-start items-center content-center gap-5 text-primary cursor-pointer" data-component="link" href={d.href}>
            <div className="w-full flex relative z-1 rounded-[15px] flex-col justify-center items-center content-center shrink-0 gap-2.5 overflow-hidden aspect-[1.5852/1] after:content-[''] after:block after:absolute after:inset-0 after:rounded-tl-[15px]">
              <div className="h-full block absolute top-0 inset-x-0 -z-1 min-w-0 rounded-xl shrink-0 overflow-hidden">
                <div className="h-full block absolute top-0 inset-x-0 rounded-xl">
                  <img className={cn("w-full h-61 block rounded-xl overflow-clip object-cover max-md:h-[13.1875rem] md:max-lg:h-[28.6875rem]", styles.className)} data-component="image" alt={d.alt} height={d.height} sizes="calc(max((min(100vw - 80px, 1200px) - 40px) / 3, 200px) - 0px)" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
                </div>
              </div>
            </div>
            <div className="w-[386.7px] flex relative flex-col justify-start items-start content-start shrink-0 gap-2.5 max-md:w-[20.9375rem] md:max-lg:w-182">
              <div className="w-[386.7px] flex relative flex-col justify-center items-start content-start shrink-0 gap-[0.1875rem] max-md:w-[20.9375rem] md:max-lg:w-182">
                <div className={cn("relative max-w-[90%] flex-col justify-start shrink-0 overflow-clip line-clamp-2 max-md:w-[301.5px] md:max-lg:w-[40.95rem]", styles.className2)}>
                  <h3 className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-lg leading-[1.5rem] tracking-[-0.2px] text-left text-balance [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'ss03']" data-component="heading" dir="auto">
                    {d.title}
                  </h3>
                </div>
                <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-1.5">
                  <div className="w-[4.375rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                    <p className="block text-color-001 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.9375rem] leading-[1.25rem] tracking-[-0.1px] text-left [font-feature-settings:'cv05',_'cv11',_'ss03']" dir="auto">
                      Inspiration
                    </p>
                  </div>
                  <div className="w-0.5 h-0.5 block relative rounded-[60px] shrink-0 overflow-hidden bg-surface" />
                  <div className={cn("block relative shrink-0", styles.className3)}>
                    <div className="flex [justify-content:left] text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[0.9375rem] font-medium leading-[0.9375rem] tracking-[-0.45px] [font-feature-settings:'cv05',_'cv11',_'ss03',_'ss07'] whitespace-nowrap">
                      {d.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
