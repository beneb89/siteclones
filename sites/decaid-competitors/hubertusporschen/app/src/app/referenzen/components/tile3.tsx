export type Tile3Data = {
  text: string;
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <article className="border-l-[3px] border-solid border-l-primary block p-[1.8625rem] bg-background max-md:p-7 2xl:hidden">
      <div className="block mb-2 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[2px] uppercase max-md:leading-4 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <p className="block mb-2 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-lg font-medium leading-[1.4375rem] tracking-[-0.18px] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <p className="block text-muted-foreground text-sm leading-[1.375rem] 2xl:hidden">
        {d.description2}
      </p>
      {" "}
    </article>
  );
}
