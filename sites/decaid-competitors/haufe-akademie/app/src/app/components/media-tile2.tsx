import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile2Data = {
  ariaLabel: string;
  href: string;
  kind?: string;
  imgSrc: string;
  label: string;
  label2: string;
  description: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className="w-[36.9375rem] h-[45.8rem] min-h-px block float-left shrink-0 max-md:w-[22.4375rem] max-md:h-[27.675rem] max-md:shrink-[initial] md:max-lg:w-93 md:max-lg:h-[28.6875rem]" aria-hidden="true">
      <div className="block relative mb-6 mx-3 rounded-xl bg-surface-2">
        <a className="inline rounded-xl text-primary cursor-pointer" data-component="link" aria-label={d.ariaLabel} href={d.href}>
          {" "}
          <div className="block relative z-10 rounded-xl overflow-hidden aspect-[4/5] text-center">
            <img className={cn("h-[44.3125rem] block overflow-clip object-cover align-middle 2xl:invisible", styles.className)} data-component={d.kind} alt="" src={d.imgSrc} />
            {" "}
          </div>
          {" "}
          <div className={cn("w-[34.4375rem] block absolute bottom-0 z-11 m-2 p-8 rounded-lg bg-background", styles.className2)}>
            <div className="block mb-3 text-foreground text-xs font-medium leading-3">
              {d.label}
            </div>
            {" "}
            <div className="block mb-3 text-foreground text-2xl font-medium leading-7 tracking-[-0.24px] max-lg:text-lg max-lg:tracking-[-0.18px] max-lg:leading-[inherit]">
              {d.label2}
            </div>
            {" "}
            <div className="flex justify-between items-end">
              <div className="block text-foreground max-lg:text-sm max-lg:leading-5">
                <p className="block text-color-003">
                  {d.description}
                </p>
                {" "}
              </div>
              {" "}
              <div className="block -mr-4 -mb-4 pl-5 font-medium leading-4 max-lg:-mr-1 max-lg:-mb-1 max-md:pl-4">
                <i className="w-12 h-12 flex rounded-full justify-center items-center text-background [font-family:'Font_Awesome_Pro'] text-2xl font-normal leading-6 text-center bg-primary" />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </a>
        {" "}
      </div>
      {" "}
    </div>
  );
}
