export type MediaTileData = {
  href: string;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <li className="list-item pointer-events-none">
      <a className="h-10 inline-flex py-2.5 items-center gap-5 text-primary font-medium cursor-pointer pointer-events-none hover:border-clr-22 hover:text-clr-22 hover:outline-clr-22 hover:[text-decoration-color:var(--clr-22)] hover:transform-[matrix(1,0,0,1,9.8357,0)] focus:border-clr-30 focus:text-clr-30 focus:outline-clr-30 focus:[text-decoration-color:var(--clr-30)] focus:transform-[matrix(1,0,0,1,0.158011,0)]" data-component="link" href={d.href}>
        <i className="block italic pointer-events-none hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]">
          <svg className="w-[0.4375rem] h-3.5 inline overflow-hidden pointer-events-none max-lg:hidden" data-component="icon" height="14" width="7" fill="currentColor">
            <use xlinkHref="#btn-arrow-right" />
          </svg>
        </i>
        {d.label}
      </a>
    </li>
  );
}
