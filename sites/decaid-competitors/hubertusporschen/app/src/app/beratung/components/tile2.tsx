export type Tile2Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="border-l-2 border-solid border-l-primary block py-[1.8625rem] px-5 text-center bg-surface-2 max-md:py-7">
      <div className="block mb-2 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[2.625rem] italic leading-10.5 tracking-[-0.84px]">
        {d.text}
      </div>
      {" "}
      <div className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] leading-3.5 tracking-[1.4px] uppercase">
        {d.text2}
      </div>
      {" "}
    </div>
  );
}
