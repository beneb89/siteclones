export type Tile3Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <div className="flex justify-between">
      <div className="flex">
        {d.text}
      </div>
      {" "}
      <div className="flex">
        {d.text2}
      </div>
      {" "}
    </div>
  );
}
