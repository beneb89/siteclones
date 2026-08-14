export type Tile3Data = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <p className="block mb-5 text-muted-foreground max-md:text-[1.0625rem] max-md:leading-[1.875rem] 2xl:hidden">
      <strong className="inline text-foreground font-semibold 2xl:hidden">
        {d.description}
      </strong>
      {d.description2}
    </p>
  );
}
