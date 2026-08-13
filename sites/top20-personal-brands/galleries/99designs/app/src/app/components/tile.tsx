export type TileData = {
  href: string;
  label: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="block ml-[0.9375rem] 2xl:ml-5">
      <a className="h-[1.6rem] flex items-center [font-family:'Graphik_Medium',_sans-serif] whitespace-nowrap text-nowrap cursor-pointer focus:outline-clr-10 focus:[outline-style:dotted] focus:outline-1" data-component="link" href={d.href}>
        {d.label}
      </a>
    </div>
  );
}
