export type TileData = {
  href: string;
  description: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <p className="block mb-2.5 2xl:mb-3">
      <a className="inline text-primary underline cursor-pointer" data-component="link" href={d.href}>
        {d.description}
      </a>
    </p>
  );
}
