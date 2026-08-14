export type Tile4Data = {
  description: string;
  href: string;
  description2: string;
  description3: string;
};
/** A content tile. */
export default function Tile4({ d }: { d: Tile4Data }) {
  return (
    <p className="block my-5">
      {d.description}
      <a className="inline text-primary underline cursor-pointer" data-component="link" href={d.href}>
        {d.description2}
      </a>
      {d.description3}
    </p>
  );
}
