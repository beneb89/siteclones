export type Tile5Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile5({ d }: { d: Tile5Data }) {
  return (
    <div className="block py-[1.8625rem] px-6 text-center bg-background max-md:py-7 2xl:hidden">
      <div className="block mb-2 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[2.625rem] italic leading-10.5 tracking-[-0.84px] 2xl:hidden">
        {d.text}
      </div>
      <div className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[0.9375rem] tracking-[1.6px] uppercase 2xl:hidden">
        {d.text2}
      </div>
    </div>
  );
}
