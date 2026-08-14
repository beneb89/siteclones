export type Tile4Data = {
  text: string;
};
/** A content tile. */
export default function Tile4({ d }: { d: Tile4Data }) {
  return (
    <div className="border-l-[3px] border-solid border-l-primary block p-8 bg-surface-2 2xl:hidden">
      <blockquote className="block mb-[14.9px] [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.1875rem] italic leading-[1.8125rem] max-md:mb-3.5 2xl:hidden">
        {d.text}
      </blockquote>
      <div className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] leading-[1.0625rem] tracking-[1.4px] uppercase max-md:leading-4 2xl:hidden">
        — Kapitel 4, „Digitaler Suizid“
      </div>
    </div>
  );
}
