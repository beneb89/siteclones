export type Tile3Data = {
  description: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <p className="block pb-[25.5px]">
      <span className="inline font-normal">
        {d.description}
      </span>
    </p>
  );
}
