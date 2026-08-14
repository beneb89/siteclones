export type TileData = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <p className="block mb-[0.3125rem] 2xl:mb-1.5">
      {d.description}
      <br className="inline" />
      {d.description2}
    </p>
  );
}
