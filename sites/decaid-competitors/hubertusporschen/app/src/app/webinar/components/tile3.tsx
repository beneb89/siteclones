export type Tile3Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <div className="block py-3 px-2 text-center bg-color-005 2xl:hidden">
      <div className="block mb-1 text-accent [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.625rem] italic leading-6.5 2xl:hidden">
        {d.text}
      </div>
      <div className="block text-color-033 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.5625rem] leading-[0.9375rem] tracking-[1.44px] uppercase max-md:leading-[0.875rem] 2xl:hidden">
        {d.text2}
      </div>
    </div>
  );
}
