export type Tile2Data = {
  text: string;
  text2: string;
  description: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="border border-solid border-border flex p-6 flex-col bg-surface-2 2xl:hidden">
      <div className="flex mb-3 justify-between items-baseline 2xl:hidden">
        <span className="block text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.54px] uppercase max-md:leading-[1.125rem] 2xl:hidden">
          {d.text}
        </span>
        {" "}
        <span className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.5625rem] leading-[0.9375rem] tracking-[1.08px] uppercase max-md:leading-[0.875rem] 2xl:hidden">
          {d.text2}
        </span>
        {" "}
      </div>
      {" "}
      <p className="block text-muted-foreground text-sm leading-[1.4375rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
