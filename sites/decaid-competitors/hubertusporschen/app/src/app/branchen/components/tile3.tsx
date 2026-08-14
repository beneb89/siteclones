export type Tile3Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <div className="border-t-[3px] border-solid border-t-primary block p-8 text-center bg-surface-2 2xl:hidden">
      <div className="block mb-3 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[3.5rem] font-medium italic leading-14 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <div className="block mb-[0.6625rem] [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-lg font-semibold leading-[1.4375rem] max-md:mb-2.5 2xl:hidden">
        {d.text2}
      </div>
      {" "}
      <div className="block text-muted-foreground text-sm leading-[1.375rem] 2xl:hidden">
        {d.text3}
      </div>
      {" "}
    </div>
  );
}
