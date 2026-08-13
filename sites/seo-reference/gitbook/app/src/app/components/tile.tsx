export type TileData = {
  description: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="block relative mt-5 justify-start self-start max-w-3xl w-full 2xl:hidden">
      <p className="block justify-start self-start max-w-3xl w-full 2xl:hidden">
        {d.description}
      </p>
    </div>
  );
}
