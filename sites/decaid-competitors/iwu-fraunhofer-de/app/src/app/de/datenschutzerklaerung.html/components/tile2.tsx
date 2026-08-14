export type Tile2Data = {
  description: string;
  href: string;
  description2: string;
  description3: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <p className="block mb-2.5 2xl:mb-3">
      {d.description}
      <a className="inline text-primary underline cursor-pointer" data-component="link" href={d.href}>
        {d.description2}
      </a>
      {d.description3}
    </p>
  );
}
