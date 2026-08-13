import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  id: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("w-[353.3px] flex float-left rounded-2xl flex-col flex-1 bg-background max-md:w-[19.6875rem] max-lg:basis-[initial] md:max-lg:w-[351.5px] 2xl:w-115", styles.className)}>
      <div className="w-[353.3px] h-full flex relative p-6 rounded-2xl flex-col [align-items:self-start] grow shrink-0 basis-0 gap-6 bg-background bg-cover [background-position:50%_50%] bg-no-repeat shadow-[var(--clr-5)_0px_5px_15px_0px] max-md:w-[19.6875rem] md:max-lg:w-[351.5px] 2xl:w-115" style={{ backgroundImage: "url(\"\")" }} id={d.id}>
        <div className="h-full flex max-w-full flex-col [align-items:self-start] basis-full order-[2] gap-6">
          {" "}
          <h3 className="block [font-family:'Segoe_UI_Semibold',_SegoeUI-semiBold,_sans-serif] text-2xl font-semibold leading-[1.8125rem] text-left max-lg:text-xl max-lg:leading-6" data-component="heading">
            {d.title}
          </h3>
          {" "}
          <div className="block text-muted max-md:text-base max-md:leading-[1.3125rem]">
            <p className="block text-color-001 max-md:text-sm max-md:leading-[1.125rem]">
              {d.description}
            </p>
            {" "}
          </div>
          {" "}
          <div className="w-full flex items-center" />
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
