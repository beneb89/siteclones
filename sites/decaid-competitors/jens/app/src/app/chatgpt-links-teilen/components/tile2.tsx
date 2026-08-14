export type Tile2Data = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <p className="block my-5">
      <strong className="inline font-medium">
        {d.description}
      </strong>
      {d.description2}
    </p>
  );
}
