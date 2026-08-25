import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  id: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("h-[8.225rem] min-h-2.5 block relative max-h-[1e+06px] mt-10 p-px max-md:mt-5 2xl:hidden", styles.className)}>
      <div className="h-full block absolute top-0 inset-x-0 max-h-[1e+06px] overflow-hidden [background-clip:padding-box] [-webkit-background-clip:padding-box] 2xl:hidden" />
      {" "}
      <div className={cn("w-full min-h-2.5 inline-block relative clear-both z-1 max-h-[1e+06px] align-middle 2xl:hidden", styles.className2)}>
        <div className="block max-h-[1e+06px] p-px [overflow-wrap:break-word] 2xl:hidden" id={d.id}>
          <h2 className="block max-h-[1e+06px] mr-40 text-3xl font-bold leading-9 max-md:mr-0 2xl:hidden" data-component="heading">
            {d.title}
          </h2>
        </div>
        <div className="w-25 block max-h-[1e+06px] pt-2 pb-5 px-px 2xl:hidden">
          <hr className="box-content w-24.5 h-0 border-b-[6px] border-solid border-b-color-014 block min-w-2.5 max-w-full max-h-[1e+06px] overflow-hidden text-muted-foreground 2xl:hidden" />
          {" "}
        </div>
        <div className="block max-h-[1e+06px] p-px [overflow-wrap:break-word] 2xl:hidden">
          <p className="block max-h-[1e+06px] 2xl:hidden" />
          <div className="block max-h-[1e+06px] 2xl:hidden">
            <p className="block max-h-[1e+06px] mb-[1.35rem] 2xl:hidden">
              None found.
            </p>
          </div>
          <p className="block max-h-[1e+06px] mb-[1.35rem] 2xl:hidden" />
        </div>
      </div>
      {" "}
    </div>
  );
}
