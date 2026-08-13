export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item py-1 px-3">
      <a className="inline font-medium cursor-pointer" aria-current="page" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
