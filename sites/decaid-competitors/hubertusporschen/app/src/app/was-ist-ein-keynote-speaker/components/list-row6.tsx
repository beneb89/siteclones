export type ListRow6Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow6({ d }: { d: ListRow6Data }) {
  return (
    <li className="list-item 2xl:hidden">
      <a className="inline text-primary cursor-pointer 2xl:hidden" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
