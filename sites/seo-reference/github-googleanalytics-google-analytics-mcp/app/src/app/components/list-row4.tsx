export type ListRow4Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item mx-2">
      <a className="inline cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] hover:underline focus:underline" data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
