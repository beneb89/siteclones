export type Tile9Data = {
  value: string;
  text: string;
  selected?: boolean;
};
/** A content tile. */
export default function Tile9({ d }: { d: Tile9Data }) {
  return (
    <option className="min-h-6 block min-w-6 pb-px px-0.5 items-center gap-2 whitespace-nowrap" value={d.value} selected={d.selected}>
      {d.text}
    </option>
  );
}
