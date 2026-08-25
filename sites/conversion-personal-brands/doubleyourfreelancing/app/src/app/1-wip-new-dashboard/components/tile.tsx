import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  id: string;
  href: string;
  label: string;
  ariacontrols: string;
  label2: string;
  ariacontrols2: string;
  label3: string;
  id2: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("border-2 border-solid border-border block max-h-[1e+06px] rounded-md bg-background 2xl:hidden", styles.className)} id={d.id}>
      <div className="flex max-h-[1e+06px] p-5 justify-between items-center max-md:flex-col max-md:items-start 2xl:hidden">
        <a className={cn("flex max-h-[1e+06px] flex-1 text-muted cursor-pointer 2xl:hidden", styles.className2)} data-component="link" href={d.href}>
          {" "}
          <div className="w-6.5 h-6.5 border-4 border-solid border-border block relative max-h-[1e+06px] mt-[4.5px] mr-[0.5625rem] rounded-[100%] shrink-0 basis-[26px] text-center bg-background 2xl:hidden" aria-label="Not started" role="img" />
          {" "}
          <span className="block max-h-[1e+06px] 2xl:hidden" aria-level="4" role="heading">
            {d.label}
          </span>
          {" "}
        </a>
        {"  "}
        <div className="flex max-h-[1e+06px] justify-end items-center max-md:ml-9 2xl:hidden">
          <button className="w-6 h-6 flex max-w-[24.0625rem] max-h-[1e+06px] ml-[13.5px] rounded-[100%] justify-center items-center shrink-0 basis-[24px] text-background text-sm font-extrabold leading-[1.0625rem] text-center bg-foreground cursor-pointer max-md:hidden md:max-lg:max-w-full 2xl:hidden" data-component="button" aria-controls={d.ariacontrols} aria-expanded="false">
            <span className="block max-h-[1e+06px] [font-family:ld-icons] text-[0.625rem] font-normal leading-[0.625rem] 2xl:hidden before:content-[''] before:text-background before:text-[0.625rem] before:leading-[0.625rem] before:text-center max-md:before:text-left 2xl:before:hidden" />
            {" "}
            <span className="w-px h-px block absolute min-w-0 max-h-[1e+06px] -m-px overflow-hidden [overflow-wrap:normal] [clip-path:inset(50%)] 2xl:hidden">
              Expand
            </span>
            {" "}
            <span className="w-px h-px block absolute min-w-0 max-h-[1e+06px] -m-px overflow-hidden [overflow-wrap:normal] [clip-path:inset(50%)] 2xl:hidden">
              {d.label2}
            </span>
            {" "}
          </button>
          {"  "}
          <button className="w-full hidden min-w-0 max-w-[24.0625rem] max-h-[1e+06px] ml-[13.5px] rounded-[20px] justify-center items-center text-sm font-extrabold leading-[1.0625rem] text-center cursor-pointer max-md:w-[87.3px] max-md:flex max-md:max-w-full max-md:text-left max-md:ml-0" aria-controls={d.ariacontrols2} aria-expanded="false">
            <span className="w-4.5 h-4.5 inline-block max-h-[1e+06px] p-0.5 rounded-[100%] shrink-0 basis-[18px] text-background [font-family:ld-icons] text-xs font-bold leading-4 bg-foreground max-md:block max-md:text-center 2xl:hidden before:content-[''] before:text-background before:text-xs before:font-bold before:leading-4 before:text-center 2xl:before:hidden" />
            {" "}
            <span className="inline max-h-[1e+06px] pr-[13.5px] pl-[0.425rem] text-left max-md:block max-md:[text-align:inherit] 2xl:hidden">
              Expand
            </span>
            {" "}
            <span className="w-px h-px block absolute max-h-[1e+06px] -m-px overflow-hidden [overflow-wrap:normal] [clip-path:inset(50%)] max-md:min-w-0 2xl:hidden">
              {d.label3}
            </span>
            {" "}
          </button>
          {"  "}
        </div>
        {"  "}
      </div>
      {"  "}
      <div className="hidden relative max-h-0 overflow-hidden before:content-[''] before:block before:absolute before:-top-2 before:left-16 before:z-1 before:w-4 before:h-4 before:bg-background 2xl:before:hidden" id={d.id2}>
        <div className="flex max-h-[1e+06px] mb-4.5 py-9 px-[74.3px] flex-col bg-clr-30 2xl:hidden">
          <div className="flex min-w-0 max-h-[1e+06px] justify-between text-sm leading-[0.875rem] 2xl:hidden">
            <div className="block min-w-0 max-h-[1e+06px] font-extrabold uppercase 2xl:hidden">
              {"Course Progress \t\t"}
            </div>
            {" "}
            <div className="flex min-w-0 max-h-[1e+06px] flex-wrap justify-start 2xl:hidden">
              <div className="block min-w-0 max-h-[1e+06px] mr-[0.3125rem] font-extrabold uppercase 2xl:hidden">
                {"0% Complete \t\t\t"}
              </div>
              {"  "}
              <div className="block min-w-0 max-h-[1e+06px] 2xl:hidden">
                {" 0/0 Steps \t\t\t"}
              </div>
              {" "}
            </div>
            {"  "}
          </div>
          {"  "}
          <div className="h-[0.4375rem] block min-w-0 max-h-[1e+06px] my-[0.3125rem] rounded-[7px] overflow-hidden bg-background 2xl:hidden">
            <div className="w-0 h-[0.4375rem] block max-h-[1e+06px] bg-foreground 2xl:hidden" />
            {" "}
          </div>
          {"  "}
        </div>
        {"  "}
      </div>
      {"  "}
    </div>
  );
}
