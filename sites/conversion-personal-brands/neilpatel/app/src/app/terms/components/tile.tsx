export type TileData = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <p className="block mb-[33.3px] max-md:mb-[26.7px]">
      <strong className="inline font-medium">
        {d.description}
      </strong>
      {d.description2}
    </p>
  );
}
