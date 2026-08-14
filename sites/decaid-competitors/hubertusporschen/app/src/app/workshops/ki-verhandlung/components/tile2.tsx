export type Tile2Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="block py-5 px-4 bg-color-002 2xl:hidden">
      <div className="block mb-[0.4rem] text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] leading-[1rem] tracking-[1.71px] uppercase max-md:mb-1.5 max-md:leading-[0.9375rem] 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <div className="block text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] font-semibold leading-[1.3125rem] max-md:text-[1.0625rem] 2xl:hidden">
        {d.text2}
      </div>
      {" "}
    </div>
  );
}
