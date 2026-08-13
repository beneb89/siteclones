export type TileData = {
  description: string;
  href: string;
  rel?: string;
  target?: string;
  label: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="block py-6">
      <p className="block text-color-001 font-medium">
        {d.description}
      </p>
      <div className="flex mt-2 flex-wrap items-center gap-y-1 gap-x-4 text-muted-foreground text-sm leading-5">
        <a className="block text-color-001 underline cursor-pointer" data-component="link" href={d.href} rel={d.rel} target={d.target}>
          {d.label}
        </a>
      </div>
    </div>
  );
}
