export type Tile3Data = {
  href: string;
  label: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <div className="flex items-start gap-2.5 before:content-[''] before:block before:w-2 before:h-2 before:mt-2.5 before:bg-primary before:rounded-tl-xs">
      <a className="block min-w-0 py-1 text-sm font-normal leading-[1.25rem] cursor-pointer" href={d.href}>
        {d.label}
      </a>
    </div>
  );
}
