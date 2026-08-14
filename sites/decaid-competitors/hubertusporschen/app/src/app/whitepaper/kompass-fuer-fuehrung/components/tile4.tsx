export type Tile4Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile4({ d }: { d: Tile4Data }) {
  return (
    <div className="border-r border-solid border-r-border border-b border-b-border block py-6 px-5 bg-color-002 2xl:hidden">
      <strong className="block mb-[0.4rem] text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[2rem] font-semibold leading-8 tracking-[-0.8px] max-md:mb-1.5 2xl:hidden">
        {d.text}
      </strong>
      {" "}
      <span className="inline text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-3.5 tracking-[1.4px] uppercase 2xl:hidden">
        {d.text2}
        <br className="inline 2xl:hidden" />
        {d.text3}
      </span>
      {" "}
    </div>
  );
}
