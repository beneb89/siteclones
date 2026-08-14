export type Tile4Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile4({ d }: { d: Tile4Data }) {
  return (
    <div className="flex justify-between">
      <div className="flex min-w-0">
        {d.text}
      </div>
      {" "}
      <div className="flex min-w-0">
        {d.text2}
      </div>
      {" "}
    </div>
  );
}
