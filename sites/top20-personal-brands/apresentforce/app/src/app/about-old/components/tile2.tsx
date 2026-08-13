export type Tile2Data = {
  href: string;
  description: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="w-full flex relative justify-start items-center content-center [align-self:start] shrink-0 gap-2.5 overflow-hidden">
      <div className="w-[288.5px] flex relative z-1 flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[320.5px] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-[721.3px] 2xl:w-[295.7px]">
        <p className="block text-color-007 [font-family:'ABC_Diatype_Regular',_'ABC_Diatype_Regular_Placeholder',_sans-serif] text-lg leading-6">
          <a className="inline text-color-019 cursor-pointer" data-component="link" href={d.href} rel="noopener" target="_blank">
            {d.description}
          </a>
        </p>
      </div>
    </div>
  );
}
