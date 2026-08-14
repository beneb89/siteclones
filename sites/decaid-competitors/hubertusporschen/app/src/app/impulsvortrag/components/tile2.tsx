export type Tile2Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="block p-6 bg-background 2xl:hidden">
      <div className="block mb-[0.4rem] text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-3xl leading-7.5 tracking-[-0.6px] max-md:mb-1.5 2xl:hidden">
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
