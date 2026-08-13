export type MediaTileData = {
  href: string;
  description: string;
  description2: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <li className="h-9.5 list-item z-10 opacity-0 pointer-events-none max-lg:hidden">
      <a className="inline cursor-pointer pointer-events-none max-lg:hidden group" data-component="link" href={d.href}>
        <p className="flex items-center pointer-events-none max-lg:hidden">
          {d.description}
          <svg className="block opacity-0 shrink-0 overflow-hidden align-middle pointer-events-none w-3.5 h-3.5 max-lg:hidden focus:outline-clr-25 focus:[outline-style:auto] focus:outline-[5px] group-hover:opacity-100" fill="currentColor">
            <use href="#icon-arrow" />
          </svg>
        </p>
        <p className="block text-muted leading-4.5 text-pretty pointer-events-none max-lg:hidden">
          {d.description2}
        </p>
      </a>
    </li>
  );
}
