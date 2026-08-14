import type { ReactNode } from "react";
import type { MediaTile4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile4Data = {
  viewBox: string;
  dataid: string;
  icon: ReactNode;
  description: string;
  description2: string;
  viewBox2: string;
  dataid2: string;
  icon2: ReactNode;
  description3: string;
  description4: string;
};
/** A media tile. */
export default function MediaTile4({ d, styles }: { d: MediaTile4Data; styles: MediaTile4Styles }) {
  return (
    <div className="box-content block my-2.5">
      <div className="box-content flex -ml-[0.9375rem] py-[0.9375rem] justify-between items-stretch max-md:flex-wrap">
        <div className="block max-w-[50%] pl-[0.9375rem] grow max-md:max-w-full max-md:shrink-0 max-md:basis-[390px]">
          <div className={cn("flex relative flex-col", styles.className)}>
            <div className={cn("min-h-2.5 block relative p-2.5", styles.className2)}>
              <div className="w-[293.5px] h-full border-[5px] border-solid border-color-005 block absolute top-0 left-0 overflow-hidden [background-clip:padding-box] [-webkit-background-clip:padding-box] max-md:w-[20.9375rem] md:max-lg:w-[301.5px]" />
              {" "}
              <div className={cn("min-h-46.5 block relative clear-both z-1 align-middle", styles.className3)}>
                <div className="box-content w-[2.0625rem] h-[2.0625rem] table my-5 mx-auto text-[2.0625rem] leading-0 text-center">
                  <svg className={cn("box-content h-[2.0625rem] inline-block overflow-hidden align-middle text-color-002 leading-[2.0625rem]", styles.className4)} data-component="icon" viewBox={d.viewBox} data-id={d.dataid} data-name="" fill="currentColor">{d.icon}</svg>
                </div>
                <div className="block py-px px-[0.3125rem]">
                  <p className="block pt-[0.3125rem] pb-2.5 text-color-002 leading-7 text-center">
                    <strong className="inline font-extrabold">
                      {d.description}
                    </strong>
                  </p>
                  <p className="block pt-[0.3125rem] pb-2.5 leading-7">
                    {d.description2}
                  </p>
                </div>
              </div>
              {" "}
            </div>
          </div>
        </div>
        <div className="block max-w-[50%] pl-[0.9375rem] grow max-md:max-w-full max-md:shrink-0 max-md:basis-[390px]">
          <div className={cn("flex relative flex-col", styles.className5)}>
            <div className={cn("min-h-2.5 block relative p-2.5", styles.className6)}>
              <div className="w-[293.5px] h-full border-[5px] border-solid border-color-005 block absolute top-0 left-0 overflow-hidden [background-clip:padding-box] [-webkit-background-clip:padding-box] max-md:w-[20.9375rem] md:max-lg:w-[301.5px]" />
              {" "}
              <div className={cn("min-h-46.5 block relative clear-both z-1 align-middle", styles.className7)}>
                <div className="box-content w-[2.0625rem] h-[2.0625rem] table my-5 mx-auto text-[2.0625rem] leading-0 text-center">
                  <svg className="box-content w-auto h-[2.0625rem] inline-block overflow-hidden align-middle text-color-002 leading-[2.0625rem]" data-component="icon" viewBox={d.viewBox2} data-id={d.dataid2} data-name="" fill="currentColor">{d.icon2}</svg>
                </div>
                <div className="block py-px px-[0.3125rem]">
                  <p className="block pt-[0.3125rem] pb-2.5 text-color-002 leading-7 text-center">
                    <strong className="inline font-extrabold">
                      {d.description3}
                    </strong>
                  </p>
                  <p className="block pt-[0.3125rem] pb-2.5 leading-7">
                    {d.description4}
                  </p>
                </div>
              </div>
              {" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
