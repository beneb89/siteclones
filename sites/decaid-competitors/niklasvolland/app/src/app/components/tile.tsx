export type TileData = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="block max-lg:text-left">
      <div className="block text-muted-foreground text-[1.375rem] font-semibold leading-[2.1875rem] tracking-[-0.22px] max-lg:text-2xl max-lg:leading-[2.375rem] max-lg:tracking-[-0.24px]">
        <span className="inline">
          {d.text}
        </span>
        <span className="inline">
          {d.text2}
        </span>
      </div>
      {" "}
      <div className="block mt-1 text-muted text-[0.6875rem] leading-[1.125rem] tracking-[0.66px] uppercase">
        {d.text3}
      </div>
      {" "}
    </div>
  );
}
