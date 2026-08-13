export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="list-item mx-2">
      <a className="inline cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] hover:underline focus:underline" data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
