export type MediaTile2Data = {
  imgSrc: string;
  description: string;
};
/** A media tile. */
export default function MediaTile2({ d }: { d: MediaTile2Data }) {
  return (
    <div className="h-[154.5px] min-h-2.5 block relative max-h-[1e+06px] p-px max-md:h-[13.6625rem] md:max-lg:h-[9.7875rem] 2xl:hidden">
      <div className="h-full block absolute top-0 inset-x-0 max-h-[1e+06px] overflow-hidden [background-clip:padding-box] [-webkit-background-clip:padding-box] 2xl:hidden" />
      {" "}
      <div className="w-full h-full min-h-2.5 inline-block relative clear-both z-1 max-h-[1e+06px] align-middle text-center max-lg:[text-align:inherit] 2xl:hidden">
        <div className="block relative max-w-full max-h-[1e+06px] 2xl:hidden">
          <span className="block relative max-w-full max-h-[1e+06px] overflow-hidden 2xl:hidden">
            <img className="w-46.5 h-[6.5625rem] block max-w-full max-h-[1e+06px] overflow-clip aspect-[auto_300/169] align-top max-md:w-75 max-md:h-[10.5625rem] md:max-lg:w-47.5 md:max-lg:h-[6.6875rem] 2xl:hidden" data-component="image" alt="" height="105" src={d.imgSrc} width="186" />
          </span>
        </div>
        <div className="block max-h-[1e+06px] p-px [overflow-wrap:break-word] 2xl:hidden">
          <p className="block max-h-[1e+06px] mb-[1.35rem] leading-6 2xl:hidden">
            {d.description}
          </p>
        </div>
      </div>
      {" "}
    </div>
  );
}
