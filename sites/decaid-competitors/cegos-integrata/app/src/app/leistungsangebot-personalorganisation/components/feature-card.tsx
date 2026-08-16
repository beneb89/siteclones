import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className="box-content flex min-w-0 flex-col gap-3 overflow-x-hidden overflow-y-auto [font-family:Raleway,_sans-serif,_sans-serif]">
      <div className={cn("h-[22.5625rem] min-h-75 block relative rounded-[10px] flex-1 overflow-hidden text-left bg-surface w-full 2xl:h-[23.4375rem]", styles.className)}>
        <div className="flex p-4 flex-col justify-center items-start gap-2 h-full">
          <h3 className="block text-xl font-bold leading-[1.5625rem] max-md:text-base max-md:leading-[1.25rem] md:max-lg:text-lg md:max-lg:leading-[1.4375rem]" data-component="heading">
            {d.title}
          </h3>
          <p className="block">
            {d.description}
          </p>
        </div>
        <div className="w-[22.5625rem] h-[22.5625rem] flex absolute top-0 left-0 z-4 opacity-0 p-4 flex-col justify-center items-start gap-2 bg-surface">
          <a className="border border-solid border-clr-0 flex py-[0.5625rem] px-4.5 rounded-[40px] justify-center items-center text-background font-semibold leading-[1.125rem] bg-foreground cursor-pointer max-md:leading-[1rem] md:max-lg:leading-[1.0625rem]" data-component="button" href="/leistungsangebot-personalorganisation/change-management-training" rel="noopener" target="_self">
            Lesen Sie mehr
          </a>
        </div>
      </div>
    </div>
  );
}
