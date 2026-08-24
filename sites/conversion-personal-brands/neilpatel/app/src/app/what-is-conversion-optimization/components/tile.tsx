export type TileData = {
  description: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <p className="block mb-[33.3px] max-md:mb-[26.7px]">
      <span className="inline">
        {d.description}
      </span>
    </p>
  );
}
