import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  description: string;
  title: string;
  description2: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className="block max-w-[33.3333%] pl-[0.9375rem] grow max-lg:max-w-full max-lg:shrink-0 max-md:basis-[390px] md:max-lg:basis-[250px]">
      <div className="h-full flex relative flex-col">
        <div className={cn("min-h-2.5 block relative mt-20 mb-5 p-7.5", styles.className)}>
          <div className={cn("w-80 h-full border-[5px] border-solid border-color-002 block absolute top-0 left-0 overflow-hidden bg-background [background-clip:padding-box] [-webkit-background-clip:padding-box] max-md:w-[15.8125rem]", styles.className2)} />
          {" "}
          <div className="h-full min-h-2.5 inline-block relative clear-both z-1 align-middle">
            <div className="h-21 min-h-2.5 block relative max-w-20 -mt-18 mb-5 mx-auto p-px">
              <div className="w-20 h-full block absolute top-0 left-0 rounded-[100px] overflow-hidden bg-primary [background-clip:padding-box] [-webkit-background-clip:padding-box]" />
              {" "}
              <div className="w-full h-20.5 min-h-20 inline-block relative clear-both z-1 align-middle">
                <div className="block p-px">
                  <p className="block text-background [font-family:Arial,_Helvetica,_sans-serif] text-[3.125rem] leading-20 text-center">
                    {d.description}
                  </p>
                </div>
              </div>
              {" "}
            </div>
            <div className="block max-w-full mb-7.5 p-px">
              <h1 className="block text-color-033 [font-family:Roboto] text-[2.5rem] font-light leading-13 text-center max-md:text-[1.625rem] max-md:leading-[2.125rem]" data-component="heading">
                <strong className="inline font-medium">
                  {d.title}
                </strong>
              </h1>
            </div>
            <div className="block max-w-full mt-5 mb-7.5 p-px">
              <p className="block text-color-033 text-xl leading-[2.1875rem] text-left max-md:leading-7 max-md:[font-size:inherit]">
                {d.description2}
              </p>
            </div>
          </div>
          {" "}
        </div>
      </div>
    </div>
  );
}
