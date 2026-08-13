export type Tile7Data = {
  text: string;
};
/** A content tile. */
export default function Tile7({ d }: { d: Tile7Data }) {
  return (
    <div className="block relative max-lg:invisible">
      <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
        {"    "}
      </span>
      <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
        {"    "}
      </span>
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
