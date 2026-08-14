export type TileData = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <p className="box-content block pt-[0.3125rem] pb-2.5 leading-7">
      <strong className="box-content inline font-extrabold">
        {d.description}
      </strong>
      {d.description2}
    </p>
  );
}
