export type TileData = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="w-[403.3px] block min-w-0 max-w-[33.3333%] max-h-[1e+06px] p-[0.9375rem] shrink-0 basis-1/3 max-md:w-[22.8125rem] max-md:max-w-full max-md:basis-full md:max-lg:w-[252.7px] 2xl:hidden">
      <blockquote className="border-l-4 border-solid border-l-color-033 block relative max-h-[1e+06px] mb-[1.35rem] pt-[0.9375rem] pb-5 pl-7.5 text-color-001 italic 2xl:hidden before:content-['“'] before:block before:absolute before:-top-[0.9375rem] before:right-[18.8875rem] before:bottom-[4.775rem] before:left-[0.3125rem] before:-z-1 before:w-[62.1px] before:h-35 before:text-clr-8 before:text-[8.75rem] before:leading-35 before:opacity-30 max-md:before:right-[263.9px] max-md:before:bottom-[6.575rem] md:max-lg:before:right-[151.5px] md:max-lg:before:bottom-[13.375rem] 2xl:before:hidden">
        <q className="inline relative z-5 max-h-[1e+06px] 2xl:hidden">
          {d.text}
        </q>
        {" "}
        <cite className="block relative z-5 max-h-[1e+06px] text-color-031 text-sm not-italic leading-[1.375rem] tracking-[1.3px] uppercase 2xl:hidden">
          {d.text2}
        </cite>
        {" "}
      </blockquote>
      {" "}
    </div>
  );
}
