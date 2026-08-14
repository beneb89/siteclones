export type Tile6Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile6({ d }: { d: Tile6Data }) {
  return (
    <div className="hidden 2xl:border-l-2 2xl:border-solid 2xl:border-l-primary 2xl:block 2xl:py-[1.8625rem] 2xl:px-5 2xl:text-center 2xl:bg-surface-2">
      <div className="hidden 2xl:block 2xl:mb-2 2xl:text-primary 2xl:[font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] 2xl:text-[2.625rem] 2xl:italic 2xl:leading-10.5 2xl:tracking-[-0.84px]">
        {d.text}
      </div>
      {" "}
      <div className="hidden 2xl:block 2xl:text-muted-foreground 2xl:[font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] 2xl:text-[0.625rem] 2xl:leading-3.5 2xl:tracking-[1.4px] 2xl:uppercase">
        {d.text2}
      </div>
      {" "}
    </div>
  );
}
