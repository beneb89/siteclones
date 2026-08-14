export type Tile2Data = {
  href: string;
  description: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <p className="block my-5">
      <a className="inline text-primary underline cursor-pointer" data-component="link" href={d.href}>
        <strong className="inline text-foreground font-medium">
          {d.description}
        </strong>
      </a>
    </p>
  );
}
