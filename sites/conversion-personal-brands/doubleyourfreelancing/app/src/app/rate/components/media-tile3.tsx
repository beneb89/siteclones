export type MediaTile3Data = {
  imgSrc: string;
  description: string;
};
/** A media tile. */
export default function MediaTile3({ d }: { d: MediaTile3Data }) {
  return (
    <div className="block max-w-[33.3333%] max-h-[1e+06px] pl-[0.9375rem] grow max-md:max-w-full max-md:shrink-0 max-md:basis-[700px] 2xl:hidden">
      <div className="h-full flex relative max-h-[1e+06px] flex-col 2xl:hidden">
        <div className="h-full min-h-2.5 block relative max-h-[1e+06px] p-px 2xl:hidden">
          <div className="h-full block absolute top-0 inset-x-0 max-h-[1e+06px] overflow-hidden [background-clip:padding-box] [-webkit-background-clip:padding-box] 2xl:hidden" />
          {" "}
          <div className="w-full h-full min-h-2.5 inline-block relative clear-both z-1 max-h-[1e+06px] align-middle 2xl:hidden">
            <div className="block relative max-w-full max-h-[1e+06px] shadow-[var(--clr-23)_0px_5px_21px_-4px] 2xl:hidden">
              <span className="block relative max-w-full max-h-[1e+06px] overflow-hidden 2xl:hidden">
                <img className="w-46.5 h-[6.5625rem] block max-w-full max-h-[1e+06px] overflow-clip aspect-[auto_300/169] align-top max-md:w-75 max-md:h-[10.5625rem] md:max-lg:w-47.5 md:max-lg:h-[6.6875rem] 2xl:hidden" data-component="image" alt="" height="105" src={d.imgSrc} width="186" />
              </span>
            </div>
            <div className="block max-h-[1e+06px] mt-[0.3125rem] p-px [overflow-wrap:break-word] 2xl:hidden">
              <p className="block max-h-[1e+06px] mb-[0.975rem] text-[0.8125rem] font-bold leading-6 tracking-[1px] uppercase 2xl:hidden">
                {d.description}
              </p>
            </div>
          </div>
          {" "}
        </div>
      </div>
    </div>
  );
}
