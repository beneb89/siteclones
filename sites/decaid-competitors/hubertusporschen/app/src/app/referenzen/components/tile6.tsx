export type Tile6Data = {
  description: string;
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile6({ d }: { d: Tile6Data }) {
  return (
    <article className="border-t-2 border-solid border-t-primary flex p-8 flex-col bg-background 2xl:hidden">
      <div className="block mb-4 text-primary text-sm leading-[1.5rem] tracking-[2px] max-md:leading-[1.375rem] 2xl:hidden">
        ★★★★★
      </div>
      {" "}
      <p className="block mb-5 grow [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.0625rem] italic leading-[1.625rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <div className="border-t border-solid border-t-border flex pt-4 flex-wrap justify-between items-baseline gap-3 text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] leading-[1.1875rem] tracking-[0.88px] max-md:leading-[1.125rem] 2xl:hidden">
        <strong className="block text-foreground [font-family:Inter,_-apple-system,_BlinkMacSystemFont,_sans-serif] text-[0.8125rem] font-semibold leading-[1.375rem] tracking-[normal] max-md:leading-[1.3125rem] 2xl:hidden">
          {d.text}
        </strong>
        <span className="block 2xl:hidden">
          {d.text2}
        </span>
      </div>
      {" "}
    </article>
  );
}
