export type Tile4Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile4({ d }: { d: Tile4Data }) {
  return (
    <div className="block py-4 px-3 text-center bg-background 2xl:hidden">
      <div className="block mb-[0.4rem] [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.625rem] leading-[1.625rem] tracking-[-0.51px] max-md:mb-1.5 max-md:text-2xl max-md:leading-6 max-md:tracking-[-0.48px] 2xl:hidden">
        {d.text}
      </div>
      <div className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.5625rem] leading-[0.75rem] tracking-[1.26px] uppercase 2xl:hidden">
        {d.text2}
      </div>
    </div>
  );
}
