export type TileData = {
  href: string;
  label: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <span className="flex items-center gap-2">
      <a className="block cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
      <span className="block text-border">
        /
      </span>
    </span>
  );
}
