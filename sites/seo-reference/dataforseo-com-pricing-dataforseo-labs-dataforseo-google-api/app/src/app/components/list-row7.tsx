export type ListRow7Data = {
  href: string;
  label: string;
  target?: string;
};
/** A list row. */
export default function ListRow7({ d }: { d: ListRow7Data }) {
  return (
    <li className="box-content list-item">
      <a className="box-content inline text-background cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href={d.href} target={d.target}>
        {d.label}
      </a>
    </li>
  );
}
