export type ListRow7Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow7({ d }: { d: ListRow7Data }) {
  return (
    <li className="list-item">
      <a className="inline font-semibold underline cursor-pointer" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
        {d.label}
      </a>
    </li>
  );
}
