export type Logo2Data = {
  imgSrc: string;
  srcSet: string;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <div className="w-[316.7px] h-[316.7px] min-h-px flex relative max-md:w-[22.1875rem] max-md:h-80 md:max-lg:w-[249.3px] md:max-lg:h-[249.3px]">
      <div className="w-full flex relative p-2.5 flex-wrap content-start">
        <div className="w-full block relative text-center">
          <div className="h-full block">
            <img className="w-[18.5625rem] h-[18.5625rem] inline-block max-w-full overflow-clip aspect-[auto_300/300] align-middle max-md:w-75 max-md:h-75 md:max-lg:w-[14.3125rem] md:max-lg:h-[14.3125rem]" data-component="image" alt="" height="300" sizes="(max-width: 300px) 100vw, 300px" src={d.imgSrc} srcSet={d.srcSet} width="300" />
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
