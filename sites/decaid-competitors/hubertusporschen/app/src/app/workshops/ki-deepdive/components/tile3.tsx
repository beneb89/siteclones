export type Tile3Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <div className="block py-10 px-6 text-center bg-color-005 2xl:hidden">
      <div className="block mb-2 text-accent [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[3.25rem] italic leading-13 tracking-[-1.56px] 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <div className="block text-color-010 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1rem] tracking-[1.52px] uppercase max-md:leading-[0.9375rem] 2xl:hidden">
        {d.text2}
      </div>
      {" "}
    </div>
  );
}
