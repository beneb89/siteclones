export type Tile2Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="block py-4 px-[14.9px] bg-color-005 max-md:px-3.5 2xl:hidden">
      <strong className="block mb-1 text-accent [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-2xl italic leading-6 2xl:hidden">
        {d.text}
      </strong>
      <span className="inline text-color-001 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.5625rem] leading-[0.9375rem] tracking-[1.44px] uppercase max-md:leading-[0.875rem] 2xl:hidden">
        {d.text2}
      </span>
    </div>
  );
}
