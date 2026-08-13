export type TileData = {
  text: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="block relative max-lg:invisible">
      <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
        {"    "}
      </span>
      <span className="inline text-accent max-lg:invisible">
        {d.text}
      </span>
      {"\n"}
    </div>
  );
}
