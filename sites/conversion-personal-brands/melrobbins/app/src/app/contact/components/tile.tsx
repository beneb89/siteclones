export type TileData = {
  disabled?: boolean;
  value: string;
  text: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <option className="min-h-6 block min-w-6 pb-px px-0.5 items-center gap-[0.4375rem] whitespace-nowrap" disabled={d.disabled} value={d.value}>
      {d.text}
    </option>
  );
}
