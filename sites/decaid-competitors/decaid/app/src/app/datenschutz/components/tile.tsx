export type TileData = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <p className="block mb-2.5">
      <strong className="inline font-bold">
        {d.description}
      </strong>
      <br className="inline" />
      {d.description2}
    </p>
  );
}
