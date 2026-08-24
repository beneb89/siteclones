export type TileData = {
  description: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <p className="block my-[13.3px] max-lg:my-[0.9375rem] 2xl:my-5">
      <strong className="inline font-bold">
        {d.description}
      </strong>
    </p>
  );
}
