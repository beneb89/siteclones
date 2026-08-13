export type ListRow6Data = {
  href: string;
  label: string;
  target?: string;
};
/** A list row. */
export default function ListRow6({ d }: { d: ListRow6Data }) {
  return (
    <li className="box-content list-item">
      <a className="box-content inline text-background cursor-pointer hover:border-accent hover:text-accent hover:outline-accent hover:[text-decoration-color:var(--accent)]" data-component="link" href={d.href} target={d.target}>
        {d.label}
      </a>
    </li>
  );
}
