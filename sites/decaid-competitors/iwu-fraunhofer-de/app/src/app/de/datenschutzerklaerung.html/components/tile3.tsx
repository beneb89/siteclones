export type Tile3Data = {
  description: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <p className="block mb-2.5 2xl:mb-3">
      <b className="inline font-normal">
        {d.description}
      </b>
    </p>
  );
}
