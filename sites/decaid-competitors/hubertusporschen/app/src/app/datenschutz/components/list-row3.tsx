export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item 2xl:hidden">
      <a className="inline cursor-pointer 2xl:hidden" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
