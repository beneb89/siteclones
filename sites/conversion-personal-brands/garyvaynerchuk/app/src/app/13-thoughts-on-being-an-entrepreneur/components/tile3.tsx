export type Tile3Data = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <p className="block pb-[25.5px]">
      <strong className="inline font-bold">
        {d.description}
      </strong>
      {d.description2}
    </p>
  );
}
