export type TileData = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <p className="box-content block mb-4 pl-10">
      {"✅ "}
      <strong className="box-content inline font-bold">
        {d.description}
      </strong>
      {d.description2}
    </p>
  );
}
