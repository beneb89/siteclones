export type Tile2Data = {
  text: string;
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="flex items-start gap-4 2xl:hidden">
      <span className="block mt-1 shrink-0 text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.98px] max-md:leading-[1.125rem] 2xl:hidden">
        {d.text}
      </span>
      {" "}
      <div className="block 2xl:hidden">
        <p className="block mb-1 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-lg font-medium leading-[1.4375rem] 2xl:hidden">
          {d.description}
        </p>
        {" "}
        <p className="block text-muted-foreground text-[0.9375rem] leading-[1.5625rem] 2xl:hidden">
          {d.description2}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
