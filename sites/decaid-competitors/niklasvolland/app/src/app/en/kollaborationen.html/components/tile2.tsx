export type Tile2Data = {
  disabled?: boolean;
  selected?: boolean;
  value: string;
  text: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <option className="min-h-6 block min-w-6 items-center gap-[7.5px] whitespace-nowrap" disabled={d.disabled} selected={d.selected} value={d.value}>
      {d.text}
    </option>
  );
}
