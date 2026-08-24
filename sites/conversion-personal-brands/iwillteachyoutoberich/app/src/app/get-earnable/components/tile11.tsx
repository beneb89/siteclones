export type Tile11Data = {
  value: string;
  text: string;
};
/** A content tile. */
export default function Tile11({ d }: { d: Tile11Data }) {
  return (
    <option className="min-h-6 block min-w-6 pb-px px-0.5 items-center gap-2 whitespace-nowrap" value={d.value}>
      {d.text}
    </option>
  );
}
