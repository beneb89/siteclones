export type Tile3Data = {
  text: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <span className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 block rounded-full bg-primary" />
      {d.text}
    </span>
  );
}
