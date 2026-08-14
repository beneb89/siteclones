export type Tile2Data = {
  description: string;
  description2: string;
  description3: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <p className="block my-5">
      {d.description}
      <strong className="inline font-medium">
        {d.description2}
      </strong>
      {d.description3}
    </p>
  );
}
