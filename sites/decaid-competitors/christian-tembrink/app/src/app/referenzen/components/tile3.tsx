export type Tile3Data = {
  description: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <p className="block my-4.5">
      <span className="inline [font-family:Raleway] text-2xl leading-[1.8125rem]">
        <i className="inline italic">
          {d.description}
        </i>
      </span>
    </p>
  );
}
