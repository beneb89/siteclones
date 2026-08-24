export type Tile2Data = {
  href: string;
  description: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <p className="block pb-[25.5px]">
      <a className="inline text-primary font-bold cursor-pointer" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
        {d.description}
      </a>
    </p>
  );
}
