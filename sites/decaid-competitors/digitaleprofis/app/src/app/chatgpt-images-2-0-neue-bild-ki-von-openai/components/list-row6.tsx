export type ListRow6Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow6({ d }: { d: ListRow6Data }) {
  return (
    <li className="list-item">
      <a className="inline font-semibold underline cursor-pointer" data-component="link" href={d.href} rel="noreferrer noopener" target="_blank">
        {d.label}
      </a>
    </li>
  );
}
