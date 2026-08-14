export type Tile3Data = {
  description: string;
  description2: string;
  description3: string;
  description4: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <p className="block my-5">
      <strong className="inline font-medium">
        {d.description}
      </strong>
      {d.description2}
      <strong className="inline font-medium">
        {d.description3}
      </strong>
      {d.description4}
    </p>
  );
}
