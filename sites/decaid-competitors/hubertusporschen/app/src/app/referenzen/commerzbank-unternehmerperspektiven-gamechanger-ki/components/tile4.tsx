export type Tile4Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile4({ d }: { d: Tile4Data }) {
  return (
    <div className="block p-5 text-center bg-color-005 2xl:hidden">
      <div className="block mb-1 text-accent [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.75rem] leading-7 tracking-[-0.56px] 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <div className="block text-color-010 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.5625rem] font-medium leading-[0.9375rem] tracking-[1.26px] uppercase max-md:leading-[0.875rem] 2xl:hidden">
        {d.text2}
      </div>
      {" "}
    </div>
  );
}
