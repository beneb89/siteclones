export type TileData = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <p className="block mb-4.5">
      <strong className="inline text-foreground font-semibold">
        {d.description}
      </strong>
      {d.description2}
    </p>
  );
}
