export type Logo3Data = {
  imgSrc: string;
  imgSrc2: string;
  srcSet2?: string;
  imgSrc3: string;
  srcSet?: string;
  srcSet3?: string;
};
/** A logo. */
export default function Logo3({ d }: { d: Logo3Data }) {
  return (
    <section className="w-full block relative">
      <div className="h-full flex relative max-w-285 max-md:max-w-[47.9375rem] max-lg:flex-wrap md:max-lg:max-w-256">
        <div className="w-[323.3px] h-84.5 min-h-px flex relative max-md:w-[23.4375rem] md:max-lg:w-64 md:max-lg:h-[270.1px]">
          <div className="w-full flex relative p-2.5 flex-wrap content-start">
            <div className="w-full block relative text-center">
              <div className="h-full block">
                <img className="w-75 h-79.5 inline-block max-w-full overflow-clip aspect-[auto_300/318] align-middle md:max-lg:w-59 md:max-lg:h-62.5" data-component="image" alt="" height="318" sizes="(max-width: 300px) 100vw, 300px" src={d.imgSrc} width="300" srcSet={d.srcSet} />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="w-[323.3px] h-84.5 min-h-px flex relative max-md:w-[23.4375rem] md:max-lg:w-64 md:max-lg:h-[270.1px]">
          <div className="w-full flex relative p-2.5 flex-wrap content-start">
            <div className="w-full block relative text-center">
              <div className="h-full block">
                <img className="w-75 h-79.5 inline-block max-w-full overflow-clip aspect-[auto_300/318] align-middle md:max-lg:w-59 md:max-lg:h-62.5" data-component="image" alt="" height="318" sizes="(max-width: 300px) 100vw, 300px" src={d.imgSrc2} srcSet={d.srcSet2} width="300" />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="w-[323.3px] h-84.5 min-h-px flex relative max-md:w-[23.4375rem] md:max-lg:w-64 md:max-lg:h-[270.1px]">
          <div className="w-full flex relative p-2.5 flex-wrap content-start">
            <div className="w-full block relative text-center">
              <div className="h-full block">
                <img className="w-75 h-79.5 inline-block max-w-full overflow-clip aspect-[auto_300/318] align-middle md:max-lg:w-59 md:max-lg:h-62.5" data-component="image" alt="" height="318" sizes="(max-width: 300px) 100vw, 300px" src={d.imgSrc3} width="300" srcSet={d.srcSet3} />
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
      {" "}
    </section>
  );
}
