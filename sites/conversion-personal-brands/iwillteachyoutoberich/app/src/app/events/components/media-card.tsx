import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  title: string;
  imgSrc: string;
  title2: string;
  text: string;
  text2: string;
  text3: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className="block relative z-1 mb-[106.5px] overflow-hidden max-lg:mb-20 2xl:mb-40">
      <div className="block max-w-480 px-[33.3px] mx-auto max-lg:max-w-170 max-lg:px-4 2xl:px-12.5">
        <div className={cn("grid items-center gap-[13.3px] grid-cols-2 max-lg:gap-[initial] 2xl:gap-5", styles.className)}>
          <div className="hidden min-w-0 max-lg:block">
            <div className="inline-block relative text-[2.9375rem] font-bold leading-[2.75rem] tracking-[-1.4px] uppercase max-lg:text-[2rem] max-lg:leading-[1.875rem] max-lg:tracking-[-0.96px]">
              <span className="block relative z-1 overflow-hidden whitespace-nowrap text-nowrap">
                <span className="block">
                  <h2 className="block">
                    {d.title}
                  </h2>
                  {" "}
                </span>
              </span>
            </div>
            {" "}
          </div>
          {" "}
          <div className="block p-[4.1625rem] rounded-[6.7px] overflow-hidden bg-surface-2 max-lg:mt-7.5 max-lg:p-10 max-lg:rounded-[10px] 2xl:p-25 2xl:rounded-[10px]">
            <div className={cn("flex relative before:content-[''] before:block before:w-0 before:h-[464.3px] before:pt-[464.3px] 2xl:before:h-175 2xl:before:pt-175", styles.className2)}>
              <img className="w-full h-full block absolute top-0 left-0 min-w-0 max-w-full overflow-clip object-contain pointer-events-none" data-component="image" alt="" src={d.imgSrc} />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="block pl-[3.325rem] max-lg:mt-5 max-lg:pl-0 2xl:pl-20">
            <div className="block max-lg:hidden">
              <div className="inline-block relative min-w-[34.35rem] text-[2.9375rem] font-bold leading-[2.75rem] tracking-[-1.4px] uppercase 2xl:text-[4.375rem] 2xl:leading-[4.1875rem] 2xl:tracking-[-2.1px]">
                <span className="block relative z-1 overflow-hidden whitespace-nowrap text-nowrap">
                  <span className="block">
                    <h2 className="block" data-component="heading">
                      {d.title2}
                    </h2>
                  </span>
                </span>
                <span className="block relative z-1 overflow-hidden whitespace-nowrap text-nowrap">
                  <span className="block">
                    {d.text}
                  </span>
                </span>
                <span className="block relative z-1 overflow-hidden whitespace-nowrap text-nowrap">
                  <span className="block">
                    {d.text2}
                  </span>
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="block max-w-[419.3px] mt-[1.6625rem] text-base leading-[1.3125rem] max-lg:max-w-157.5 max-lg:mt-0 max-lg:[font-size:inherit] max-lg:leading-[inherit] 2xl:max-w-157.5 2xl:mt-10 2xl:text-2xl 2xl:leading-[1.9375rem]">
              {d.text3}
              <br className="inline" />
              {" "}
              <br className="inline" />
              {"\nThis is an exclusive event for Rich Life: Road to $100K members. Sign up today to join.\t\t\t\t\t"}
            </div>
            {" "}
            <div className="block mt-10 max-lg:mt-7.5 2xl:mt-15">
              <a className="h-[2.8125rem] border border-solid border-primary inline-flex max-w-full px-5 rounded-[2.7px] justify-center items-center overflow-hidden text-background [background-size:100%_100%] [background-position:0%_50%] bg-no-repeat [background-clip:padding-box] [-webkit-background-clip:padding-box] cursor-pointer max-lg:h-15 max-lg:px-2.5 max-lg:rounded-sm 2xl:h-[3.4375rem] 2xl:px-7.5 2xl:rounded-sm" style={{ backgroundImage: "linear-gradient(var(--primary), var(--primary))" }} data-component="link" href="/rich-life-road-to-100k">
                {" "}
                <span className="block relative z-2 min-w-0 pt-0.5 overflow-hidden text-center capitalize whitespace-nowrap text-nowrap max-lg:pt-[0.15rem] 2xl:pt-[0.1875rem]">
                  Join Rich Life: Road to $100K
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
      {" "}
    </div>
  );
}
