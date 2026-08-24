export type TileData = {
  text: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <span className="block relative z-1 overflow-hidden whitespace-nowrap text-nowrap">
      <span className="block">
        {d.text}
      </span>
    </span>
  );
}
