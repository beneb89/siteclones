export type TileData = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <p className="block relative z-1 max-h-[1e+06px] mb-[1.425rem] text-[1.1875rem] leading-9 2xl:hidden">
      {d.description}
      <em className="inline max-h-[1e+06px] italic 2xl:hidden">
        {d.description2}
      </em>
    </p>
  );
}
