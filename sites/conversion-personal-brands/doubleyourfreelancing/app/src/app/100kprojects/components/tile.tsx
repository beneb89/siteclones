export type TileData = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <p className="block max-h-[1e+06px] mb-[1.35rem] 2xl:hidden">
      <b className="inline max-h-[1e+06px] font-bold 2xl:hidden">
        {d.description}
      </b>
      {d.description2}
    </p>
  );
}
