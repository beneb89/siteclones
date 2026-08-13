export type ListRowData = {
  ariaLabel: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="hidden 2xl:list-item">
      <a className="hidden 2xl:inline 2xl:px-2.5 2xl:text-clr-18 2xl:font-medium 2xl:cursor-pointer" aria-label={d.ariaLabel} href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
