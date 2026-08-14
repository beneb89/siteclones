import type { Tile2Styles } from "../_styles";
import { cn } from "../../../../../lib/utils";
export type Tile2Data = {
  href: string;
  label: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className="flex relative max-w-[33.3333%] p-5 grow basis-1/3 max-md:max-w-[50%] max-md:p-1.5 max-md:basis-1/2 md:max-lg:p-2.5">
      <a className={cn("flex relative p-6 rounded-3xl flex-col overflow-hidden leading-6 text-center bg-background cursor-pointer max-md:min-h-21 max-lg:p-3.5 max-md:rounded-lg max-md:text-base max-md:leading-[1.1875rem] md:max-lg:rounded-[20px] md:max-lg:leading-[1.375rem] 2xl:leading-[1.625rem] before:content-[''] before:block before:absolute before:bottom-0 before:inset-x-0 before:h-2 before:bg-accent max-md:before:h-1.5", styles.className)} data-component="link" href={d.href}>
        {" "}
        <div className="block mt-1.5 text-accent [font-family:Pictograms,_sans-serif] text-7xl leading-18 max-md:text-[3.125rem] max-md:leading-12.5 max-md:mt-0" />
        {" "}
        <div className="flex justify-center items-center grow">
          <div className="block my-3 [font-family:Korb,_sans-serif] text-2xl leading-[1.8125rem] underline max-md:my-1 max-md:text-xl max-md:leading-6 md:max-lg:my-2 md:max-lg:text-[1.375rem] md:max-lg:leading-[1.625rem] 2xl:text-[1.75rem] 2xl:leading-[2.125rem]">
            {d.label}
          </div>
          {" "}
        </div>
        {" "}
      </a>
      {" "}
    </div>
  );
}
