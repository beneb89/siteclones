export type MediaTile3Data = {
  href: string;
  description: string;
  description2: string;
};
/** A media tile. */
export default function MediaTile3({ d }: { d: MediaTile3Data }) {
  return (
    <li className="hidden max-lg:list-item max-lg:pointer-events-none">
      <a className="hidden max-lg:inline max-lg:cursor-pointer max-lg:pointer-events-none" href={d.href}>
        <p className="hidden max-lg:flex max-lg:items-center max-lg:pointer-events-none">
          {d.description}
          <svg className="hidden w-3.5 h-3.5" fill="currentColor">
            <use href="#icon-arrow" />
          </svg>
        </p>
        <p className="hidden max-lg:block max-lg:text-muted max-lg:leading-4.5 max-lg:text-pretty max-lg:pointer-events-none">
          {d.description2}
        </p>
      </a>
    </li>
  );
}
