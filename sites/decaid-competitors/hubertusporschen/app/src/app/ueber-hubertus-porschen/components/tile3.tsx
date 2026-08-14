export type Tile3Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <div className="block py-5 px-4 text-center bg-surface-2 2xl:hidden">
      <div className="block mb-[0.4rem] [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.75rem] leading-7 tracking-[-0.56px] max-md:mb-1.5 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <div className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] leading-[0.75rem] tracking-[1.33px] uppercase 2xl:hidden">
        {d.text2}
      </div>
      {" "}
    </div>
  );
}
