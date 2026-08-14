export type Tile3Data = {
  description: string;
  description2: string;
  description3: string;
  href: string;
  description4: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <p className="block my-5">
      {d.description}
      <strong className="inline font-medium">
        {d.description2}
      </strong>
      {d.description3}
      <a className="inline text-primary underline cursor-pointer" data-component="link" href={d.href}>
        {d.description4}
      </a>
      .
    </p>
  );
}
