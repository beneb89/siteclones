export type MediaTileData = {
  href: string;
  srcSet: string;
  imgSrc: string;
  description: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <div className="box-content block min-w-0 overflow-x-hidden overflow-y-auto [font-family:Raleway,_sans-serif,_sans-serif]">
      <a className="h-37.5 flex mb-5 rounded-[10px] overflow-hidden text-primary cursor-pointer w-full max-md:h-[15.8125rem] max-md:flex-col" data-component="link" href={d.href} rel="noopener" target="_self">
        <div className="block shrink-0 bg-surface w-[8.4375rem] max-md:w-full">
          <picture className="inline">
            <source className="inline" srcSet={d.srcSet} type="image/webp" />
            <img className="w-full block max-w-[17.0625rem] overflow-clip object-cover align-bottom h-[9.375rem] max-md:max-w-full" data-component="image" src={d.imgSrc} />
          </picture>
        </div>
        <div className="flex p-6 items-center flex-1 gap-4 text-foreground bg-surface">
          <div className="block flex-1">
            <p className="block mb-3.5 text-base font-bold leading-[1.4375rem] max-md:text-sm max-md:leading-[1.3125rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.375rem]">
              {d.description}
            </p>
            <p className="block" />
          </div>
          <span className="border border-solid border-color-002 flex rounded-full justify-center items-center shrink-0 text-background bg-color-002 h-12 w-12">
            {" "}
            <svg className="flex overflow-hidden h-[1.3125rem] w-[1.3125rem]" data-component="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 15 12 9 18" />
            </svg>
            {" "}
          </span>
        </div>
      </a>
    </div>
  );
}
