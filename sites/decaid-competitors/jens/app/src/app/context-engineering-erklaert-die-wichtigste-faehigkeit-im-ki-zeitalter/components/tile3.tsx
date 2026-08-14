export type Tile3Data = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <p className="block my-5">
      <strong className="inline font-medium">
        {d.description}
      </strong>
      {d.description2}
    </p>
  );
}
