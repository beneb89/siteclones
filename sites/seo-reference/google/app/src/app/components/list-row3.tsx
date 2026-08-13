export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item">
      <a className="block py-2 [word-break:break-word] cursor-pointer whitespace-nowrap hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)] focus:underline" data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
