export type ListRow9Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow9({ d }: { d: ListRow9Data }) {
  return (
    <li className="list-item">
      <a className="inline cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
