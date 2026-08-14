export type TileData = {
  description: string;
  description2: string;
  description3: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <p className="block pt-[0.3125rem] pb-2.5 leading-7">
      {d.description}
      <strong className="inline font-extrabold">
        {d.description2}
      </strong>
      {d.description3}
    </p>
  );
}
