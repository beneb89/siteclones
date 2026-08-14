export type TileData = {
  href: string;
  label: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="flex relative max-w-[50%] p-5 grow basis-1/2 max-md:p-1.5 md:max-lg:p-2.5">
      <a className="w-full h-[6.675rem] flex relative p-6 rounded-3xl flex-col overflow-hidden leading-6 text-center bg-background cursor-pointer max-md:h-21 max-md:min-h-21 max-lg:p-3.5 max-md:rounded-lg max-md:text-base max-md:leading-[1.1875rem] md:max-lg:h-[4.775rem] md:max-lg:rounded-[20px] md:max-lg:leading-[1.375rem] 2xl:h-[6.975rem] 2xl:leading-[1.625rem] before:content-[''] before:block before:absolute before:top-[6.175rem] before:bottom-0 before:inset-x-0 before:h-2 before:bg-accent max-md:before:top-19.5 max-md:before:h-1.5 md:max-lg:before:top-[4.275rem] 2xl:before:top-[6.475rem]" data-component="link" href={d.href}>
        {" "}
        <div className="block mt-1.5 text-accent [font-family:Pictograms,_sans-serif] text-7xl leading-18 max-md:text-[3.125rem] max-md:leading-12.5 max-md:mt-0" />
        {" "}
        <div className="flex justify-center items-center grow">
          <div className="block my-3 [font-family:Korb,_sans-serif] text-2xl leading-[1.8125rem] underline max-md:my-1 max-md:text-xl max-md:leading-6 md:max-lg:my-2 md:max-lg:text-[1.375rem] md:max-lg:leading-[1.625rem] 2xl:text-[1.75rem] 2xl:leading-[2.125rem]">
            {d.label}
          </div>
          {" "}
        </div>
        {" "}
      </a>
      {" "}
    </div>
  );
}
