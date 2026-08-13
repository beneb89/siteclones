export type ListRow6Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow6({ d }: { d: ListRow6Data }) {
  return (
    <li className="list-item mb-3">
      <a className="inline text-color-001 cursor-pointer hover:text-background hover:[text-decoration-color:var(--background)]" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
