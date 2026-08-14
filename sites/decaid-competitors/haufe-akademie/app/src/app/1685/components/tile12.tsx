export type Tile12Data = {
  value: string;
  text: string;
};
/** A content tile. */
export default function Tile12({ d }: { d: Tile12Data }) {
  return (
    <option className="hidden" value={d.value}>
      {d.text}
    </option>
  );
}
