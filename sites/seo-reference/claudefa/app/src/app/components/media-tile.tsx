import type { ReactNode } from "react";
export type MediaTileData = {
  icon: ReactNode;
  text: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;
  text9: string;
  text10: string;
  text11: string;
  text12: string;
  text13: string;
  text14: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <div className="hidden 2xl:block 2xl:relative 2xl:z-1 2xl:mb-4.5">
      <div className="hidden 2xl:border-l-[3px] 2xl:border-solid 2xl:border-l-clr-47 2xl:flex 2xl:mb-1 2xl:py-2.5 2xl:px-3 2xl:rounded-xs 2xl:items-center 2xl:gap-2.5 2xl:bg-clr-23">
        <svg className="hidden 2xl:w-4 2xl:h-4 2xl:block 2xl:shrink-0 2xl:overflow-hidden 2xl:align-middle 2xl:text-clr-19" aria-hidden="true" fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{d.icon}</svg>
        <span className="hidden 2xl:block 2xl:text-clr-51 2xl:[font-family:sans,_'sans_Fallback'] 2xl:text-[0.6875rem] 2xl:font-bold 2xl:leading-[0.6875rem] 2xl:tracking-[1.54px] 2xl:uppercase">
          {d.text}
        </span>
        <span className="hidden 2xl:block 2xl:flex-1" />
        <span className="hidden 2xl:block 2xl:text-clr-19 2xl:text-xs 2xl:font-semibold 2xl:leading-3 2xl:tracking-[0.48px]">
          {d.text2}
        </span>
      </div>
      <div className="hidden 2xl:grid 2xl:py-[0.3125rem] 2xl:px-3 2xl:items-baseline 2xl:gap-3.5 2xl:grid-cols-[365px_60px_90px_95px]">
        <span className="hidden 2xl:block 2xl:text-clr-52 2xl:text-[0.8125rem] 2xl:leading-[1.1875rem]">
          {d.text3}
        </span>
        <span className="hidden 2xl:block 2xl:text-clr-48 2xl:text-xs 2xl:leading-[1.1875rem] 2xl:text-right">
          {d.text4}
        </span>
        <span className="hidden 2xl:block 2xl:text-clr-48 2xl:text-xs 2xl:leading-[1.1875rem] 2xl:text-right">
          {d.text5}
        </span>
        <span className="hidden 2xl:block 2xl:text-clr-53 2xl:font-semibold 2xl:text-right">
          {d.text6}
        </span>
      </div>
      <div className="hidden 2xl:grid 2xl:py-[0.3125rem] 2xl:px-3 2xl:items-baseline 2xl:gap-3.5 2xl:grid-cols-[365px_60px_90px_95px]">
        <span className="hidden 2xl:block 2xl:text-clr-52 2xl:text-[0.8125rem] 2xl:leading-[1.1875rem]">
          {d.text7}
        </span>
        <span className="hidden 2xl:block 2xl:text-clr-48 2xl:text-xs 2xl:leading-[1.1875rem] 2xl:text-right">
          {d.text8}
        </span>
        <span className="hidden 2xl:block 2xl:text-clr-48 2xl:text-xs 2xl:leading-[1.1875rem] 2xl:text-right">
          {d.text9}
        </span>
        <span className="hidden 2xl:block 2xl:text-clr-53 2xl:font-semibold 2xl:text-right">
          {d.text10}
        </span>
      </div>
      <div className="hidden 2xl:grid 2xl:py-[0.3125rem] 2xl:px-3 2xl:items-baseline 2xl:gap-3.5 2xl:grid-cols-[365px_60px_90px_95px]">
        <span className="hidden 2xl:block 2xl:text-clr-52 2xl:text-[0.8125rem] 2xl:leading-[1.1875rem]">
          {d.text11}
        </span>
        <span className="hidden 2xl:block 2xl:text-clr-48 2xl:text-xs 2xl:leading-[1.1875rem] 2xl:text-right">
          {d.text12}
        </span>
        <span className="hidden 2xl:block 2xl:text-clr-48 2xl:text-xs 2xl:leading-[1.1875rem] 2xl:text-right">
          {d.text13}
        </span>
        <span className="hidden 2xl:block 2xl:text-clr-53 2xl:font-semibold 2xl:text-right">
          {d.text14}
        </span>
      </div>
    </div>
  );
}
