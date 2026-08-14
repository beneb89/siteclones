export type Tile2Data = {
  value: string;
  text: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <option className="min-h-6 block min-w-6 items-center gap-[0.4375rem] whitespace-nowrap 2xl:hidden" value={d.value}>
      {d.text}
    </option>
  );
}
