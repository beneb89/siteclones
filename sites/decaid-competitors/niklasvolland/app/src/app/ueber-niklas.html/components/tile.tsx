export type TileData = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="block px-4">
      <div className="block mb-2 text-[3.1875rem] font-semibold leading-[3.1875rem] tracking-[-1.28px] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-0)] max-lg:text-[2rem] max-lg:leading-8 max-lg:tracking-[-0.8px] 2xl:text-[3.25rem] 2xl:leading-13 2xl:tracking-[-1.3px]" style={{ backgroundImage: "linear-gradient(135deg, var(--color-007) 0%, var(--clr-25) 100%)" }}>
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
