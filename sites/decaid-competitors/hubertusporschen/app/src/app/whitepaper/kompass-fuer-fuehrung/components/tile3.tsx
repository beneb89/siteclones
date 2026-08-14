export type Tile3Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <div className="block py-8 px-6 text-center bg-color-002 2xl:hidden">
      <div className="block mb-[0.6625rem] text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[2.375rem] font-semibold leading-9.5 tracking-[-0.95px] max-md:mb-2.5 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <div className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-3.5 tracking-[1.6px] uppercase 2xl:hidden">
        {d.text2}
        <br className="inline 2xl:hidden" />
        {d.text3}
      </div>
      {" "}
    </div>
  );
}
