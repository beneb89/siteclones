export type TileData = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <p className="block my-8 text-xl leading-8">
      <strong className="inline font-medium">
        {d.description}
      </strong>
      {d.description2}
    </p>
  );
}
