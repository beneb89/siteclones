import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  imgSrc: string;
  text: string;
  text2: string;
  href: string;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="border-b border-solid border-b-color-002 block py-[13.3px] max-lg:border-b-[0] max-lg:border-initial max-lg:border-b-[initial] max-lg:py-0 2xl:py-5">
      <div className="h-full min-h-full grid relative flex-col items-start gap-[13.3px] overflow-hidden grid-cols-4 max-lg:flex max-lg:grid-cols-[repeat(4,_1fr)] max-lg:gap-[initial] 2xl:gap-5">
        <div className="w-full flex relative rounded-[6.7px] overflow-hidden max-lg:mb-[0.9375rem] max-lg:rounded-[10px] 2xl:rounded-[10px] before:content-[''] before:block before:w-0 before:h-[15.5875rem] before:pt-[15.5875rem] max-md:before:h-[21.4375rem] max-md:before:pt-[21.4375rem] md:max-lg:before:h-162 md:max-lg:before:pt-162 2xl:before:h-93.5 2xl:before:pt-93.5">
          <div className="h-full block absolute top-0 inset-x-0 z-1 min-w-0">
            <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover pointer-events-none" data-component="image" alt="I Will Teach You To Be Rich by Ramit Sethi" src={d.imgSrc} />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="block col-start-3 col-end-4">
          <div className="block text-[2.1875rem] font-bold leading-[2.375rem] max-lg:text-[1.5625rem] max-lg:leading-[1.75rem] max-lg:[word-break:break-all] 2xl:text-[3.25rem] 2xl:leading-[3.5625rem]">
            {d.text}
          </div>
          {" "}
          <div className="block mt-[13.3px] max-lg:mt-2.5 2xl:mt-5">
            {d.text2}
          </div>
          {" "}
          <div className={cn("grid mt-5 gap-[13.3px] max-lg:grid-cols-1 max-lg:gap-[initial] 2xl:mt-7.5 2xl:gap-5", styles.className)}>
            <a className={cn("h-[2.8125rem] border border-solid border-primary flex max-w-full px-5 rounded-[2.7px] justify-center items-center text-background [background-size:100%_100%] [background-position:0%_50%] bg-no-repeat [background-clip:padding-box] [-webkit-background-clip:padding-box] cursor-pointer max-lg:h-15 max-lg:px-2.5 max-lg:rounded-sm 2xl:h-[3.4375rem] 2xl:px-7.5 2xl:rounded-sm after:content-[''] after:block after:absolute after:inset-0 after:z-1 after:w-[1213.5px] after:h-[15.5875rem] max-md:after:w-[21.4375rem] md:max-lg:after:w-162 2xl:after:w-455 2xl:after:h-93.5", styles.className2)} style={{ backgroundImage: "linear-gradient(var(--primary), var(--primary))" }} data-component="link" href={d.href}>
              {" "}
              <span className="block relative z-2 min-w-0 pt-0.5 overflow-hidden text-center capitalize whitespace-nowrap text-nowrap max-lg:pt-[0.15rem] 2xl:pt-[0.1875rem]">
                {d.label}
              </span>
              {" "}
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
