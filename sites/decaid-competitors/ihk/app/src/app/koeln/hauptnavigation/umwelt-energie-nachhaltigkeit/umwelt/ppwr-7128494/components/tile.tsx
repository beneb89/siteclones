export type TileData = {
  href: string;
  label: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="block mb-4 max-lg:mb-[0.9rem] 2xl:mb-[1.1rem]">
      <a className="inline relative -mb-0.5 -mx-px pr-[0.3125rem] pb-0.5 pl-[0.4375rem] underline [word-break:break-word] [overflow-wrap:break-word] bg-surface cursor-pointer after:content-[''] after:ml-[0.1875rem] after:text-clr-27 after:text-lg after:leading-[1.6875rem]" data-component="link" href={d.href} rel="noopener" target="_blank" title="externer Link">
        <span className="inline">
          {d.label}
        </span>
      </a>
      {" "}
    </div>
  );
}
