export type ListRow6Data = {
  href: string;
  label: string;
  text: string;
};
/** A list row. */
export default function ListRow6({ d }: { d: ListRow6Data }) {
  return (
    <li className="list-item mb-2">
      <a className="inline text-primary underline cursor-pointer hover:border-clr-13 hover:text-clr-13 hover:outline-clr-13 hover:[text-decoration-color:var(--clr-13)]" data-component="link" href={d.href}>
        {d.label}
      </a>
      {d.text}
    </li>
  );
}
