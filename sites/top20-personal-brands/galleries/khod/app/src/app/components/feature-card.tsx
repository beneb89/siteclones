import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  imgSrc: string;
  description: string;
  description2: string;
  description3: string;
  href: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className="flex relative z-1 flex-col gap-4" role="listitem">
      <div className="block overflow-hidden">
        <img className="w-full h-[12.4375rem] inline-block max-w-full overflow-clip object-cover align-middle max-md:h-45 md:max-lg:h-30" data-component="image" alt="" src={d.imgSrc} />
      </div>
      <div className="flex flex-col gap-4">
        <p className="block text-sm leading-[1.3125rem]">
          <span className="inline">
            {d.description}
          </span>
          <span className="inline">
            {" • "}
          </span>
          <span className="inline">
            {d.description2}
          </span>
          <span className="inline">
            {" • "}
          </span>
          <span className="inline">
            {d.description3}
          </span>
        </p>
        <a className={cn("block text-color-001 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-2xl leading-[1.8125rem] tracking-[-0.48px] cursor-pointer max-md:text-xl max-md:leading-[inherit] before:content-[''] before:block before:absolute before:inset-0 before:z-2 before:w-[378.7px] before:h-[19.3375rem] max-md:before:w-[21.4375rem] md:max-lg:before:w-[229.3px] md:max-lg:before:h-[17.55rem]", styles.className)} data-component="link" href={d.href}>
          {d.title}
        </a>
      </div>
    </div>
  );
}
