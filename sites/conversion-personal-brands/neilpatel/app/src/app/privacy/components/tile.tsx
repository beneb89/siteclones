export type TileData = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <p className="block my-[0.85rem]">
      <strong className="inline font-semibold">
        {d.description}
      </strong>
      {d.description2}
    </p>
  );
}
