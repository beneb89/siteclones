export type Tile10Data = {
  selected?: boolean;
  value: string;
  text: string;
};
/** A content tile. */
export default function Tile10({ d }: { d: Tile10Data }) {
  return (
    <option className="min-h-6 block min-w-6 pb-px px-0.5 items-center gap-2 whitespace-nowrap" selected={d.selected} value={d.value}>
      {d.text}
    </option>
  );
}
