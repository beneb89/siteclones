export type Logo4Data = {
  imgSrc: string;
  srcSet?: string;
};
/** A logo. */
export default function Logo4({ d }: { d: Logo4Data }) {
  return (
    <div className="w-[316.7px] h-100.5 min-h-px flex relative max-md:w-[22.1875rem] md:max-lg:w-[249.3px] md:max-lg:h-[19.75rem]">
      <div className="w-full flex relative p-2.5 flex-wrap content-start">
        <div className="w-full block relative text-center">
          <div className="h-full block">
            <img className="w-74 h-95.5 inline-block max-w-full overflow-clip aspect-[auto_296/382] align-middle md:max-lg:w-[14.3125rem] md:max-lg:h-74" data-component="image" alt="" height="382" sizes="(max-width: 296px) 100vw, 296px" src={d.imgSrc} width="296" srcSet={d.srcSet} />
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
