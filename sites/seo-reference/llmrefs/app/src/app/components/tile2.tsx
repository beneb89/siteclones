export type Tile2Data = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <p className="block my-6">
      <strong className="inline text-color-001 font-semibold">
        {d.description}
      </strong>
      {d.description2}
    </p>
  );
}
