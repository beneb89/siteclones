export type Tile5Data = {
  description: string;
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile5({ d }: { d: Tile5Data }) {
  return (
    <article className="border-r border-solid border-r-border border-b border-b-border block p-[1.8625rem] bg-color-002 max-md:p-7 2xl:hidden">
      <div className="block mb-[14.9px] text-primary text-[0.9375rem] leading-[1.3125rem] tracking-[2px] max-md:mb-3.5 max-md:text-sm max-md:leading-5 2xl:hidden">
        ★★★★★
      </div>
      {" "}
      <p className="block mb-4.5 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] italic leading-[1.625rem] max-md:leading-[1.5625rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <div className="border-t border-solid border-t-border block pt-[14.9px] text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] leading-[1.1875rem] tracking-[1.1px] max-md:pt-3.5 max-md:leading-[1.125rem] 2xl:hidden">
        <strong className="block mb-0.5 text-primary text-[0.8125rem] font-bold leading-[1.0625rem] max-md:text-xs max-md:leading-4 2xl:hidden">
          {d.text}
        </strong>
        {d.text2}
      </div>
      {" "}
    </article>
  );
}
