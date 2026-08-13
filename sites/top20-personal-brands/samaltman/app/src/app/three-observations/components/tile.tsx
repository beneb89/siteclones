export type TileData = {
  description: string;
  description2: string;
  description3: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <p className="box-content block my-6">
      {d.description}
      <b className="box-content inline font-bold">
        {d.description2}
      </b>
      {d.description3}
    </p>
  );
}
