export type Tile2Data = {
  description: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <p className="block pb-[25.5px]">
      <em className="inline italic">
        <span className="inline font-normal">
          {d.description}
        </span>
      </em>
    </p>
  );
}
