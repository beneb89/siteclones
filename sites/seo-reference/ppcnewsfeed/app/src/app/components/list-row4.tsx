export type ListRow4Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item mb-2">
      <a className="inline cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
