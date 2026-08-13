export type TileData = {
  description: string;
  href: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="block">
      <p className="block pb-2 text-xs [font-weight:550] leading-3 uppercase">
        {d.description}
      </p>
      <p className="block [font-weight:450] leading-[1.375rem] text-balance">
        <a className="inline [font-weight:550] leading-6 cursor-pointer hover:text-clr-23 hover:outline-clr-23 hover:[text-decoration-color:var(--clr-23)] hover:underline focus:outline-clr-26" data-component="link" href={d.href}>
          <span className="inline">
            {d.description2}
          </span>
        </a>
      </p>
    </div>
  );
}
