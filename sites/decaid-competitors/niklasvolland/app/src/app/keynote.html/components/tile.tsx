export type TileData = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="block p-2 text-center">
      <div className="block mb-1.5 text-[3.5rem] font-semibold leading-14 tracking-[-1.68px] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-0)] max-lg:text-[2rem] max-lg:leading-8 max-lg:tracking-[-0.96px]" style={{ backgroundImage: "linear-gradient(135deg, var(--color-007) 0%, var(--clr-25) 100%)" }}>
        <span className="inline">
          {d.text}
        </span>
        <span className="inline">
          {d.text2}
        </span>
      </div>
      {" "}
      <div className="block text-muted text-xs font-medium leading-[1.1875rem] tracking-[1.2px] uppercase">
        {d.text3}
      </div>
      {" "}
    </div>
  );
}
