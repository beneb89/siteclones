export type ListRow4Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item pointer-events-none">
      <a className="block py-2 px-3 rounded-sm font-medium cursor-pointer pointer-events-none" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
