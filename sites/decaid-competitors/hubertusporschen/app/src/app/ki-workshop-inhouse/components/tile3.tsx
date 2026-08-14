export type Tile3Data = {
  text: string;
  description: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <div className="border-l-[3px] border-solid border-l-accent block py-8 px-[1.8625rem] bg-color-005 max-md:px-7 2xl:hidden">
      <div className="block mb-3 text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[2px] uppercase max-md:leading-4 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <p className="block [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] italic leading-[1.625rem] max-md:text-[1.0625rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
