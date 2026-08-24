export type Tile2Data = {
  ariaLabel: string;
  label: string;
  text: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="w-[392.3px] h-183.5 block relative mr-2.5 pt-7.5 pb-[0.9375rem] px-[0.9375rem] rounded-[10px] shrink-0 overflow-hidden bg-background max-md:w-79.5 md:max-lg:w-173 2xl:w-[37.1875rem]" aria-label={d.ariaLabel} aria-roledescription="slide" role="group">
      <div className="h-[43.0625rem] block text-left">
        <div className="h-160 block">
          <div className="h-160 block leading-7 max-md:text-base max-md:leading-6">
            <iframe className="w-90.5 h-160 block max-w-full overflow-clip leading-4.5 max-md:w-72 max-md:leading-4 md:max-lg:w-165.5 2xl:w-[35.3125rem]" height="640px" title={d.label} width="360px" />
            {"  "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="h-6 flex mt-[1.5625rem] justify-start items-center">
          <cite className="h-6 flex flex-col text-sm leading-[1.3125rem]">
            <span className="block text-lg font-bold leading-6 max-md:text-[1rem]">
              {d.text}
            </span>
          </cite>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
