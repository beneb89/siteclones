export type MediaTileData = {
  imgSrc: string;
  text: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <div className="block">
      <div className="h-full min-h-full flex relative flex-col overflow-hidden">
        <div className="flex relative max-h-[30.1625rem] mb-[13.3px] rounded-[6.7px] overflow-hidden max-lg:max-h-[45.3125rem] max-lg:mb-[0.9375rem] max-lg:rounded-[10px] 2xl:max-h-[45.3125rem] 2xl:mb-5 2xl:rounded-[10px] before:content-[''] before:block before:w-0 before:h-[24.725rem] before:pt-[24.725rem] max-md:before:h-[21.4375rem] max-md:before:pt-[21.4375rem] md:max-lg:before:h-162 md:max-lg:before:pt-162 2xl:before:h-[593.3px] 2xl:before:pt-[593.3px]">
          <div className="h-full block absolute top-0 inset-x-0 z-1 min-w-0">
            <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover pointer-events-none" data-component="image" alt="" src={d.imgSrc} />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="block pr-[33.3px] max-lg:pr-0 2xl:pr-12.5">
          <div className="block text-2xl font-bold leading-[1.625rem] max-lg:text-[1.5625rem] max-lg:leading-[1.75rem] max-lg:[word-break:break-all] 2xl:text-4xl 2xl:leading-[2.5rem]">
            {d.text}
          </div>
          {" "}
          <div className="opacity-40 mt-[6.7px] overflow-hidden line-clamp-2 max-lg:mt-2.5 max-lg:opacity-[initial] 2xl:mt-2.5">
            <p className="block" />
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
