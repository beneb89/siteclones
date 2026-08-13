export type ListRow7Data = {
  href: string;
  label: string;
  text: string;
};
/** A list row. */
export default function ListRow7({ d }: { d: ListRow7Data }) {
  return (
    <li className="list-item">
      <a className="inline text-primary underline cursor-pointer hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-background focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]" data-component="link" href={d.href}>
        {d.label}
      </a>
      {d.text}
    </li>
  );
}
