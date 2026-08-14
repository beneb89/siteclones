export type Tile2Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="block py-4 px-5 bg-background 2xl:hidden">
      <div className="block mb-1 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.75rem] leading-7 tracking-[-0.56px] 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <div className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1rem] tracking-[1.33px] uppercase max-md:leading-[0.9375rem] 2xl:hidden">
        {d.text2}
      </div>
      {" "}
    </div>
  );
}
