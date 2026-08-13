export type ListRow7Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow7({ d }: { d: ListRow7Data }) {
  return (
    <li className="list-item 2xl:hidden">
      <a className="inline text-muted-foreground cursor-pointer 2xl:hidden hover:underline" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
