export type Tile5Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile5({ d }: { d: Tile5Data }) {
  return (
    <div className="block py-5 px-4 text-center bg-background 2xl:hidden">
      <div className="block mb-[0.4rem] text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-2xl leading-6 tracking-[-0.48px] max-md:mb-1.5 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <div className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[0.75rem] tracking-[1.14px] uppercase 2xl:hidden">
        {d.text2}
      </div>
      {" "}
    </div>
  );
}
