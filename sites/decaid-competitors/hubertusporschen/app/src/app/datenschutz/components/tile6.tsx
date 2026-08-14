export type Tile6Data = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile6({ d }: { d: Tile6Data }) {
  return (
    <p className="block mb-[14.9px] text-muted-foreground text-base leading-[1.6875rem] max-md:mb-3.5 max-md:[font-size:inherit] 2xl:hidden">
      <strong className="inline text-foreground font-semibold 2xl:hidden">
        {d.description}
      </strong>
      {d.description2}
    </p>
  );
}
