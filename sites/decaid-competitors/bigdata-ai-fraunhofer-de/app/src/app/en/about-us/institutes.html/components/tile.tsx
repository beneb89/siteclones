import type { TileStyles } from "../_styles";
import { cn } from "../../../../../lib/utils";
export type TileData = {
  href: string;
  label: string;
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("table-row", styles.className)}>
      <div className="table-cell mt-[1.5625rem] mb-2.5 py-[0.9375rem] px-[1.5625rem] align-top md:max-lg:pr-0 2xl:mt-7.5 2xl:mb-3 2xl:py-4.5 2xl:px-7.5 before:content-[''] before:block before:w-[385.5px] before:h-0 before:-mt-[0.9375rem] before:-mr-[1.5625rem] before:mb-[0.9375rem] max-md:before:w-auto max-md:before:h-auto md:max-lg:before:w-[21.675rem] 2xl:before:w-[33.6375rem] 2xl:before:-mt-4.5 2xl:before:-mr-7.5 2xl:before:mb-4.5">
        <a className="inline-block pr-px pl-4 text-primary text-xs font-normal leading-4.5 tracking-[0.3px] underline cursor-pointer 2xl:pr-[0.075rem] 2xl:pl-[1.2rem] 2xl:text-sm 2xl:leading-[1.375rem] 2xl:tracking-[0.36px] before:content-[''] before:inline-block before:w-4 before:h-3 before:-ml-4 before:text-primary before:text-xs before:leading-3 max-md:before:h-auto 2xl:before:w-[1.2rem] 2xl:before:h-[0.9rem] 2xl:before:-ml-[1.2rem] 2xl:before:text-sm 2xl:before:leading-[0.875rem] after:content-[''] after:inline-block after:w-[0.6875rem] after:h-[0.7125rem] after:mx-[3.5px] after:text-primary after:text-[0.6875rem] after:leading-[0.6875rem] max-md:after:w-auto max-md:after:h-auto 2xl:after:w-3.5 2xl:after:h-[13.7px] 2xl:after:mx-1 2xl:after:text-sm 2xl:after:leading-[0.875rem]" data-component="link" href={d.href} target="_blank">
          {d.label}
        </a>
        {" "}
      </div>
      {" "}
      <div className="table-cell mt-[1.5625rem] mb-2.5 py-[0.9375rem] px-[1.5625rem] align-top md:max-lg:pr-px md:max-lg:pl-2 2xl:mt-7.5 2xl:mb-3 2xl:py-4.5 2xl:px-7.5 before:content-[''] before:block before:w-[10.375rem] before:h-0 before:-mt-[0.9375rem] before:mb-[0.9375rem] before:-mx-[1.5625rem] max-md:before:w-auto max-md:before:h-auto md:max-lg:before:w-[11.325rem] 2xl:before:w-[229.7px] 2xl:before:-mt-4.5 2xl:before:mb-4.5 2xl:before:-mx-7.5">
        {d.text}
      </div>
      {" "}
      <div className="table-cell mt-[1.5625rem] py-[0.9375rem] px-[1.5625rem] align-top md:max-lg:pr-px md:max-lg:pl-2 2xl:mt-7.5 2xl:py-4.5 2xl:px-7.5 before:content-[''] before:block before:w-[11.5375rem] before:h-0 before:-mt-[0.9375rem] before:mb-[0.9375rem] before:-ml-[1.5625rem] max-md:before:w-auto max-md:before:h-auto md:max-lg:before:w-[10.5rem] md:max-lg:before:mr-[1.5625rem] 2xl:before:w-[260.1px] 2xl:before:-mt-4.5 2xl:before:mb-4.5 2xl:before:-ml-7.5">
        {d.text2}
      </div>
      {" "}
    </div>
  );
}
