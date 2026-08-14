export type Tile2Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="block p-6 bg-primary 2xl:hidden">
      <div className="block mb-2 text-accent [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[3.375rem] italic leading-13.5 tracking-[-1.62px] 2xl:hidden">
        {d.text}
      </div>
      <div className="block text-color-018 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-3.5 tracking-[1.6px] uppercase 2xl:hidden">
        {d.text2}
        <br className="inline 2xl:hidden" />
        {d.text3}
      </div>
    </div>
  );
}
