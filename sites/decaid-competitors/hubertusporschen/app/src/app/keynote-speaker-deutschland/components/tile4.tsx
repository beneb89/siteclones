export type Tile4Data = {
  text: string;
  description: string;
};
/** A content tile. */
export default function Tile4({ d }: { d: Tile4Data }) {
  return (
    <div className="border-t-[3px] border-solid border-t-accent block p-6 bg-background 2xl:hidden">
      <div className="block mb-2 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.75rem] leading-7 tracking-[-0.56px] 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <p className="block text-muted-foreground text-sm leading-[1.375rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
