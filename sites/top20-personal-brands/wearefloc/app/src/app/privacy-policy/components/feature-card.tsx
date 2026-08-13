import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  title: string;
  description: string;
  description2: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className="w-232 flex relative flex-col justify-center items-center content-center shrink-0 gap-4 overflow-hidden max-md:w-[21.4375rem] md:max-lg:w-184">
      <div className={cn("w-232 flex relative pb-4 flex-col justify-center items-center content-center shrink-0 gap-2.5 overflow-hidden max-md:w-[21.4375rem] md:max-lg:w-184 after:content-[''] after:block after:absolute after:inset-0", styles.className)}>
        <div className="w-232 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[21.4375rem] md:max-lg:w-184">
          <h2 className="block text-color-001 [font-family:Inter-Bold,_Inter,_sans-serif] text-2xl font-bold leading-[2.125rem] tracking-[-0.5px]" data-component="heading">
            <strong className="inline font-black">
              {d.title}
            </strong>
          </h2>
        </div>
      </div>
      <div className="w-232 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[21.4375rem] md:max-lg:w-184">
        <p className="block text-color-001 [font-family:'Geist_Regular',_'Geist_Regular_Placeholder',_sans-serif] text-base leading-5">
          {d.description}
          <br className="inline" />
          ‍
          <br className="inline" />
          {d.description2}
        </p>
      </div>
    </div>
  );
}
