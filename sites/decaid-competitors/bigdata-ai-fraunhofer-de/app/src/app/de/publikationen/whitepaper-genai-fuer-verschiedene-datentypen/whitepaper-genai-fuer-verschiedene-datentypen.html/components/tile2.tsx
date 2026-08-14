export type Tile2Data = {
  value: string;
  text: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <option className="min-h-6 block min-w-6 pb-px px-0.5 items-center gap-1.5 font-normal whitespace-nowrap" value={d.value}>
      {d.text}
    </option>
  );
}
