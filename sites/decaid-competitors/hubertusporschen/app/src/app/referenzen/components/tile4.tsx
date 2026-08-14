export type Tile4Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile4({ d }: { d: Tile4Data }) {
  return (
    <div className="block py-8 px-5 text-center bg-background 2xl:hidden">
      <div className="block mb-2 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[2.625rem] italic leading-10.5 tracking-[-0.84px] 2xl:hidden">
        {d.text}
      </div>
      <div className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] leading-3.5 tracking-[1.4px] uppercase 2xl:hidden">
        {d.text2}
      </div>
    </div>
  );
}
