export type ListRow6Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow6({ d }: { d: ListRow6Data }) {
  return (
    <li className="list-item my-1.5 pl-1.5 leading-7">
      <a className="border-b border-solid border-b-clr-1 inline text-primary font-medium cursor-pointer hover:border-primary" data-component="link" href={d.href} rel="nofollow">
        {d.label}
      </a>
    </li>
  );
}
