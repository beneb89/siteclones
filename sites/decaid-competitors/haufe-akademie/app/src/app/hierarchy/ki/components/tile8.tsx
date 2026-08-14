export type Tile8Data = {
  value: string;
  text: string;
};
/** A content tile. */
export default function Tile8({ d }: { d: Tile8Data }) {
  return (
    <option className="hidden" value={d.value}>
      {d.text}
    </option>
  );
}
